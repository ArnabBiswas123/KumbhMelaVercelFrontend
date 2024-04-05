import React from "react";
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
  Image,
  Box,
 Text
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sections from "./Sections";
import DetailsModal from "./DetailsModal";

export default function CustomerDetails() {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();
  const [fetchAgain,setFetchAgain]=useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // to store the selected item

 const toast=useToast();
  const fetchdata = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/adminlogin");
      }
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}api/v1/customer/getallcustomer`,
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
    //   console.log(data.customer);
      setCustomers(data.customer)
    } catch (error) {
        console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token=localStorage.getItem('token');
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}api/v1/customer/deletecustomer/${id}`,
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

  const handleViewDetails = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
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
          <Text fontFamily="Georgia, serif" fontWeight={'bold'} fontSize={'x-large'} mb={2}>Customer Booking List</Text>
          <TableContainer>
            <Table>
              <Thead bgColor={"white"}>
                <Tr>
                  <Th fontFamily="Georgia, serif"> Customer Name</Th>
                  <Th fontFamily="Georgia, serif">Mobile Number</Th>
                  <Th fontFamily="Georgia, serif">Email</Th>
                  <Th fontFamily="Georgia, serif">View</Th>
                  <Th fontFamily="Georgia, serif">Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {customers.length>0?customers.map((item,index)=>{
                        return(
                            <Tr key={index}>
                            <Td fontFamily="Georgia, serif">{item.name}</Td>
                            <Td fontFamily="Georgia, serif">{item.mobile}</Td>
                            <Td fontFamily="Georgia, serif">{item.email}</Td>
                            <Td
                            cursor={"pointer"}
                            onClick={() => handleViewDetails(item)}
                          >
                            {" "}
                            <Image
                              src="/assets/eye.png"
                              alt="view"
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
                        )
                }):''}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
       {/* Modal */}
       {selectedItem && (
        <DetailsModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          item={selectedItem}
        />
      )}
    </Box>
  );
}
