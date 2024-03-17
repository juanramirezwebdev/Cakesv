import { createFileRoute } from '@tanstack/react-router';
import Instagram from '../Components/Instagram';




export const Route = createFileRoute('/about')({
  component: AboutComponent,
})


function AboutComponent() {
  return (
    <Instagram/>
  );
}

export default AboutComponent;

