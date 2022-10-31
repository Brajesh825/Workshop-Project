import React from "react";

import "./workshops.scss";
import { ReactComponent as Edit } from "../../icons/edit.svg";
import { ReactComponent as Date } from "../../icons/date.svg";
import WorkshopVenue from "../../components/Workshop/WorkshopVenue/WorkshopVenue";

import { NavLink } from "react-router-dom";

const Workshops = ({ workshops }) => {

  return (
    <div className="container">
      <div className="workshops">
        <section className="workshopItems">
          {workshops.map((item) => {
            return (
              <div className="workshopItem" key={item.id}>
                <div className="workshopItemTop">
                  <div className="workshopImageContainer">
                    <img src="/images/background.jpg " alt="workshop"></img>
                  </div>
                </div>
                <div className="workshopItemBottom">
                  <div className="workshopItemHeader">
                    <h2>{item.workshopName}</h2>
                    <span className="workshopType">{item.workshopType}</span>
                  </div>
                  <div className="workshopItemBody">
                    <div className="workshopDate">
                      <Date width={16} height={16}></Date>
                      <h3> {item.workshopDate} </h3>{" "}
                    </div>
                      <WorkshopVenue workshop = {item} ></WorkshopVenue>
                  </div>
                  <div className="workshopItemFooter">
                    <span>
                      <NavLink to={item.id} activeClassName="selected">
                        <Edit width={16} height={16}></Edit>
                      </NavLink>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Workshops;
