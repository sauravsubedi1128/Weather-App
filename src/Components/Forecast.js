import React from "react";

function Forecast({ forecastData }) {
  console.log("hello");

  const forecastArray = [
    {
      date: "Fri, Nov 10",
      weather: { icon: "10d", description: "moderate rain" },
      temp: { max: 9, min: 6 },
    },
    {
      date: "Sat, Nov 11",
      weather: { icon: "01d", description: "clear sky" },
      temp: { max: 10, min: 5 },
    },
    {
      date: "Sun, Nov 12",
      weather: { icon: "10d", description: "light rain" },
      temp: { max: 10, min: 6 },
    },
    {
      date: "Mon, Nov 13",
      weather: { icon: "10d", description: "moderate rain" },
      temp: { max: 13, min: 9 },
    },
    {
      date: "Tue, Nov 14",
      weather: { icon: "10d", description: "moderate rain" },
      temp: { max: 12, min: 10 },
    },
  ];

  return (
    <>
      <div>
        <h1 className="font-bold">5-day forecast</h1>
        <div className="flex gap-5">
          {forecastData &&
            forecastData.list.map((day, index) => (
              <div key={index}>
                <p>{day.dt_txt}</p>
                <br />
                <img
                  src={`https://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                  alt=""
                />
                <br />

                <p>{`${day.main.temp_max}/${day.main.temp_min} °C`}</p>
                <br />
                <p>{day.weather[0].description}</p>
                <p>{day.weather[0].description}</p>
                <br />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Forecast;
