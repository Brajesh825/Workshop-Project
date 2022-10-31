import React from "react";
import WorkshopForm from "../../components/Workshop/WorkshopForm/WorkshopForm";

import { v4 as uuid } from 'uuid';

import "./dashboard.scss";
import { useNavigate } from "react-router";

const Dashboard = ({ workshops, setWorkshops }) => {
  const navigate = useNavigate()

  const handleWorkshopSubmission = (formData) => {
    formData.id = uuid()
    setWorkshops([...workshops , formData])

    alert("Workshop SuccessFully Created")
    navigate("/workshops")
  };

  return (
    <div className="container">
      <div className="dashboard">
        <WorkshopForm handleWorkshopSubmission={handleWorkshopSubmission} />
      </div>
    </div>
  );
};

export default Dashboard;
