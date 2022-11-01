import { TBANDS } from "src/models";

export const useGetBandFromId = () => {
  const getBandFromId = (id: string, bands: TBANDS) => {
    const currentBand = bands.find((band) => band.id.toString() === id);

    if (currentBand) return currentBand;
  };

  return getBandFromId;
};
