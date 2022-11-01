import React from "react";

interface Props {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar: React.FC<Props> = ({ setInputValue }) => {
  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-row gap-2 justify-center items-center h-full">
      <div>
        <img src="/images/search_icon.svg" className="w-5" />
      </div>
      <input
        className="w-full h-full bg-transparent text-white outline-none"
        placeholder="Search"
        onChange={(e) => handleInputValue(e)}
      />
    </div>
  );
};
