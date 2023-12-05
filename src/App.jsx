import { useEffect } from "react";
import './App.css'
/*components*/
import Container from "./components/container.jsx";
import sedans from "./images/icon-sedans.svg";
import suvs from "./images/icon-suvs.svg";
import luxury from "./images/icon-luxury.svg";
function App() {
  return (
    <>
      <Container 
      source={sedans}
      title="sedans" 
      description="chose an sedan for its affordability 
      and excelent fuel economy, ideal for cruising in the 
      city or on your next road trip"
      />

      <Container
      source={suvs}
      title="suvs"
      description="take an suv for it spacious 
      interior, power and versatility, Perfect for your
      next family vacation and off-road adventures"
      />
      <Container
      source={luxury}
      title="luxury"
      description="cruise in the best cars brands
      without the bloated prices enjoy the enhance
      confort of a luxury rental and arrive in style"
      />
    </>
  )
}

export default App
