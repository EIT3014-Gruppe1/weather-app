import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container } from "react-bootstrap";
import AudioPlayer from "./AudioPlayer";
import { CityDropdown } from "./CityDropdown";
import rain from "../audio/rain.mp3";

// Navbar component
export const NavBar = ({
 setChoosenCity,
 choosenCity,
 userLocation,
 temperature,
 imageName,
}) => {
 return (
  <Navbar bg="dark" variant="dark">
   <Container>
    <Navbar.Brand href="#home">
     <h1>Klesmelding</h1>
    </Navbar.Brand>
    <ul className="navbar-nav ms-auto">
     <li className="nav-item px-2 my-auto">
      <CityDropdown
       setChoosenCity={setChoosenCity}
       choosenCity={choosenCity}
       userLocation={userLocation}
      />
     </li>
     {temperature ? (
      <>
       <li className="nav-item px-2">
        <p style={{ color: "white" }}>{temperature}°</p>
       </li>
       <img
        className="img-responsive"
        style={{
         maxWidth: "100%",
         maxHeight: "100%",
         height: "60px",
        }}
        src={`/assets/weather_icons/${imageName}.png`}
        alt="icon"
       />
      </>
     ) : (
      <p>loading</p>
     )}
    </ul>
   </Container>
   <li className="px-5 my-auto">
    <AudioPlayer
     url={
      [rain,
      "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3"]
     }
     loop={false}
    />
   </li>
  </Navbar>
 );
};
