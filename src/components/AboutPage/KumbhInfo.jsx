import React from "react";
import { Box, Center, Heading,useToast,Image,Text } from "@chakra-ui/react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import {useState ,useEffect } from "react";
import {Helmet} from "react-helmet";

export default function KumbhInfo() {
  const [sections, setSections] = useState([]);
  const [aboutTitle, setAboutTitle] = useState("");;
  // const [pic, setPic] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDes, setMetaDes] = useState("");
  const toast=useToast();
  const fetchdata = async () => {
    try {
      // console.log(title)
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}api/v1/kumbh/getallaboutfront`
      );
      const data = await response.json();
      console.log(data)
      if (data.success === true) {
        setAboutTitle(data.data[0].title);
        // setPic(data.data.image);
        setMetaTitle(data.data[0].meta_title);
        setMetaDes(data.data[0].meta_description);
        setSections(data.data[0].about);
      }
    } catch (error) {
      console.log(error);
    }
  
  };

  useEffect(()=>{
      fetchdata();
  },[])


  return (
    <Center width={"100%"} my={4} overflow={"hidden"}>
     <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDes} />
      </Helmet>
      <Center display={"flex"} flexDirection={"column"} m={8} gap={8}>
        <Text
          fontWeight={"bold"}
          textAlign={"center"}
          fontFamily="Georgia, serif"
          fontSize={40}
        >
          {aboutTitle}
        </Text>
        <div
          dangerouslySetInnerHTML={{ __html:sections }}
          style={{ width: "80%" }}
        ></div>
      </Center>
  
      </Center>
    
  );
}
