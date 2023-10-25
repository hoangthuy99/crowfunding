import { defaultImage } from "constants/global";
import React, { useState } from "react";

const DashboardSearch = () => {
  const [showSearch, setShowSearch] = useState();
  return (
    <div className="relative z-50">
      <div className="bg-white rounded-full shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15) ] p-2 w-full max-w-[458px] flex items-center ">
        <div className="flex-1 px-5">
          <input
            type="text"
            placeholder="Do fundrise now"
            className="text-sm bg-transparent placeholder:text-text4 text-text1"
          />
        </div>
        <button className="w-[72px] rounded-full bg-primary text-white h-10 flex items-center justify-center flex-shrink-0">
          <svg
            width="73"
            height="40"
            viewBox="0 0 73 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2208_4776)">
              <path
                d="M43.9702 27.5L40.2202 23.75M42.0952 19.0625C42.0952 19.9243 41.9255 20.7777 41.5957 21.5739C41.2659 22.3701 40.7825 23.0935 40.1731 23.7029C39.5637 24.3123 38.8403 24.7957 38.0441 25.1255C37.2479 25.4553 36.3945 25.625 35.5327 25.625C34.6709 25.625 33.8176 25.4553 33.0214 25.1255C32.2252 24.7957 31.5017 24.3123 30.8923 23.7029C30.2829 23.0935 29.7996 22.3701 29.4698 21.5739C29.14 20.7777 28.9702 19.9243 28.9702 19.0625C28.9702 17.322 29.6616 15.6528 30.8923 14.4221C32.123 13.1914 33.7922 12.5 35.5327 12.5C37.2732 12.5 38.9424 13.1914 40.1731 14.4221C41.4038 15.6528 42.0952 17.322 42.0952 19.0625Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
      </div>
     { showSearch &&<div className="search-results w-full lg:w-[843px] bg-white absolute top-full left-0 z-50 translate-y-5 pb-6 rounded-3xl ">
        <div className="flex items-center justify-between p-3 bg-graySoft rounded-3xl">
          <h4 className="pl-4 text-sm font-medium underline">
            See all 10,124 fundraisier
          </h4>
          <button className="flex items-center justify-center w-[72px] h-[50px] rounded-xl bg-error bg-opacity-20 text-error cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6 pb-0">
          <div className="flex flex-col mb-6 gap-y-5">
            <SearchItems></SearchItems>
            <SearchItems></SearchItems>
            <SearchItems></SearchItems>
            <SearchItems></SearchItems>
            <SearchItems></SearchItems>
          </div>
          <h3 className="mb-4 text-sm font-semibold">Related searchs</h3>
          <div className="flex flex-col gap-y-3">
            <p>
              <strong>education</strong>fund
            </p>
            <p>schoralship fund</p>
          </div>
        </div>
      </div>}
    </div>
  );
};

function SearchItems() {
  return (
    <div className="flex items-center gap-x-5">
      <img
        src={defaultImage}
        className="w-[50px] h-[50px] rounded-lg object-cover"
        alt=""
      />
      <div className="flex-1 text-sm">
        <h3 className="mb-1 ">
          <strong>Education</strong> fund for Durgham Family
        </h3>
        <p className="text-text3">By Durgham Family </p>
      </div>
    </div>
  );
}
export default DashboardSearch;
