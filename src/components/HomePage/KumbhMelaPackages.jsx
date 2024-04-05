import {
  Center,
  Text,
  Card,
  CardBody,
  Stack,
  Heading,
  CardFooter,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import Carousel from 'react-multi-carousel';
import Slider from "react-slick";
import "react-multi-carousel/lib/styles.css";
// import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";

export default function KumbhMelaPackages() {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };

  const fetchData = async (req, res) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}api/v1/kumbh/getallfrontpagepackage`
      );
      const data = await res.json();
      setPackages(data.packages);
    } catch (error) {
      console.log(error);
    }
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((s) => (s === packages.length - 1 ? 0 : s + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? packages.length - 1 : s - 1));
  };

  return (
    <>
      <Text
        fontWeight={"bold"}
        textAlign={"center"}
        fontSize={25}
        m={"2%"}
        fontFamily="Georgia, serif"
        id="packages"
      >
        KUMBH MELA PACKAGES
      </Text>

      {/* <Center position="relative">
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            top: "50%",
            left: "10%",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            top: "50%",
            right: "10%",
            transform: "translateY(-50%)",
            zIndex: 1,
            // _hover: {
            //   opacity: 0.8,
            //   bg: "black",
            // },
          }}
          
        >
          &#10095;
        </button>
        <Center style={{ display: "flex", width: "1000%" }}  gap={3} mb={"5%"}>
          {packages.length
            ? packages.map((item, index) => (
                <Card
                  key={index}
                  maxW={["90%", "60%", "50%", "20%"]}
                  maxH={["40%", "40%", "40%", "40%"]}
                  p={0}
                  backgroundColor={"white"}
                  shadow={"dark-lg"}
                  cursor={"pointer"}
                  _hover={{ transform: "scale(1.02)" }}
                  transition="transform 0.3s ease-in-out"
                  style={{
                    scrollSnapAlign: "start",
                    flex: "0 0 auto",
                    marginRight: "10px",
                  }}
                >
                  <LazyLoadImage
                    src={item.image}
                    alt="packages"
                    style={{ height: "200px", borderRadius: "2%" }}
                  />
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
                      onClick={() => {
                        navigate(`/packages/${item.title}`);
                      }}
                    >
                      View Details
                    </Text>
                  </CardFooter>
                </Card>
              ))
            : ""}
        </Center>
      </Center> */}

      <Center
        backgroundColor={"white"}
        display={"flex"}
        minW={"100%"}
        flexWrap={"wrap"}
        flexDirection={"row"}
        gap={3}
        mb={"5%"}
      >
        {packages.length > 0
          ? packages.map((item) => {
              return (
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
                      onClick={() => {
                        navigate(`/packages/${item.title}`);
                      }}
                    >
                      View Details
                    </Text>
                  </CardFooter>
                </Card>
              );
            })
          : ""}
      </Center>
    </>
  );
}
