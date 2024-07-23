import Carousel from "./Carousel";
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';


function Banner() {
  return (
    <div className="banner">
      <Container className="bannerContent">
        <div className="tagline" style={{paddingBottom:50}} >
          <Typography
            variant="h2"
            style={{
              fontSize:'40px',
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color:'white',
              width:'70%',
              marginInline:'auto'
            }}
          >
TrackCoin - Your Ultimate Bitcoin Tracker
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              fontSize:"20px",
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
           Stay Updated with Real-Time Bitcoin Prices and Trends
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
