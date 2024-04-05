import {
  Box,
  ListItem,
  List,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <Box
        minW={"100%"}
        display={"flex"}
        bgColor={"#683434"}
        // flexDirection={'row'}
        gap={3}
        color={"white"}
        justifyContent={"space-between"}
        // alignItems={"center"}
        flexWrap={"wrap"}
        p={"5%"}
        px={"8%"}
      >
        <Box display={"flex"} flexDir={"column"}>
          <Text as={"b"} fontSize={"1.2rem"} mb={2}>
            Our Products
          </Text>
          <List>
            <ListItem>
              <NavLink to="#">Flight</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="#">Hotel</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="#">Bus</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="#">Trasfer</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="#">Car</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="#">Insurence</NavLink>
            </ListItem>
            <ListItem>
              {" "}
              <NavLink to="#">Visa</NavLink>
            </ListItem>
            <ListItem>
              {" "}
              <NavLink to="#">Cruise</NavLink>
            </ListItem>
          </List>
        </Box>
        <Box display={"flex"} flexDir={"column"} >
          <Text as={"b"} fontSize={"1.2rem"} mb={2}>
          About Us
          </Text>
          <List>
            <ListItem>
              {" "}
              <NavLink to="#">Travel Affiliate Program</NavLink>{" "}
            </ListItem>
            <ListItem>
              {" "}
              <NavLink to="#">Customer Support</NavLink>{" "}
            </ListItem>
            <ListItem>
              {" "}
              <NavLink to="#">Cancellation-Refund</NavLink>{" "}
            </ListItem>
            <ListItem>
              {" "}
              <NavLink to="#">policy</NavLink>{" "}
            </ListItem>
            <ListItem>
              {" "}
              <NavLink to="#">Sitemap</NavLink>{" "}
            </ListItem>
          </List>
        </Box>
        <Box display={"flex"} flexDir={"column"} >
          <Text as={"b"} fontSize={"1.2rem"} mb={2}>
            Traveler Tools
          </Text>
          <List>
            <ListItem>
              
              <NavLink to="#">Honeymoon Packages</NavLink>{" "}
            </ListItem>
            <ListItem>
             
              <NavLink to="#">Thailand Package</NavLink>{" "}
            </ListItem>
            <ListItem>
             
              <NavLink to="#">Hong Kong Package</NavLink>{" "}
            </ListItem>
            <ListItem>
             
              <NavLink to="#">Russia Tour Package</NavLink>{" "}
            </ListItem>
            <ListItem>
            
              <NavLink to="#">Singapore Package</NavLink>{" "}
            </ListItem>
            <ListItem>
           
              <NavLink to="#">Dubai Package</NavLink>{" "}
            </ListItem>
            <ListItem>
             
              <NavLink to="#">South Africa Package</NavLink>{" "}
            </ListItem>
            <ListItem>
            
              <NavLink to="#">Bhutan Package</NavLink>{" "}
            </ListItem>
            <ListItem>
           
              <NavLink to="#">Leh Ladakh Package</NavLink>{" "}
            </ListItem>
            <ListItem>
          
              <NavLink to="#">Bali Packages</NavLink>{" "}
            </ListItem>
            <ListItem>
           
              <NavLink to="#">Help and FAQ</NavLink>{" "}
            </ListItem>
          </List>
        </Box>

        <Box display={"flex"} flexDir={"column"} >
        <Text as={"b"} fontSize={"1.2rem"} mb={2}>
            Bookings
          </Text>
          <List>
            <ListItem>
          <NavLink to="#">Flight Bookings</NavLink>
          </ListItem>
            <ListItem>
          <NavLink to="#">Hotel Bookings</NavLink>
          </ListItem>
            <ListItem>
          <NavLink to="#">Bus Bookings</NavLink>
          </ListItem>
            <ListItem>
          <NavLink to="#">Car Bookings</NavLink>
          </ListItem>
            <ListItem>
          <NavLink to="#">Vacation Bookings</NavLink>
          </ListItem>
       
          </List>
        </Box>

        <Box display={"flex"} flexDir={"column"}>
        <Text as={"b"} fontSize={"1.2rem"} mb={2}>
          Packages
          </Text>
          <List>
            <ListItem>1 Night 2 Days Kumbh Mela Package</ListItem>

            <ListItem>Kumbh Mela Package 2 Nights 3 Days</ListItem>

            <ListItem>3 Night 4 Days Kumbh Mela Package</ListItem>
            <ListItem>Kumbh Mela Shahi Snan Package</ListItem>
          </List>
        </Box>
        <Box display={"flex"} flexDir={"column"}>
        <Text as={"b"} fontSize={"1.2rem"} mb={2}>
         Legal
          </Text>
          <List>
          <ListItem>
          <NavLink to="#">About us</NavLink>
          </ListItem>
          <ListItem>
          <NavLink to="#">Globefirst Guarantee</NavLink>
          </ListItem>
          <ListItem>
          <NavLink to="#">Privacy policy</NavLink>
          </ListItem>
          <ListItem>
          <NavLink to="#">Legal Trademark</NavLink>
          </ListItem>
          <ListItem>
          <NavLink to="#">Terms of Use</NavLink>
          </ListItem>
          <ListItem>
          <NavLink to="#">Career</NavLink>
          </ListItem>
          <ListItem>
          <NavLink to="#">IRCTC</NavLink>
          </ListItem>
          <ListItem>
          <NavLink to="#">PNR Status</NavLink>
          </ListItem>
          <ListItem>
          <NavLink to="#">Trains</NavLink>
          </ListItem>
          <ListItem>
          <NavLink to="#">Contact us</NavLink>
          </ListItem>
          
          </List>
        </Box>


      </Box>
      <Text textAlign={"center"} color={"white"} pb={2} bgColor={"#683434"}>
        Copyright @Globefirst innovative Traveltech Inc. Canada (Travel Agent
        license: 73581, CLIA membership No. 00578350) Made by: WebTrends Ai Inc.
      </Text>
    </>
  );
}
