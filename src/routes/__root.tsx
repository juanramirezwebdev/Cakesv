import {  Outlet, createRootRoute } from '@tanstack/react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import logo from '../assets/wa-icon.png';
import { FloatingWhatsApp } from 'react-floating-whatsapp'




export const Route = createRootRoute({
  component: RootComponent,
})


function RootComponent() {
  return (
    <>
      <Navbar />
      <FloatingWhatsApp phoneNumber="+573163540243" accountName="Victoria Rueda Cakes" avatar={logo} />
      <Outlet />
      <Footer/>
      
    </>
  );
}

export default RootComponent;