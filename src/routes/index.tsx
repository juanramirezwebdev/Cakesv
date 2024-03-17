import { createFileRoute } from '@tanstack/react-router';

import Carousel from '../Components/Carousel';
import Cta from '../Components/cta';


export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <>
    <Cta/>
   <Carousel/>
   </>
  );
}

export default HomeComponent;
