import React from 'react';
import {getClient} from "@/apollo-client";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";
import CalloutCard from "@/components/CalloutCard";
import StatCard from "@/components/StatCard";
import InformationPanel from "@/components/InformationPanel";
import TempChart from "@/components/TempChart";
import RainChart from "@/components/RainChart";
import HumidityChart from "@/components/HumidityChart";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  }
}

const WeatherPage = async ({params: {city, lat, long}}: Props) => {
  const client = getClient();
  const {data} = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: "GMT"
    }
  })

  const results: Root = data.myQuery;

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <InformationPanel city={city} results={results} lat={lat} long={long} />
      <div className="flex-1 p-5 lg:p-10">
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Todays Overview</h2>
            <p className="text-sm text-gray-400">Last Updated at: {" "}
              {new Date(results.current_weather.time).toLocaleString()} ({results.timezone})
            </p>
          </div>
          <div className="m-2 mb-10">
            <CalloutCard  message={"This is where the GPT will summarize the data"} />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-5 gap-y-5 m-2">
            <StatCard
              title={'Maximum Temperature'}
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°C`}
              color={'yellow'}
            />

            <StatCard
              title={'Minimum Temperature'}
              metric={`${results.daily.temperature_2m_min[0].toFixed(1)}°C`}
              color={'green'}
            />

            <div className="">
              <StatCard
                title={'UV Index'}
                metric={`${results.daily.uv_index_max[0].toFixed(1)}`}
                color={'rose'}
              />
              {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
                <CalloutCard
                  message={"The UV Index is high, please wear suncream and stay in the shade"}
                  warning={true}
                />
              )}
            </div>

            <div className="flex space-x-3">
              <StatCard
                title={'Wind Speed'}
                metric={`${results.current_weather.windspeed.toFixed(1)}m/s`}
                color={'cyan'}
              />
              <StatCard
                title={'Wind Direction'}
                metric={`${results.current_weather.winddirection.toFixed(1)}°`}
                color={'violet'}
              />
            </div>
          </div>
        </div>

        <hr className="mb-5"/>

        <div className="space-y-3">
          <TempChart results={results} />
          <RainChart results={results} />
          <HumidityChart results={results} />
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
// by Rokas with ❤️

// https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,windgusts_10m,uv_index,uv_index_clear_sky&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max&current_weather=true&timezone=Europe%2FLondon
