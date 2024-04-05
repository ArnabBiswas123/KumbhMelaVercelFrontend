import React from "react";
import { Box, Image, Button, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AdminHeader() {
  const navigate=useNavigate();
  const handleLogout=()=>{
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/adminlogin");
    }else{
      localStorage.removeItem('token');
      navigate("/adminlogin");
    }
  }
  return (
    <Box
      minW={"100%"}
      display={"flex"}
      bgColor={"#0b223a"}
      // gap={3}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <NavLink to={"/"}>
        <Image
          src="/assets/gd logo.gif"
          height={"50px"}
          width={"100px"}
          m={2}
          cursor={"pointer"}
        ></Image>
      </NavLink>
      <Text color={'white'} fontFamily="Georgia, serif" textTransform="uppercase" fontSize="2xl">Welcome</Text>

      <Button colorScheme="#EF3131" onClick={handleLogout} fontFamily="Georgia, serif" bgColor={"#EF3131"} color={"white"} m={2}>
        Logout
      </Button>
    </Box>
  );
}
