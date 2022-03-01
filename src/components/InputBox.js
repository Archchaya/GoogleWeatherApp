import { Button, Input } from "@material-ui/core";
import React from "react";
import "./InputBox.css";

const InputBox = ({ input, setInput, findWeather }) => {
    const functionCall = (event) => {
        event.preventDefault();
        findWeather();
    }
  return (
    <div className="inputBox">
      <div className="inputBox_field">
        <h1>Google Weather App</h1>
        <p>Powered By</p>

        <img
          src="https://clipart.world/wp-content/uploads/2020/10/Google-Logo-clipart-transparent.png"
          alt="logo"
        />

        <form>
          <Input
            placeholder="Enter the city name"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <br />
                  <Button variant="contained" color="secondary" type="submit"
                      onClick={functionCall}>
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default InputBox;
