import { FileRoute } from '@tanstack/react-router';

import Carousel from '../Components/Carousel';


export const Route = new FileRoute('/').createRoute({
  component: HomeComponent,
});

function HomeComponent() {
  return (
   <Carousel/>
  );
}

export default HomeComponent;
