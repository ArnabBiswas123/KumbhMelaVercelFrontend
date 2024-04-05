import { Image, Text, Grid, GridItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
export default function MobileHeader() {
  return (
    <Grid  w={"100%"} position={"sticky"} display={{ base: "flex", lg: "none" }} top={0} zIndex={1}>
      <GridItem
        w="100%"
        h="5"
        bg="#EF3131"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <NavLink to="tel:+91 8989920981">
          <Image src="./assets/MobilePhone.svg"></Image>
        </NavLink>
      </GridItem>
      <GridItem
        w="100%"
        h="5"
        bg="green"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <NavLink>
          <Image src="./assets/MobileWhatsapp.svg"></Image>
        </NavLink>
      </GridItem>
      <GridItem
        w="100%"
        h="5"
        bg="#EF3131"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text color={"white"}>Book Now</Text>
      </GridItem>
    </Grid>
  );
}
