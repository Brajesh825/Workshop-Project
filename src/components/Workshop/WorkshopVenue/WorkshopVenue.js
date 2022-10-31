import React from "react";
import { ReactComponent as Wifi } from "../../../icons/wifi.svg";
import { ReactComponent as Venue } from "../../../icons/venue.svg";


const WorkshopVenue = ({ workshop }) => {

    console.log(workshop);

  if (workshop.workshopType === "Online") {
    return (
      <div className="workshopLink">
        <Wifi width={16} height={16}></Wifi>
        <a href={workshop.workshopUrl}>{workshop.workshopUrl}</a>
      </div>
    );
  } else {
    return (
      <div className="workshopLink">
        <Venue width={16} height={16}></Venue>
        <h3>{workshop.workshopVenue}</h3>
      </div>
    );
  }
};

export default WorkshopVenue;
