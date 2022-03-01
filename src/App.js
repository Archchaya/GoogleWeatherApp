import React, { useState } from "react";
import InputBox from "./components/InputBox";
import axios from "axios";
import Result from "./components/Result";


const App = () => {
  const [input, setInput] = useState("");
  const [desc, setDesc] = useState("");
  const [temp, setTemp] = useState("");
  const [icon, setIcon] = useState("");

  const findWeather = async() => {
    const apiKey = "eae2d7f39584a05c13615266e197ed9b";
    const unit = "metric";
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      input +
      "&appid=" +
      apiKey +
      "&units=" +
      unit;
    const response = await axios.get(url);
    const temp = await response.data.main.temp;
    const weatherDesc = await response.data.weather[0].description;
    const icon = await response.data.weather[0].icon;
    const imageURL =
      "https://favpng.com/png_view/shower-weather-icon-material-weather-forecasting-rain-icon-png/SQ1VhtZn" +
      icon +
      "@2x.png";
    setTemp(temp);
    setDesc(weatherDesc);
    setIcon(imageURL);
    setInput("");
  };

  return (
    <div>
      {temp === "" ? (
        <InputBox setInput={setInput} input={input} findWeather={findWeather} />
      ) : (
        <Result temp={temp} desc={desc} image={icon} setTemp={setTemp} />

      )}
    </div>
  );
};

export default App;
