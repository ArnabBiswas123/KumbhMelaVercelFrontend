import React from "react";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "../components/AboutPage/ImageSlider";
import KumbhInfo from "../components/AboutPage/KumbhInfo";
// import { useMediaQuery } from "@chakra-ui/react";
import Header from "../components/common/Header";
import Header2 from "../components/common/Header2";
import MobileHeader from "../components/common/MobileHeader";
import Footer from "../components/common/Footer";
import { useEffect } from "react";
export default function AboutPage() {
  // const [isLargerThan980] = useMediaQuery("(min-width: 980px)");
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []); // Empt

  return (
    <>
      {/* {!isLargerThan980 ? <MobileHeader></MobileHeader> : <Header></Header>} */}
    <MobileHeader></MobileHeader> 
     <Header></Header>
      <Header2></Header2>
      <ImageSlider />
      <KumbhInfo />
      <Footer></Footer>
    </>
  );
}
