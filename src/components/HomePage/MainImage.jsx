import { Box, Image } from "@chakra-ui/react";


export default function MainImage(){
    return(
        <Box minW={"100%"}>
            <Image src="./assets/MainImage.jpg" w={'100%'}  h={"500px"}></Image>
        </Box>
    )
}