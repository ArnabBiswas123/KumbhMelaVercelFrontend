import React from "react";
import MainImage from "../components/HomePage/MainImage";
import AboutKumbh from "../components/HomePage/AboutKumbh";
import KumbhDates from "../components/HomePage/KumbhDates";
import KumbhMelaAccommodation from "../components/HomePage/KumbhMelaAccommodation";
import KumbhMelaPackages from "../components/HomePage/KumbhMelaPackages";
// import { useMediaQuery } from "@chakra-ui/react";
import Header from "../components/common/Header";
import Header2 from "../components/common/Header2";
import MobileHeader from "../components/common/MobileHeader";
import Footer from "../components/common/Footer";
import FloatingButton from "../components/common/FloatingButton";

export default function HomePage() {
  // const [isLargerThan980] = useMediaQuery("(min-width: 980px)");

  return (
    <>
      {/* {!isLargerThan980 ? <MobileHeader></MobileHeader> : <Header></Header>} */}
      <MobileHeader></MobileHeader>
      <Header></Header>
      <Header2></Header2>
      <MainImage></MainImage>
      <KumbhDates></KumbhDates>
      <AboutKumbh></AboutKumbh>
      <KumbhMelaPackages></KumbhMelaPackages>
      <KumbhMelaAccommodation></KumbhMelaAccommodation>
      <FloatingButton></FloatingButton>
      <Footer></Footer>
    </>
  );
}
