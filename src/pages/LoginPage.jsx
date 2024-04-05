import React, { useState } from "react";
import {
  Center,
  Text,
  VStack,
  FormControl,
  Input,
  FormLabel,
  Button,
  Image,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const submitHandler = async () => {
    if (username === "" || password === "") {
      toast({
        title: "Enter UserName and Password",
        description: "Please Enter Username and Password",
        position: "top",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}api/v1/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );
      setLoading(false);
      const data = await res.json();
      if (data.success === true) {
        localStorage.setItem("token", data.token);
        navigate("/kumbhadmin");
      } else {
        toast({
          title: data.msg,
          description: "Please Enter Valid Username and Password",
          position: "top",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        return;
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <Center w={"100vw"} h={"100vh"} bgColor={"#FFDEAD"}>
      <Center
        h={"80%"}
        w={["100%", "80%", "80%", "40%"]}
        borderRadius={"2%"}
        display={"flex"}
        flexDirection={"row"}
        bgColor={"#FFF5EE"}
        gap={"20%"}
        boxShadow="dark-lg"
      >
        <VStack w={"60%"} spacing={"10px"}>
          <Image src="/assets/gd logo.gif" height={"100px"}></Image>
          <Text fontSize={"4xl"} as={"b"} mb={4} fontFamily={"Georgia, serif"}>
            {" "}
            Admin Login
          </Text>

          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </FormControl>
          <FormControl id="Password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </FormControl>
          <Button
            colorScheme="blue"
            width="50%"
            style={{ marginTop: 15 }}
            onClick={submitHandler}
            isLoading={loading}
          >
            Submit
          </Button>
        </VStack>
      </Center>
    </Center>
  );
}
