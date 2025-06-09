
// app/page.tsx
import AboutUs from './components/aboutus';
import ComparisonSlider from './components/ComparisonSlider';
import CircularWrapper from './components/circularWrapper';
import ImageGrid from './components/grid';

// Initialize the font
const CollageIframe = () => {
  return (
    <iframe
      src="http://localhost:3001"
      width="100%"
      height="600px"
      style={{ border: "none" }}
    />
  );
};






export default function Home() {
  return (
    <div>
    
     <AboutUs />
   
     
    </div>
  );
}
