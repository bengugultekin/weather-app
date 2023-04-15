import React from "react";
import { WeatherProvider } from "../context/WeatherContext";
import Header from "./Header";
import Location from "./Location";
import WeatherCard from "./WeatherCard";

function Container() {
  return (
    <WeatherProvider>
      <Header />
      <Location />
      <WeatherCard />
    </WeatherProvider>
  );
}

export default Container;
