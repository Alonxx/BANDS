import { TALBUMS } from "src/models";

export const useGetAlbumsBand = () => {
  const getAlbumsBand = (bandId: string, albums: TALBUMS) => {
    const currentBandAlbums = albums.filter(
      (albums) => albums.bandId.toString() === bandId
    );

    if (currentBandAlbums) return currentBandAlbums;
  };

  return getAlbumsBand;
};
