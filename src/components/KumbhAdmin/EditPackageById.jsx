import React, { useState, useMemo, useRef, useEffect } from "react";
import { Box, Text, Textarea } from "@chakra-ui/react";
import JoditEditor from "jodit-react";
import AdminHeader from "../DashboardPage/AdminHeader";
import { 
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Image,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Sections from "./Sections";

export default function EditPackageById() {
  const toast = useToast();
  const navigate = useNavigate();
  const editor = useRef(null);
  const { title } = useParams();
  const [id, setId] = useState("");
  const [packageTitle, setPackageTitle] = useState("");
  const [packageDes, setPackageDes] = useState("");
  const [pic, setPic] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDes, setMetaDes] = useState("");
  const [packageAbout, setPackageAbout] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    packageTitle: "",
    packageDes: "",
    metaTitle: "",
    metaDes: "",
  });

  const fetchData = async () => {
    try {
      const token=localStorage.getItem('token');
      if(!token){
        navigate('/adminlogin')
      }
      // console.log(title)
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}api/v1/kumbh/getpackagebytitle/${title}`,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      if (data.success === true) {
        setPackageTitle(data.data.title);
        setPackageDes(data.data.description);
        setPic(data.data.image);
        setMetaTitle(data.data.meta_title);
        setMetaDes(data.data.meta_description);
        setPackageAbout(data.data.about);
        setId(data.data._id);
      } else {
        navigate("/kumbhadmin/editpackage");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const postDetails = (pic) => {
    if (pic === undefined) {
      toast({
        title: "please select an image",
        description: "Warning",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    if (pic.type === "image/jpeg" || pic.type === "image/png") {
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "Simple-chat");
      data.append("cloud_name", "dwlxffmro");
      fetch("https://api.cloudinary.com/v1_1/dwlxffmro/image/upload", {
        //last image/upload is addded by us with the API base URL
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast({
        title: "please select an image",
        description: "Warning",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handlesubmit = async () => {
    let errors = {};
    if (packageTitle === "") {
      errors.packageTitle = "Enter Package Title";
    }
    if (packageDes === "") {
      errors.packageDes = "Enter Package Description";
    }
    if (metaTitle === "") {
      errors.metaTitle = "Enter Meta Title";
    }
    if (metaDes === "") {
      errors.metaDes = "Enter Meta Description";
    }
    if (
      packageTitle === "" ||
      packageDes === "" ||
      metaTitle === "" ||
      metaDes === ""
    ) {
      setError(errors);
      toast({
        title: "Enter all fields",
        description: "Please enter All title and description ",
        position: "top",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      if (packageAbout === "") {
        toast({
          title: "Enter package About Description",
          description: "Please enter Package About",
          position: "top",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      } else {

        //API call
        try {
          setLoading(true);
          const token = localStorage.getItem("token");
          if (!token) {
            navigate("/adminlogin");
          }
          const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}api/v1/kumbh/editpackage`,
            {
              method: "put",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                id: id,
                title: packageTitle,
                image: pic ? pic : "NA",
                description: packageDes,
                about: packageAbout,
                meta_title: metaTitle,
                meta_description: metaDes,
              }),
            }
          );
          setLoading(false);
          const data = await response.json();
          if (data.success === true) {
            toast({
              title: "Successfully Editted",
              description: "Package is edited successfully",
              position: "top",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
          navigate('/kumbhadmin/editpackage')
            return;
          } else {
            toast({
              title: data.msg,
              description: "Error occured",
              position: "top",
              status: "error",
              duration: 2000,
              isClosable: true,
            });
          }
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      }
    }
  };

  const config = useMemo(
    () => ({
      zIndex: 0,
      readonly: false,
      activeButtonsInReadOnly: ["source", "fullsize", "print", "about"],
      toolbarButtonSize: "middle",
      theme: "default",

      allowResizeY: false,
      enableDragAndDropFileToEditor: true,
      saveModeInCookie: false,
      spellcheck: true,
      editorCssClass: false,
      triggerChangeEvent: false,
      // height: 280,
      direction: "ltr",
      language: "pt_BR",
      debugLanguage: false,
      i18n: "en",
      tabIndex: 1,
      toolbar: true,
      enter: "P",
      useSplitMode: false,
      colorPickerDefaultTab: "background",
      imageDefaultWidth: 100,
      removeButtons: ["about", "print", "file"],
      disablePlugins: ["paste", "stat", "speech-recognize", "video"],
      // events: {},
      textIcons: false,
      placeholder: "Enter text here",
      showXPathInStatusbar: false,
    }),
    []
  );

  return (
    <Box w={"100vw"} minH={"100vh"} bgColor={"white"} overflow={"hidden"}>
      <AdminHeader></AdminHeader>
      <Box
        w={"100vw"}
        minH={"90%"}
        bgColor={"#FFDEAD"}
        overflow={"hidden"}
        display={"flex"}
        flexDirection={"row"}
      >
        <Sections></Sections>
        <Box width={"80%"} ml={4} my={4} textAlign={"center"}>
          <FormControl>
            <FormLabel fontFamily={"Georgia, serif"}>
              Edit Package Title
            </FormLabel>
            <Input
              type="text"
              bgColor={"white"}
              mb={4}
              borderWidth={2}
              borderColor={error.packageTitle ? "red" : "white"}
              value={packageTitle}
              onChange={(e) => {
                setPackageTitle(e.target.value);
                setError({ ...error, packageTitle: "" });
              }}
            />
            <Image src={pic} height={'20%'} width={'20%'} objectFit={'cover'}></Image>
            <FormLabel fontFamily={"Georgia, serif"}>
              Edit Package Image
            </FormLabel>
            <Input
              type="file"
              bgColor={"white"}
              mb={4}
              borderWidth={2}
              accept="image/*"
              onChange={(e) => postDetails(e.target.files[0])}
            />
            <Text mb="8px" fontFamily={"Georgia, serif"} textAlign={"left"}>
              Edit Package Short Description
            </Text>
            <Textarea
              backgroundColor={"white"}
              borderWidth={2}
              borderColor={error.packageDes ? "red" : "white"}
              value={packageDes}
              resize={"none"}
              maxLength={125}
              onChange={(e) => {
                setPackageDes(e.target.value);
                setError({ ...error, packageDes: "" });
              }}
            ></Textarea>

            <FormLabel fontFamily={"Georgia, serif"}>Edit Meta Title</FormLabel>
            <Input
              type="text"
              bgColor={"white"}
              mb={4}
              borderWidth={2}
              borderColor={error.metaTitle ? "red" : "white"}
              value={metaTitle}
              onChange={(e) => {
                setMetaTitle(e.target.value);
                setError({ ...error, metaTitle: "" });
              }}
            />
            <FormLabel fontFamily={"Georgia, serif"}>
              Edit Meta Description
            </FormLabel>
            <Input
              type="text"
              bgColor={"white"}
              mb={4}
              borderWidth={2}
              borderColor={error.metaDes ? "red" : "white"}
              value={metaDes}
              onChange={(e) => {
                setMetaDes(e.target.value);
                setError({ ...error, metaDes: "" });
              }}
            />
            <Text mb="8px" fontFamily={"Georgia, serif"} textAlign={"left"}>
              Edit Package About
            </Text>
            <JoditEditor
              placeholder="Your placeholder text"
              ref={editor}
              value={packageAbout}
              config={config}
              onChange={(e) => {
                setPackageAbout(e);
              }}
            />

            <Button
              isLoading={loading}
              loadingText="Submitting"
              colorScheme={"#EF3131"}
              bgColor={"#EF3131"}
              color={"white"}
              size="lg"
              m={4}
              onClick={handlesubmit}
            >
              Edit
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}
