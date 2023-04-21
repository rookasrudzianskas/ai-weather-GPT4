import React from 'react';

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  }
}

const WeatherPage = ({params: {city, lat, long}}: Props) => {
  return (
    <div>
      Welcome to the Weather page: {city} {lat} {long}
    </div>
  );
};

export default WeatherPage;
// by Rokas with ❤️

// https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,windgusts_10m,uv_index,uv_index_clear_sky&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max&current_weather=true&timezone=Europe%2FLondon
