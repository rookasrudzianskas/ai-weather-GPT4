"use client";

import React from 'react';
import {AreaChart, Card, Title} from "@tremor/react";

type Props = {
  results: Root;
}

const HumidityChart = ({results}: Props) => {
  const hourly = results?.hourly.time.map((time, index) => new Date(time).toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  })).slice(0, 24);

  const data = hourly.map((hour, index) => ({
    time: Number(hour),
    "Rain (%)": results?.hourly.precipitation_probability[index],
  }))

  const dateFormatter = (number: number) => `${number} %`

  return (
    <Card>
      <Title>Chances of Rain</Title>
      <AreaChart
        data={data}
        className="mt-6"
        showLegend
        index={'time'}
        categories={['Rain (%)']}
        colors={['blue']}
        minValue={0}
        maxValue={100}
        valueFormatter={dateFormatter}
        yAxisWidth={40}
      />
    </Card>
  );
};

export default HumidityChart;
// by Rokas with ❤️
