export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const formatMiles = (num: number) => {
  if (num >= 100000) {
    return (num / 100000).toFixed(2) + "k";
  }

  if (num >= 10000) {
    return (num / 10000).toFixed(1) + "k";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + "k";
  }

  return num.toString();
};

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
};
