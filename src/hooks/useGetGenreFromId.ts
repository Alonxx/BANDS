import { TGENRES } from "src/models";

export const useGetGenreFromId = () => {
  const getGenreFromId = (id: string, gnres: TGENRES) => {
    const currentGnreName = gnres.find((gnre) => gnre.code === id);
    if (currentGnreName) return currentGnreName.name;
    return id;
  };
  return getGenreFromId;
};
