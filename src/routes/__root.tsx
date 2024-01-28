import {  Outlet, RootRoute } from '@tanstack/react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


export const Route = new RootRoute({
  component: RootComponent,
});


function RootComponent() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
      
    </>
  );
}

export default RootComponent;