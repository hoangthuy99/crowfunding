import IconFolder from "components/icon/IconFolder";
import React from "react";
import { Link } from "react-router-dom";
import CampMeta from "./part/CampMeta";
import CampTitle from "./part/CampTitle";
import CampDesc from "./part/CampDesc";
import CampAuthor from "./part/CampAuthor";
import CampImage from "./part/CampImage";

const CampaignItem = () => {
  return (
    <div>
    <CampImage></CampImage>
      <div className="px-5 py-4">
        <Link
          to="/"
          className="flex items-baseline mb-4 font-xs medium text- gap-x-3 text-text3"
        >
          <IconFolder></IconFolder>
          <span>Education</span>
        </Link>
        <CampTitle>Powered Kits Learing Boxes</CampTitle>
        <CampDesc>
          Fun, durable and reusable boxes with eco-friendly options.
        </CampDesc>
        <div className="flex items-start justify-between mb-5 gap-x-5">
          <CampMeta></CampMeta>
          <CampMeta></CampMeta>
        </div>
       <CampAuthor></CampAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
