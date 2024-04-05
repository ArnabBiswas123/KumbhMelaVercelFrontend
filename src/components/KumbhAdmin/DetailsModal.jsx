import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,

  ModalCloseButton,
  ModalBody,
 
  Text,
  Center,
} from "@chakra-ui/react";

// Modal Component
export default function DetailsModal({ isOpen, onClose, item }) {
  // console.log(item)
  const DateFormat = (date) => {
    const dateObject = new Date(date);
    const formattedDate = dateObject.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return formattedDate;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
      <ModalOverlay />
      <ModalContent p={8}>
        <Center fontFamily="Georgia, serif" fontWeight={'bold'} fontSize={'x-large'} alignItems={'center'}>Customer Details</Center>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Text fontFamily="Georgia, serif">
              <Text as="span" fontWeight="bold">
                Name:{" "}
              </Text>
              {item.name}
            </Text>
            <Text fontFamily="Georgia, serif">
              <Text as="span" fontWeight="bold">
                Mobile Number:{" "}
              </Text>
              {item.mobile}
            </Text>
            <Text fontFamily="Georgia, serif">
              <Text as="span" fontWeight="bold">
              Email:{" "}
              </Text>
              {item.email}
            </Text>
            {item.no_of_person ? (
              <Text fontFamily="Georgia, serif">
                 <Text as="span" fontWeight="bold">
                 No of Persons:{" "}
              </Text>
                 {item.no_of_person}
              </Text>
            ) : (
              ""
            )}
            {item.duration? (
              <Text fontFamily="Georgia, serif">
                <Text as="span" fontWeight="bold">
                Duration:{" "}
              </Text>
              {item.duration}
              </Text>
            ) : (
              ""
            )}
            {item.address? (
              <Text fontFamily="Georgia, serif">
                <Text as="span" fontWeight="bold">
                Address:{" "}
              </Text>
              {item.address}
              </Text>
            ) : (
              ""
            )}
            {item.date ? (
              <Text fontFamily="Georgia, serif">
                    <Text as="span" fontWeight="bold">
                Date:{" "}
              </Text>
                {DateFormat(item.date)}
              </Text>
            ) : (
              ""
            )}
            {item.message ? (
              
              <Text fontFamily="Georgia, serif">
                  <Text as="span" fontWeight="bold">
                  Message: {" "}
              </Text>{item.message}</Text>
            ) : (
              ""
            )}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
