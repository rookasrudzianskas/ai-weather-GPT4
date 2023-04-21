'use client';

import React, {useState} from 'react';
import { Country, State, City }  from 'country-state-city';
import Select from "react-select";
import {useRouter} from "next/navigation";
import { GlobeIcon } from '@heroicons/react/solid'

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
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}))

const CityPicker = ({}) => {
  const [selectedCountry, setSelectedCountry] = useState<option>(null);
  const [selectedCity, setSelectedCity] = useState<cityOption>(null);
  const router = useRouter();

  const handleSelectedCountry = (option: option) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 text-white/80">
        <GlobeIcon className="h-5 w-5 text-white" />
        <label htmlFor="country">Country</label>
      </div>
      <Select
        className="text-black"
        value={selectedCountry}
        onChange={handleSelectedCountry}
        options={options}
      />
    </div>
  );
};

export default CityPicker;
// by Rokas with ❤️
