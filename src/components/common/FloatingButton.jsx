import React from "react";
import { Button, Image, Tooltip } from "@chakra-ui/react";
import {
  Box,
  Input,
  FormControl,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  Center,

  ModalBody,
  Text,
  ModalCloseButton,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
const FloatingButton = ({ onClick }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");


  const toast = useToast();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const handlesubmit = async () => {
    let newerrors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (name === "") newerrors.name = "Name is required";
    if (mobile === "") newerrors.mobile = "Mobile Number is required";
    if (email === "") {
      newerrors.email = "Email is required";
    } else if (emailRegex.test(email) === false) {
      newerrors.email = "Invalid email format";
    }
    setErrors(newerrors);

    if (Object.keys(newerrors).length === 0) {
      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}api/v1/customer/createenquiry`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name,
              mobile: mobile,
              email: email,
              address: address,
              message: message,
            }),
          }
        );
        setLoading(false);
        const data = await res.json();
        if (data.success === true) {
          toast({
            title: "🌟 Thank you for choosing Globalduniya! 🌟",
            description:
              "We will conect you shortly",
            position: "top",
            status: "success",
            duration:9000,
            isClosable: true,
          });
          onModalClose();
        } else {
          toast({
            title: data.msg,
            description: "Something Error Happened",
            position: "top",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
          onModalClose();
        }
      } catch (error) {
        setLoading(false);
        onModalClose();
        console.log(error);
      }
    }
  };

  const handleModalClose = () => {
    // Close the modal
    setName("");
    setMobile("");
    setEmail("");
    setAddress("");
    setMessage("");
    setErrors({
      name: "",
      mobile: "",
      email: "",
    });
    onModalClose();
  };

  return (
    <>
      <Modal isOpen={isModalOpen} size={"lg"} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent py={4}>
          <Center m={4} display={"flex"} flexDirection={"column"}>
            <Text
              fontSize={"larger"}
              fontWeight={"bold"}
              fontFamily={"Georgia, serif"}
              color={"#EF3131"}
              textDecoration={"underline"}
            >
              {/* ENQUIRY FORM */}
              Ready to book
            </Text>
            <Text
              fontSize={"larger"}
              // fontFamily={"Georgia, serif"}
              fontWeight={"bold"}
              fontFamily="Verdana, sans-serif"
              textAlign={"center"}
              color={"#EF3131"}
            >
              Call Us Now at +91 8989920981
            </Text>
          </Center>
          <ModalCloseButton />
          <ModalBody>
            <Box
              display={"flex"}
              flexDirection={["column", "row", "row", "row"]}
              gap={2}
              mb={4}
            >
              <FormControl isInvalid={errors.name}>
                <Input
                  type="text"
                  fontFamily={"Georgia, serif"}
                  placeholder="Enter your name"
                  focusBorderColor="white"
                  variant="filled"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrors({ ...errors, name: "" });
                  }}
                />
                {errors.name ? (
                  <FormErrorMessage fontSize={"x-small"}>
                    {errors.name}
                  </FormErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
              <FormControl isInvalid={errors.mobile}>
                <Input
                  type="number"
                  fontFamily={"Georgia, serif"}
                  placeholder="Enter your mobile number"
                  focusBorderColor="white"
                  variant="filled"
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                    setErrors({ ...errors, mobile: "" });
                  }}
                />
                {errors.mobile ? (
                  <FormErrorMessage fontSize={"x-small"}>
                    {errors.mobile}
                  </FormErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
            </Box>
            <Box
              display={"flex"}
              flexDirection={["column", "row", "row", "row"]}
              gap={2}
              mb={4}
            >
              <FormControl isInvalid={errors.email}>
                <Input
                  type="email"
                  fontFamily={"Georgia, serif"}
                  focusBorderColor="white"
                  variant="filled"
                  value={email}
                  placeholder="Enter your Email Id"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors({ ...errors, email: "" });
                  }}
                />
                {errors.email ? (
                  <FormErrorMessage fontSize={"x-small"}>
                    {errors.email}
                  </FormErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
              <FormControl>
                <Input
                  type="text"
                  fontFamily={"Georgia, serif"}
                  placeholder="Address"
                  value={address}
                  focusBorderColor="white"
                  variant="filled"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </FormControl>
            </Box>
            <Textarea
              placeholder="Message"
              focusBorderColor="white"
              fontFamily={"Georgia, serif"}
              variant="filled"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <Center mt={4}>
              <Button
                colorScheme="red"
                fontFamily={"Georgia, serif"}
                onClick={handlesubmit}
                isLoading={loading}
                loadingText="Submitting"
              >
                Submit
              </Button>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Tooltip label="Enquiry Now" placement="left">
        <Button
          position="fixed"
          bottom="6"
          right="4"
          zIndex="1"
          p="4"
          ml={4}
          backgroundColor={"transparent"}
          colorScheme="none"
          onClick={onModalOpen}
        >
          <Image
            src="/assets/information.png"
            height={"60px"}
            width={"60px"}
            _hover={{ transform: "scale(1.15)" }}
            transition="transform 0.3s ease-in-out"
          ></Image>
        </Button>
      </Tooltip>
    </>
  );
};

export default FloatingButton;
