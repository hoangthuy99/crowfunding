import Gap from "components/common/Gap";
import Heading from "components/common/Heading";
import LayoutDashboard from "layout/LayoutDashboard";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignItem from "modules/campaign/CampaignItem";
import CampaingnGrid from "modules/campaign/CampaingnGrid";
import React, { Fragment } from "react";
import { v4 } from "uuid";

const DashboardPage = () => {
  return (
    <Fragment>
      <Heading number={4}>Your Campaign </Heading>
      <CampaignFeature></CampaignFeature>
      <Gap></Gap>
      <Heading>Popular Campaign </Heading>
      <CampaingnGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaingnGrid>
      <Gap></Gap>
      <Heading number={4}>Recent Campaign </Heading>
      <CampaignFeature></CampaignFeature>
      <Gap></Gap>
      <Heading>Popular Campaign </Heading>
      <CampaingnGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaingnGrid>
      <Gap></Gap>
    </Fragment>
  );
};

export default DashboardPage;
