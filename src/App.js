import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
// import Dashboardpage from "./pages/Dashboardpage";
import KumbhAdmin from "./pages/KumbhAdmin";
import CreatePackage from "./components/KumbhAdmin/CreatePackage";
import EditPackage from "./components/KumbhAdmin/EditPackage";
import EditPackageById from "./components/KumbhAdmin/EditPackageById";
import PackageDetails from "./pages/PackageDetails";
import CreateAccomodation from "./components/KumbhAdmin/CreateAccomodation"
import EditAccomodation from "./components/KumbhAdmin/EditAccomodation";
import EditAccomodationById from "./components/KumbhAdmin/EditAccomodationById";
import AccomodationDetails from "./pages/AccomodationDetails";
import EditAbout from "./components/KumbhAdmin/EditAbout";
import CustomerDetails from "./components/KumbhAdmin/CustomerDetails";
import EnquiryDetails from "./components/KumbhAdmin/EnquiryDetails";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/kumbhinfo" element={<AboutPage></AboutPage>}></Route>
        <Route path="/adminlogin" element={<LoginPage></LoginPage>}></Route>
        {/* <Route path="/dashboard" element={<Dashboardpage></Dashboardpage>}></Route> */}
        <Route path="/kumbhadmin" element={<KumbhAdmin></KumbhAdmin>}></Route>
        <Route path="/kumbhadmin/editabout" element={<EditAbout></EditAbout>}></Route>
       
        
       
       
        <Route path="/kumbhadmin/createpackage" element={<CreatePackage></CreatePackage>}></Route>
        <Route path="/kumbhadmin/editpackage" element={<EditPackage></EditPackage>}></Route>
        <Route path="/kumbhadmin/editpackage/:title" element={<EditPackageById></EditPackageById>}></Route>
        <Route path="/packages/:title" element={<PackageDetails></PackageDetails>}></Route>
        <Route path="/accomodations/:title" element={<AccomodationDetails></AccomodationDetails>}></Route>
        <Route path="/kumbhadmin/createaccomodation" element={<CreateAccomodation></CreateAccomodation>}></Route>
        <Route path="/kumbhadmin/editaccomodation" element={<EditAccomodation></EditAccomodation>}></Route>
        <Route path="/kumbhadmin/editaccomodation/:title" element={<EditAccomodationById></EditAccomodationById>}></Route>
        <Route path="/kumbhadmin/customerbookings" element={<CustomerDetails></CustomerDetails>}></Route>
        <Route path="/kumbhadmin/customerenquires" element={<EnquiryDetails></EnquiryDetails>}></Route>
      </Routes>
    </>
  );
}

export default App;
