'use client';

import React, {useState} from 'react';
import { Country, State, City }  from 'country-state-city';
import Select from "react-select";

type option = {
  value: {
    latitude: number,
    longitude: number,
    isoCode: string,
  }
  label: string,
} | null

const options = Country.getAllCountries().map((country) => ({
  value: {
    lat: country.latitude,
    lng: country.longitude,
    iso: country.isoCode,
  },
  label: country.name,
}))

const CityPicker = ({}) => {
  const [selectedCountry, setSelectedCountry] = useState<option>(null);
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
