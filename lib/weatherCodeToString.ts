const weatherToCodeString: {
  [key: number]: {
    icon: string;
    label: string;
  };
} = {
  0: {
    icon: "c01d",
    label: "Clear sky",
  },
  1: {
    icon: "c02d",
    label: "Mainly clear",
  },
  2: {
    icon: "c03d",
    label: "Partly cloudy",
  },
  3: {
    icon: "c04d",
    label: "Overcast",
  },
  45: {
    icon: "s05d",
    label: "Fog",
  },
  48: {
    icon: "s05d",
    label: "Deposit rime fog",
  },
  51: {
    icon: "d01d",
    label: "Drizzle"
  }
}
