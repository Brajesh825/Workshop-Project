import "./workshopForm.scss";

import { useState } from "react";

const WorkshopForm = ({ handleWorkshopSubmission, workshopData }) => {
  const [workshopName, setWorkshopName] = useState(
    workshopData ? workshopData.workshopName : ""
  );
  const [workshopVenue, setWorkshopVenue] = useState(
    workshopData ? workshopData.workshopVenue : ""
  );
  const [workshopType, setWorkshopType] = useState(
    workshopData ? workshopData.workshopType : ""
  );
  const [workshopUrl, setWorkshopUrl] = useState(
    workshopData ? workshopData.workshopUrl : ""
  );
  const [workshopDate, setWorkshopDate] = useState(
    workshopData ? workshopData.workshopDate : ""
  );
  const id = workshopData ? workshopData.id : null;

  const submitForm = (event) => {
    event.preventDefault();
    let formData = {
      workshopName,
      workshopVenue,
      workshopType,
      workshopUrl,
      workshopDate,
      id,
    };

    handleWorkshopSubmission(formData);
  };

  const formType = !id ? "Submit Workshop" : "Update Workshop";

  return (
    <>
      <form className="workshopForm" onSubmit={submitForm}>
        <div className="FormItems">
          <div
            className="FormImage"
            style={{ backgroundImage: "url('/images/background.jpg')" }}
          >
            <div className="changeCoverImage">
                <input
                  type="file"
                  name="imageInput"
                  id="imageInput"
                  class="imageInput"
                />
                <label class="imageInputLabel" for="imageInput">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="image"
                    class="svg-inline--fa fa-image fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                    ></path>
                  </svg>
                  <span>Change Cover Image</span>
                </label>
              
            </div>
          </div>
        </div>
        <div className="FormItems">
          <div className="FormItem">
            <label> Workshop Name:</label>
            <input
              type="text"
              name="workshopName"
              value={workshopName}
              onChange={(e) => setWorkshopName(e.target.value)}
            />
          </div>
          <div className="FormItem">
            <label> Workshop Venue:</label>
            <input
              type="text"
              name="workshopVenue"
              value={workshopVenue}
              onChange={(e) => setWorkshopVenue(e.target.value)}
            />
          </div>
        </div>
        <div className="FormItems">
          <div className="FormItem">
            <label> Workshop Type:</label>
            <input
              type="text"
              name="workshopType"
              value={workshopType}
              onChange={(e) => setWorkshopType(e.target.value)}
            />
          </div>
          <div className="FormItem">
            <label> Workshop Url:</label>
            <input
              type="text"
              name="workshopUrl"
              value={workshopUrl}
              onChange={(e) => setWorkshopUrl(e.target.value)}
            />
          </div>
        </div>
        <div className="FormItems">
          <div className="FormItem">
            <label> Workshop Date:</label>
            <input
              type="datetime-local"
              name="workshopDate"
              value={workshopDate}
              onChange={(e) => setWorkshopDate(e.target.value)}
            />
          </div>
        </div>
        <div className="FormSubmitButton">
          <input type="submit" value={formType} name="workshopSubmitButton" />
        </div>
      </form>
    </>
  );
};

export default WorkshopForm;
