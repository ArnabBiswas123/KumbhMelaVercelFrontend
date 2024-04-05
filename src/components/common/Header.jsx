import { Box, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    <Box
      minW={"100%"}
      bgColor={"#EF3131"}
      mt={0}
      // display={"flex"}
      display={{ base: "none", lg: "flex" }}
      paddingX={2}
      paddingY={1}
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"sticky"}
      top={0}
      zIndex={1}
    >
      <Box display={"flex"} gap={3}>
        <NavLink to="mailto:info@globalduniya.ca">
          <Box display={"flex"} color={"white"} gap={1} cursor={"pointer"}>
            <Image
              src="/assets/Mail.svg"
              alt="Mail svg"
              h={"20px"}
              w={"20px"}
            ></Image>
            <Text>info@globalduniya.ca</Text>
          </Box>
        </NavLink>
        <NavLink>
          <Box display={"flex"} color={"white"} gap={1} cursor={"pointer"}>
            <Image
              src="/assets/Location.svg"
              alt="Location svg"
              h={"20px"}
              w={"20px"}
            ></Image>
            <Text whiteSpace="nowrap">
              8035, 120 st suit no 203, Delta, BC , Canada
            </Text>{" "}
          </Box>
        </NavLink>
        <NavLink to="tel:+91 8989920981">
          <Box display={"flex"} color={"white"} gap={1} cursor={"pointer"}>
            <Image
              src="/assets/Phone.svg"
              alt="Mail svg"
              h={"20px"}
              w={"20px"}
            ></Image>
            <Text>+91 8989920981</Text>{" "}
          </Box>
        </NavLink>
      </Box>
      <Box display={"flex"} gap={3} ml={"10%"}>
        <NavLink to={"#"} target="_blank">
          <Image
            src="/assets/Twitter.svg"
            alt="Twitter svg"
            h={"20px"}
            w={"20px"}
            cursor={"pointer"}
          ></Image>
        </NavLink>
        <NavLink to={"#"} target="_blank">
          <Image
            src="/assets/Youtube.svg"
            alt="Youtube svg"
            h={"20px"}
            w={"20px"}
            cursor={"pointer"}
          ></Image>
        </NavLink>
        <NavLink to={"#"} target="_blank">
          <Image
            src="/assets/Facebook.svg"
            alt="Facebook svg"
            h={"20px"}
            w={"20px"}
            cursor={"pointer"}
          ></Image>
        </NavLink>
        <NavLink
          to={"https://www.linkedin.com/company/globalduniya/"}
          target="_blank"
        >
          <Image
            src="/assets/Linkedin.svg"
            alt="Linkedin svg"
            h={"20px"}
            w={"20px"}
            cursor={"pointer"}
          ></Image>
        </NavLink>
        <NavLink to={"#"} target="_blank">
          <Image
            src="/assets/Whatsapp.svg"
            alt="Whatsapp svg"
            h={"20px"}
            w={"20px"}
            cursor={"pointer"}
          ></Image>
        </NavLink>
      </Box>
    </Box>
  );
}
