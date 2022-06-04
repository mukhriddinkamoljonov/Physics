import React from "react";
import { SearchIcon, SettingIcon } from "../../assets/images/Iocns";

const Search = () => {
  return (
    <div className="search">
      <div className="search-content flex ml-3 ">
        <p className="setting mr-5">
          <SettingIcon />
        </p>
        <input type="text" placeholder="Поиск" />
        <span>
          <SearchIcon />
        </span>
      </div>
    </div>
  );
};

export default Search;
