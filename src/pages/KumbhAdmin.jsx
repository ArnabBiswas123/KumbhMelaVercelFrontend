import React from "react";
import { Box, Center, Text, Card, Image } from "@chakra-ui/react";
import AdminHeader from "../components/DashboardPage/AdminHeader";
import Sections from "../components/KumbhAdmin/Sections";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function KumbhAdmin() {
  const navigate = useNavigate();
  const fetchData = async (token) => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}api/v1/kumbh/getallpackage`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    if (data.success === false) {
      navigate("/adminlogin");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/adminlogin");
    }
    fetchData(token);
  });

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
        <Center m={4} display={"flex"} flexWrap={"wrap"} gap={4} ml={"20%"}>
          <Card
            direction={["column", "column", "column", "row"]}
            width={"100%"}
            overflow="hidden"
            variant="outline"
            alignItems={"center"}
            gap={3}
            cursor={"pointer"}
            boxShadow="dark-lg"
            _hover={{ transform: "scale(1.02)" }}
            transition="transform 0.3s ease-in-out"
          >
            <Image
              objectFit="cover"
              w={"200px"}
              h={"200px"}
              src="./assets/KumbhMelaLogo.jpeg"
              alt="Kumbh Logo"
            />
            <Text
              as="h2"
              fontFamily="Georgia, serif"
              fontSize={20}
              fontWeight="bold"
              color={"#4169E1"}
              textAlign={"center"}
            >
              The Kumbh Mela Project
            </Text>
          </Card>
        </Center>
      </Box>
    </Box>
  );
}
