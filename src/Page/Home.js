import React, { useEffect, useState } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import axios from "axios";
import Forecast from "../Components/Forecast";
const Home = () => {
  const [city, setCity] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search != "") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=74384eeb18d537b563c10b59a3984475`
        )
        .then((result) => {
          console.log(result);
          setCity(result.data);
        })
        .catch((error) => console.error(error));

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=41.85&lon=87.65&appid=74384eeb18d537b563c10b59a3984475`
        )
        .then((result) => {
          console.log(result);
          setForecast(result.data);
          console.log(result.data);

        })
        .catch((error) => console.log(error));
    }
  }, [search]);

  return (
    <div className="flex justify-around">
      <div className="w-1/2 bg-gradient-to-r from-teal-100 to-teal-400 min-h-screen">
        <div className="min-h-screen flex flex-col mx-14">
          <h1 className="font-bold text-gray-500 text-center text-5xl my-2">
            Weather In
          </h1>

          <input
            className="p-2 rounded-3xl m-2 inputData"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Enter city"
          />

          {!city ? (
            <p>No Data Found</p>
          ) : (
            <div className="m-2 p-2 bg-white rounded-3xl text-gray-400 pt-5 pb-20">
              <h1 className="text-center text-lg font-semibold">{search}</h1>
              <p className="text-3xl text-center leading-[1px] font-bold">
                ...
              </p>
              <div className="grid grid-cols-2 items-center">
                <div className="justify-self-end">
                  <h1 className="text-6xl p-6">
                    {city.main.temp}
                    {"°"}C
                  </h1>
                </div>
                <div className="ml-24">
                  <h1 className="text-sm text-gray-500 font-bold">
                    Broken
                    <br /> Clouds
                  </h1>
                  <div className="text-sm ml-3">
                    <h2 className="my-2">
                      Max: {city.main.temp_max}
                      {"°"}C
                    </h2>
                    <h2>
                      Min: {city.main.temp_min}
                      {"°"}C
                    </h2>
                  </div>
                </div>

                <div className="col-span-2 justify-self-center my-3">
                  <div>
                    <TiWeatherPartlySunny size={150} />
                  </div>
                </div>

                <div className="place-items-center justify-self-end mr-10">
                  <h1 className="text-5xl">
                    {city.main.feels_like}
                    {"°"}C
                  </h1>
                  <h2 className="text-xs text-center">Feels like</h2>
                </div>
                <div className="ml-10">
                  <h1 className="text-5xl">{city.main.humidity}</h1>
                  <h2 className="text-xs ml-5"> Humidity</h2>
                </div>
              </div>
            </div>
          )}

          {forecast ? (
            <Forecast forecastData={forecast} />
          ) : (
            <p>Loading forecast...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
