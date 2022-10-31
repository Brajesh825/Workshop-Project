import React from "react";
import WorkshopForm from "../../components/Workshop/WorkshopForm/WorkshopForm";
import { useNavigate, useParams } from "react-router";

import "./editWorkshop.scss";

const EditWorkshop = ({ workshops, setWorkshops }) => {
  const { id } = useParams();
  const navigate = useNavigate()

  const handleWorkshopUpdation = (formData) => {
    const id = formData.id;

    for (let i = 0; i < workshops.length; i++) {
      const element = workshops[i];
      if (element.id === id) {
        workshops[i] = formData;
        break;
      }
      setWorkshops(workshops);
    }

    alert("Workshop SuccessFully Updated")
    navigate("/workshops")

  };

  const filterWorkshopData = (workshops, id) => {
    for (const workshop of workshops) {
      if (workshop.id === id) return workshop;
    }
    return null;
  };

  let workshop = filterWorkshopData(workshops, id);

  return (
    <div className="container">
      <div className="dashboard">
        <WorkshopForm
          workshopData={workshop}
          handleWorkshopSubmission={handleWorkshopUpdation}
        />
      </div>
    </div>
  );
};

export default EditWorkshop;
