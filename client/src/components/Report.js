import React from "react";
import Group12 from "../assets/images/Group12.svg";

function Report() {
  return (
    <div className="container">
      <div className="report">
        <span>Result</span>
        <div className="report__to-draft">
          <button className="report__to-draft-button">CANCEL</button>
          <button className="report__to-draft-button-2">SAVE DRAFT</button>
        </div>
      </div>
      <div className="report__data">
        <img src={Group12} alt="placeholderphoto" />
      </div>
    </div>
  );
}

export default Report;
