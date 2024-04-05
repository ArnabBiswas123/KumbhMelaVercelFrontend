import { Box, Center, Text, } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
export default function AboutKumbh() {
 const [aboutSection,setAboutSection]=useState('');

  const navigate=useNavigate();

  const fetchData = async (req, res) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}api/v1/kumbh/getallfrontpageabout`
      );
      const data = await res.json();

      setAboutSection(data.about[0])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
fetchData();
  },[])

  return (
    <Center
      backgroundColor={"white"}
      display={"flex"}
      minW={"100%"}
      flexDirection={"column"}
    >
      <Box
        shadow={"dark-lg"}
        display={"flex"}
        flexDir={"column"}
        cursor={'pointer'}
        _hover={{ transform: 'scale(1.02)' }}
      transition="transform 0.3s ease-in-out"
        m={"2%"}
        w={["100%","100%","80%","60%"]}
        borderRadius={"md"}
        p={5}
        bgColor={"#ff7f50"}
      >
        <Text
          fontWeight={"bold"}
          textAlign={"center"}
          fontFamily="Georgia, serif" 
          color={"white"}
          fontSize={25}
        >
          {/* KUMBH MELA PRAYAGRAJ */}
          {aboutSection.title}
        </Text>
        <Box display={"flex"} justifyContent={'center'} alignItems={'center'} flexDir={['column-reverse','column-reverse','column-reverse','row']} mt={2} gap={3}>
          <Text color={"white"} fontFamily="Georgia, serif" fontSize="md" lineHeight="taller">
            {/* Kumbh Mela, in Hinduism, religious festival that is celebrated four
            times over the course of 12 years, the site of the observance
            rotating between four pilgrimage places on four sacred rivers—at
            Haridwar on the Ganges River, at Ujjain on the Shipra, at Nashik on
            the Godavari, and at Prayag (modern Prayagraj) at the confluence of
            the Ganges, the Jamuna, and the mythical Sarasvati. Each site’s
            celebration is based on a distinct set of astrological positions of
            the Sun, the Moon, and Jupiter, the holiest time occurring at the
            exact moment when these positions are fully occupied.  */}
            {aboutSection.description}
          </Text>
          <LazyLoadImage src={aboutSection.image}   style={{height:'300px', width:'300px', borderRadius:'2%'}}></LazyLoadImage>
        </Box>

        <Text    color={"white"} h={"10%"} w={"50%"} cursor={"pointer"} textDecoration="underline" onClick={()=>{navigate('/kumbhinfo')}}>
          View Details
        </Text>
      </Box>
    </Center>
  );
}
