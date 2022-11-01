import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetBandFromId,
  useGetAlbumsBand,
  useGetGenreFromId,
} from "src/hooks";
import { TALBUMS, TBANDITEM } from "src/models";
import { useBandsDataStore } from "src/stores";

export const BandPage: React.FC = () => {
  const [currentBand, setCurrentBand] = React.useState<TBANDITEM>();
  const [currentAlbums, setCurrentAlbums] = React.useState<TALBUMS>();
  const [gnreName, setGnreName] = React.useState<string>();
  const navigate = useNavigate();
  const { bands, albums, gnres } = useBandsDataStore();
  const { id } = useParams();
  const getBandFromId = useGetBandFromId();
  const getAlbumsBand = useGetAlbumsBand();
  const getGnreFromId = useGetGenreFromId();

  React.useEffect(() => {
    if (id) {
      const band = getBandFromId(id, bands);
      const currentAlbums = getAlbumsBand(id, albums);
      if (band) {
        const currentGnre = getGnreFromId(band.genreCode, gnres);
        setGnreName(currentGnre);
      }
      setCurrentBand(band);
      setCurrentAlbums(currentAlbums);
    }
  }, [id]);

  return (
    <div className="flex flex-col justify-center items-center w-full mt-5 md:mt-20">
      <div className="w-full">
        <button className=" ml-5" onClick={() => navigate("/")}>
          <img src="/images/arrow_icon.svg" className=" w-7 md:w-10" />
        </button>
      </div>

      <div className="w-full h-[200px] flex items-center justify-center bg-yellow-web">
        <span className="font-bold text-3xl md:text-5xl">
          {currentBand?.name.toUpperCase()}
        </span>
      </div>
      <div className="flex flex-col justify-center items-center text-white mt-10 ">
        <span className="text-xl">Band: {currentBand?.name}</span>
        <span className="text-xl">Fundation Year: {currentBand?.year}</span>
        <span className="text-xl">Country: {currentBand?.country}</span>
        <span className="text-xl">Genre: {gnreName}</span>
        <div className="flex flex-col items-center mt-5">
          <span className="text-xl">Members:</span>
          <div className="flex flex-col gap-5 mt-2 md:flex-row text-center ">
            {currentBand?.members.map((member, i) => (
              <span key={i}>{member.name}</span>
            ))}
          </div>
        </div>
        {currentAlbums && currentAlbums.length > 0 && (
          <div className="flex flex-col items-center mt-20">
            <span className="text-xl">Albums:</span>
            <div className="flex flex-col md:flex-row gap-5 mt-5">
              {currentAlbums?.map((album, i) => (
                <div
                  key={i}
                  className="w-32 h-32 bg-slate-500 rounded-full flex flex-col justify-center text-center gap-1"
                >
                  <span className="font-light text-md">{album.name}</span>
                  <span className="font-light text-xs">{album.year}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
