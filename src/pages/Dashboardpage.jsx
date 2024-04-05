import React from 'react'
import AdminHeader from '../components/DashboardPage/AdminHeader'
import Projects from '../components/DashboardPage/Projects'
import { Box } from '@chakra-ui/react'


export default function Dashboardpage() {
  return (
    <>
    <Box w={"100vw"} h={"100vh"} bgColor={"#FFDEAD"}>
    <AdminHeader></AdminHeader>
    <Projects></Projects>
    </Box>
    </>
  )
}
