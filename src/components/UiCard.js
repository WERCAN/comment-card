import React from "react";

const UiCard = () => {
  return (
    <div>
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <img
              className="right floated mini ui image"
              src="avatar-foto.jpg"
              alt="avatar"
            />
            <div className="header">Fulu fuli</div>
          </div>
          <div className="meta">Friends of muhittin</div>
          <div className="description">
            muhittin requested permission to view your <b>contact details</b>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div className="ui basic green button">Approve</div>
              <div className="ui basic red button">Decline</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiCard;
