import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./screen/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Workshops from "./screen/Workshops/Workshops";
import { useState } from "react";
import EditWorkshop from "./screen/EditWorkshop/EditWorkshop";

function App() {
  const [workshops, setWorkshops] = useState([
    {
      id: "cc53351f-c144-4a23-891c-911d30c4a805",
      workshopDate: "2022-10-20T23:50",
      workshopName: "Talk Show",
      workshopType: "Online",
      workshopUrl: "Zoom",
      workshopVenue: "",
    },
    {
      id: "cc53351f-c144-4a23-891c-911d30c4a806",
      workshopDate: "2022-10-20T23:50",
      workshopName: "Talk Show",
      workshopType: "In Person",
      workshopUrl: "",
      workshopVenue: "Delhi",
    },
    {
      id: "cc53351f-c144-4a23-891c-911d30c4a807",
      workshopDate: "2022-10-20T23:50",
      workshopName: "Talk Show",
      workshopType: "Online",
      workshopUrl: "Meet",
      workshopVenue: "",
    },
    {
      id: "cc53351f-c144-4a23-891c-911d30c4a808",
      workshopDate: "2022-10-20T23:50",
      workshopName: "Java",
      workshopType: "Online",
      workshopUrl: "Meet",
      workshopVenue: "",
    },
  ]);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <SideBar />
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard workshops={workshops} setWorkshops={setWorkshops} />
          }
        ></Route>
        <Route
          path="/workshops"
          element={<Workshops workshops={workshops} />}
        ></Route>
        <Route
          path="/workshops/:id"
          element={
            <EditWorkshop workshops={workshops} setWorkshops={setWorkshops} />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
