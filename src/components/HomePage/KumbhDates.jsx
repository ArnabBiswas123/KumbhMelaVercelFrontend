import {
  Center,
  Text,
  Box,
  TableContainer,
  Thead,
  Table,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
export default function KumbhDates() {
  return (
    <Center
      backgroundColor={"white"}
      display={"flex"}
      minW={"100%"}
      flexDirection={"column"}
      mt={'4%'}
      id="dates"
      
    >
      <Box
        shadow={"dark-lg"}
        display={"flex"}
        flexDir={"column"}
        w={["100%","100%","80%","60%"]}
        m={"2%"}
        borderRadius={"md"}
        p={5}
        bgColor={"#ff7f50"}
        cursor={'pointer'}
        _hover={{ transform: 'scale(1.02)' }}
      transition="transform 0.3s ease-in-out"
      >
        {" "}
        <Text
          fontWeight={"bold"}
          textAlign={"center"}
          fontFamily="Georgia, serif" 
          color={"white"}
          fontSize={25}
        >
          {" "}
          Kumbh Mela Bathing Dates 2025
        </Text>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th
                  color={"white"}
                  fontWeight={"bold"}
                  fontFamily="Georgia, serif" 
                  fontSize={19}
                >
                  Event
                </Th>
                <Th  color={"white"}
                  fontWeight={"bold"}
                  fontFamily="Georgia, serif" 
                  fontSize={19}>Bathing Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td
                  color={"white"}
                  fontWeight={"bold"}
                  fontFamily="Georgia, serif" 
                  fontSize={15}
                >
                  Paush Poornima (Important Bathing)
                </Td>

                <Td
                  color={"white"}
                  fontWeight={"bold"}
                  fontFamily="Georgia, serif" 
                  fontSize={15}
                >
                  {" "}
                  13 January 2025
                </Td>
              </Tr>
              <Tr>
                <Td
                  color={"white"}
                  fontWeight={"bold"}
                  fontFamily="Georgia, serif" 
                  fontSize={15}
                >
                  Makar Sankranti (Royal Bathing/Shahi Snan)
                </Td>

                <Td
                  color={"white"}
                  fontWeight={"bold"}
                  fontFamily="Georgia, serif" 
                  fontSize={15}
                >
                  {" "}
                  14 January 2025
                </Td>
              </Tr>
              <Tr>
                <Td
                  color={"white"}
                  fontWeight={"bold"}
                  fontFamily="Georgia, serif" 
                  fontSize={15}
                >
                  Mauni Amavasya (Royal Bathing/Shahi Snan)
                </Td>

                <Td
                  color={"white"}
                  fontWeight={"bold"}
                  fontFamily="Georgia, serif" 
                  fontSize={15}
                >
                  {" "}
                  29 January 2025
                </Td>
              </Tr>
              <Tr>
                <Td
                  color={"white"}
                  fontWeight={"bold"}
                  fontFamily="Georgia, serif" 
                  fontSize={15}
                >
                  Basant Panchami (Royal Bathing/Shahi Snan)
                </Td>

                <Td
                  color={"white"}
                  fontWeight={"bold"}
                  fontFamily="Georgia, serif" 
                  fontSize={15}
                >
                  {" "}
                  3 February 2025
                </Td>
              </Tr>
              <Tr>
                <Td
                  color={"white"}
                  fontWeight={"bold"}
                  fontFamily="Georgia, serif" 
                  fontSize={15}
                >
                  Achla Saptami (Important Bathing)
                </Td>

                <Td
                  color={"white"}
                  fontWeight={"bold"}
                  fontFamily="Georgia, serif" 
                  fontSize={15}
                >
                  {" "}
                  4 February 2025
                </Td>
              </Tr>
              <Tr>
                <Td
                  color={"white"}
                  fontWeight={"bold"}
                  fontFamily="Georgia, serif" 
                  fontSize={15}
                >
                  Maghi Poornima (Important Bathing)
                </Td>

                <Td
                  color={"white"}
                  fontWeight={"bold"}
                  fontFamily="Georgia, serif" 
                  fontSize={15}
                >
                  {" "}
                  12 February 2025
                </Td>
              </Tr>
              <Tr>
                <Td
                  color={"white"}
                  fontWeight={"bold"}
                  fontFamily="Georgia, serif" 
                  fontSize={15}
                >
                  Maha Shivratri (Important Bathing)
                </Td>

                <Td
                  color={"white"}
                  fontWeight={"bold"}
                  fontFamily="Georgia, serif" 
                  fontSize={15}
                >
                  {" "}
                  26 February 2025
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Center>
  );
}
