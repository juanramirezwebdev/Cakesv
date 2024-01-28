import { FileRoute } from '@tanstack/react-router';
import Instagram from '../Components/Instagram';


export const Route = new FileRoute('/about').createRoute({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <Instagram/>
  );
}

export default AboutComponent;

