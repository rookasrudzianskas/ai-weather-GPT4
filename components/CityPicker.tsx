'use client';

import React, {useState} from 'react';
import { Country, State, City }  from 'country-state-city';
import Select from "react-select";
import {useRouter} from "next/navigation";

type option = {
  value: {
    latitude: string,
    longitude: string,
    isoCode: string,
  }
  label: string,
} | null

type cityOption = {
  value: {
    latitude: string,
    longitude: string,
    isoCode: string,
    countryCode: string,
    name: string,
    stateCode: string,
  };
  label: string;
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
  const [selectedCity, setSelectedCity] = useState<cityOption>(null);
  const router = useRouter();

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
