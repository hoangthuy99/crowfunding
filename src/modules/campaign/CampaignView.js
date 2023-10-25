import React, { Fragment } from "react";
import CampImage from "./part/CampImage";
import CampCategory from "./part/CampCategory";
import CampTitle from "./part/CampTitle";
import CampDesc from "./part/CampDesc";
import CampMeta from "./part/CampMeta";
import { Button } from "components/button";
import CampViewAuthor from "./CampViewAuthor";
import CampaignSupport from "./CampaignSupport";
import CampaignPerk from "./CampaignPerk";
import CampaingnGrid from "./CampaingnGrid";
import CampaignItem from "./CampaignItem";

const CampaignView = () => {
  return (
    <Fragment>
      <div
        className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center text-white text-[40px] font-bold mb-10 mt-10"
        style={{
          backgroundImage: `url(https://source.unsplash.com/random)`,
        }}
      >
        <h1>Education</h1>
      </div>
      <div className="flex items-start w-full gap-x-10 max-w-[1066px]">
        <div className="flex-1">
          <CampImage className="h-[398px] mb-8"></CampImage>
          <div className="flex justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  src="https://source.unsplash.com/random"
                  className="w-[89px] h-[70px] object-cover rounded-lg"
                  alt=""
                  key={index}
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[435px]">
          <CampCategory
            text="Architecture"
            className="mb-4 text-sm"
          ></CampCategory>
          <CampTitle className="mb-4 text-xl font-bold">
            {" "}
            Remake - We Make architecture exhibition
          </CampTitle>
          <CampDesc className="mb-4 text-sm">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampDesc>
          <CampViewAuthor></CampViewAuthor>
          <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
            <div className="w-2/4 h-full rounded-full bg-primary"></div>
          </div>
          <div className="flex items-start justify-between mb-4 gap-x-5">
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
          </div>
          <Button className="w-full" kind="primary">
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[100px] bg-white p-5 border-b border-b-slate-100 mb-6">
        <div className="flex items-center text-sm font-medium gap-x-14 text-text3">
          <span className="cursor-pointer text-secondary">Campaign</span>
        </div>
        <Button className="" kind="primary">
          Back this project
        </Button>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
        <div className="w-full bg-white">
            <h2 className="text-lg font-semibold uppercase">Story</h2>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
      <h2 className="mb-10 text-xl font-semibold">You also may be interested in</h2>
      <CampaingnGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaingnGrid>
    </Fragment>
  );
};

export default CampaignView;
