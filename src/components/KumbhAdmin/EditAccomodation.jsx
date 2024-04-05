import React, { useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import AdminHeader from "../DashboardPage/AdminHeader";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sections from "./Sections";

export default function EditAccomodation() {
  const navigate=useNavigate();
  const [Accomodations, setAccomodations] = useState([]);
  const [fetchAgain, setFetchAgain] = useState(false);
  const toast = useToast();

  const fetchdata = async () => {
    try {
      const token=localStorage.getItem('token');
      if(!token){
        navigate('/adminlogin')
      }
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}api/v1/kumbh/getallaccomodation`,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      if (data.success === false) {
        navigate("/adminlogin");
      }
      // console.log(data);
      setAccomodations(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token=localStorage.getItem('token');
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}api/v1/kumbh/deleteaccomodation/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      if (data.success === true) {
        toast({
          title: "Successfully deleted",
          description: "Section is deleted successfully",
          position: "top",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setFetchAgain((prev) => !prev);
        return;
      }else{

        if(data.msg==='Token is not correct'|| data.msg==='Token is not there'){
          navigate('/adminlogin')
        }else{
          toast({
            title: data.msg,
            description: "Some error happened",
            position: "top",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        }
      }
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [fetchAgain]);

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
          <TableContainer>
            <Table variant="simple">
              <Thead bgColor={"white"}>
                <Tr>
                  <Th fontFamily="Georgia, serif"> Accomodation Title</Th>
                  <Th fontFamily="Georgia, serif">Edit</Th>
                  <Th fontFamily="Georgia, serif">Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Accomodations.length > 0
                  ? Accomodations.map((item, index) => {
                      return (
                        <Tr key={index}>
                          <Td fontFamily="Georgia, serif">{item.title}</Td>

                          <Td
                            cursor={"pointer"}
                            onClick={() => {navigate(`/kumbhadmin/editaccomodation/${item.title}`)}}
                          >
                            {" "}
                            <Image
                              src="/assets/edit.png"
                              alt="edit"
                              h={"20px"}
                              w={"20px"}
                              ml={2}
                            ></Image>
                          </Td>
                          <Td
                            cursor={"pointer"}
                            onClick={() => handleDelete(item._id)}
                          >
                            {" "}
                            <Image
                              src="/assets/bin.png"
                              alt="delete"
                              h={"20px"}
                              w={"20px"}
                              ml={2}
                            ></Image>
                          </Td>
                        </Tr>
                      );
                    })
                  : ""}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}
