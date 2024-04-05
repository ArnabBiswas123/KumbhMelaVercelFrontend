import {
  Center,
  Text,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function KumbhMelaAccommodation() {
 
  const [accomodations, setAccomodation] = useState([]);
  const navigate=useNavigate();
  const fetchData = async (req, res) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}api/v1/kumbh/getallfrontpageaccomodation`
      );
      const data = await res.json();
      setAccomodation(data.accomodations);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <Text
        fontWeight={"bold"}
        textAlign={"center"}
        fontFamily="Georgia, serif"
        fontSize={25}
        m={"2%"}
        id="accomodations"
      >
        KUMBH MELA ACCOMMODATION
      </Text>
      <Center
        backgroundColor={"white"}
        display={"flex"}
        minW={"100%"}
        flexWrap={"wrap"}
        flexDirection={"row"}
        gap={3}
        mb={"5%"}
      >

        {accomodations.length>0?accomodations.map((item)=>{
                return(
                  <Card
              maxW={["90%", "60%", "50%", "20%"]}
              maxH={["40%", "40%", "40%", "40%"]}
              p={0}
              backgroundColor={"white"}
              shadow={"dark-lg"}
              cursor={"pointer"}
              _hover={{ transform: "scale(1.02)" }}
              transition="transform 0.3s ease-in-out"
            >
             
              <LazyLoadImage
                src={item.image}
                alt="packages"
                style={{ height: "200px", borderRadius: "2%" }}
              ></LazyLoadImage>
              <CardBody>
                <Stack>
                  <Heading fontFamily="Georgia, serif" size="md">
                    {item.title}
                  </Heading>
                  <Text fontFamily="Georgia, serif" fontSize="md">
                    {item.description}
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter display={"flex"} justifyContent={"center"}>
                <Text
                  color={"red"}
                  h={"10%"}
                  w={"50%"}
                  textAlign={"center"}
                  cursor={"pointer"}
                  onClick={()=>{navigate(`/accomodations/${item.title}`)}}
                >
                  View Details
                </Text>
              </CardFooter>
            </Card>
                )
        }):''}
 
      </Center>
    </>
  );
}
