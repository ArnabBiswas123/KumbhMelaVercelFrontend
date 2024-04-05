import React from 'react'
import { Center,Card, Image,Text} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';


export default function Projects() {

  const navigate=useNavigate();

  return (
    <>
    <Center m={4} display={'flex'} flexWrap={'wrap'} gap={4}>
    <Card
    direction={['column','column','column','row']}
    width={['80%','50%','40%','33%']}
    overflow='hidden'
    variant='outline'
    alignItems={'center'}
    gap={3}
    cursor={'pointer'}
    boxShadow='dark-lg'
    _hover={{ transform: 'scale(1.02)' }}
    transition="transform 0.3s ease-in-out"
    onClick={()=>{navigate('/kumbhadmin')}}
  >
    <Image
      objectFit='cover'
       w={'200px'}
       h={'200px'}
      src='./assets/KumbhMelaLogo.jpeg'
      alt='Kumbh Logo'
    />
        <Text  as="h2"
          fontFamily="Georgia, serif"
          fontSize={20}
          fontWeight="bold"
          color={'#4169E1'}
          textAlign={'center'}
          >The Kumbh Mela Project</Text>
  </Card>
  </Center>
  </>
  )
}
