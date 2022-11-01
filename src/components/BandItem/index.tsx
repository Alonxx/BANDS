import React from "react";
import { TBANDITEM } from "src/models";
import { useBandsDataStore } from "src/stores";
import { useNavigate } from "react-router-dom";
import { useGetGenreFromId } from "src/hooks";

interface Props {
  band: TBANDITEM;
}

export const BandItem: React.FC<Props> = ({ band }) => {
  const [gnreName, setGnreName] = React.useState<string>();
  const { gnres } = useBandsDataStore();
  const getGnreFromId = useGetGenreFromId();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (gnres.length > 0) {
      const currentGnre = getGnreFromId(band.genreCode, gnres);
      setGnreName(currentGnre);
    }
  }, [gnres, band]);

  return (
    <div className="rounded-2xl w-full h-[56px] bg-dark-blue ">
      <div className="w-full grid grid-cols-5 place-items-center h-full">
        <div className="w-[41px] h-[41px] rounded-xl flex items-center justify-center bg-yellow-web">
          <span className="font-bold text-2xl"> {band.name[0]}</span>
        </div>
        <div className="w-full text-left ">
          <span className="text-white text-md font-light">{band.name}</span>
        </div>
        <div className=" text-left flex flex-col">
          <span className="text-white text-md font-light">
            {band.members.length}
          </span>
        </div>
        <div>
          <span className="text-white text-md font-light">{gnreName}</span>
        </div>
        <button onClick={() => navigate(`bands/${band.id}`)}>
          <img src="/images/arrow_icon.svg" className="rotate-180" />
        </button>
      </div>
    </div>
  );
};
