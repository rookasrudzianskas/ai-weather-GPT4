"use client";

import React from 'react';
import {CheckCircleIcon, ExclamationIcon} from "@heroicons/react/solid";
import {Callout} from "@tremor/react";

type Props = {
  message: string;
  warning?: boolean;
}

const CalloutCard = ({message, warning}: Props) => {
  return (
    <Callout className="mt-4" title={message} icon={warning ? ExclamationIcon : CheckCircleIcon} color={warning ? 'rose' : 'teal'}/>
  );
};

export default CalloutCard;
// by Rokas with ❤️
