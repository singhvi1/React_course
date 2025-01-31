import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import "./infoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1514632595-4944383f2737?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://media.istockphoto.com/id/490673814/photo/idyllic-frozen-footpath.webp?a=1&b=1&s=612x612&w=0&k=20&c=NppztvJ_A6gdVsWbOY1fIgD0tsnBL9h4pNDOAcwJOIw=";
  const HOT_URL =
    "https://images.unsplash.com/photo-1563630381190-77c336ea545a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VufGVufDB8fDB8fHww";
  const RAIN_URL =
    "https://plus.unsplash.com/premium_photo-1733436275328-bbb7da0fe4ae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="infoBox">
      <br></br>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city }&nbsp;{
              info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp > 20
                ? <WbSunnyIcon/>
                : <AcUnitIcon/>
                }
            </Typography>
            <Typography
              variant="body2"
              component={"span"}
              sx={{ color: "text.secondary" }}
            >
              <div>Temperature = {info.temp}&deg;C</div>
              <div>Humidity = {info.humidity}</div>
              <div>TempMax = {info.tempMax}</div>
              <div>TempMin = {info.tempMin}</div>
              <div>Weather = {info.weather}</div>
              <p>
                {" "}
                The weather cna be describe as <i> {info.weather}</i> and feels
                like {info.feelslike}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
