import React from "react";
import { BandItem, SearchBar } from "src/components";

import { useBandsDataStore, useUserDataStore } from "src/stores";

export const HomePage: React.FC = () => {
  const {
    fetchBandsData,
    gnres,
    currentBands,
    filterBands,
    sortBands,
    searchBands,
  } = useBandsDataStore();

  const { logoutUser } = useUserDataStore();

  const [sortSelectOption, setSortSelectOption] = React.useState<string>("all");
  const [filterelectOption, setFilterSelectOption] =
    React.useState<string>("all");

  const [searchInputValue, setSearchInputValue] = React.useState<string>("");

  React.useEffect(() => {
    fetchBandsData();
  }, []);

  React.useEffect(() => {
    searchBands(searchInputValue.toLowerCase());
  }, [searchInputValue]);

  const handleFiltersBands = (gnreCode: string) => {
    setFilterSelectOption(gnreCode);
    filterBands(gnreCode);
    sortSelectOption !== "all" && sortBands(sortSelectOption);
  };

  const handleSortBands = (sortCode: string) => {
    setSortSelectOption(sortCode);
    sortBands(sortCode);
    sortCode === "all" && setFilterSelectOption("all");
  };

  const handleLogout = () => {
    logoutUser();
  };

  const headers = ["", "Band", "Members", "Genre", "Details"];

  return (
    <div className="flex flex-col w-full mb-5">
      <div className="bg-dark-blue h-[50px] grid grid-cols-3 place-content-center">
        <div className="ml-3">
          <h1 className="text-xl text-yellow-web">nubceo</h1>
        </div>
        <div className="ml-3 w-full">
          <SearchBar setInputValue={setSearchInputValue} />
        </div>
        <button onClick={() => handleLogout()}>
          <span className="text-white">Logout</span>
        </button>
      </div>

      <div className="w-full items-center flex flex-col mt-10">
        <div className="mb-5 w-full">
          <h3 className="text-3xl text-white self-start ml-6">BANDS</h3>
        </div>

        <div className="flex flex-col gap-5 w-[90%] items-center">
          <div className="flex flex-row  gap-8 justify-end w-full">
            <div>
              <span className="text-white text-sm font-light mr-3">
                Filter:
              </span>
              <select
                className="rounded-md"
                value={filterelectOption}
                onChange={(e) => handleFiltersBands(e.currentTarget.value)}
                name="filter"
              >
                <option value="all">All</option>
                {gnres?.map((gnre) => (
                  <option key={gnre.code} value={gnre.code}>
                    {gnre.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <span className="text-white text-sm font-light mr-3 ">Sort:</span>
              <select
                value={sortSelectOption}
                className="rounded-md"
                onChange={(e) => handleSortBands(e.currentTarget.value)}
                name="sort"
              >
                <option value="all">Default</option>
                <option value="more">More members</option>
                <option value="less">Less members</option>
              </select>
            </div>
          </div>
          <div className="w-full grid grid-cols-5 place-items-center ">
            {headers.map((header) => (
              <span
                key={header}
                className="text-white font-light text-md md:text-md"
              >
                {header}
              </span>
            ))}
          </div>
          {currentBands?.map((band) => (
            <BandItem key={band.id} band={band} />
          ))}
        </div>
      </div>
    </div>
  );
};
