'use client';

import React from 'react';
import { Country, State, City }  from 'country-state-city';
import Select from "react-select";

const options = Country.getAllCountries().map((country) => ({
  value: {
    lat: country.latitude,
    lng: country.longitude,
    iso: country.isoCode,
  },
  label: country.name,
}))

const CityPicker = ({}) => {
  return (
    <div>
      <Select
        options={options}
      />
    </div>
  );
};

export default CityPicker;
// by Rokas with ❤️
