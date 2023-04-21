import React from 'react';
import {MoonIcon, SunIcon} from "@heroicons/react/solid";
import CityPicker from "@/components/CityPicker";
import weatherToCodeString from "@/lib/weatherCodeToString";
import Image from "next/image";

type Props = {
  city: string;
  lat: string;
  long: string;
  results: Root;
}

const InformationPanel = ({city, lat, long, results}: Props) => {
  return (
    <div className="bg-gradient-to-br from-[#394F68] to-[#183B7E] text-white p-10">
      <div className="pb-5">
        <h1 className="text-6xl font-bold">{decodeURI(city)}</h1>
        <p className="text-xs text-gray-400 mt-2">Long/Lat: {long}, {lat}</p>
      </div>

      <CityPicker />

      <hr className="my-10" />

      <div className="mt-5 flex items-center justify-between space-x-10 mb-5">
        <div>
          <p className="text-xl">{new Date().toLocaleString("en-GB", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}</p>
          <p className="font-extralight">Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
        </div>
        <p className="text-xl font-bold uppercase">
          {new Date().toLocaleTimeString("en-GB", {
            hour: "numeric",
            minute: "numeric",
            hour12: true
          })}
        </p>
      </div>
      <hr className="mt-10 mb-5" />

      <div className="flex items-center justify-between">
        <div>
          <Image
            src={`https://www.weatherbit.io/static/img/icons/${weatherToCodeString[results.current_weather.weathercode].icon}.png`}
            alt={weatherToCodeString[results.current_weather.weathercode].label}
            width={75}
            height={75}
          />
          <div className="flex items-center justify-between space-x-10">
            <p className="text-6xl font-semibold">{results.current_weather.temperature.toFixed(1)}°C</p>
            <p className="text-right font-extralight text-lg">
              {weatherToCodeString[results.current_weather.weathercode].label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPanel;
// by Rokas with ❤️