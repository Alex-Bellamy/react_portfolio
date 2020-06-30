import React from "react";

const CvCard = ({ cv }) => {
  return (
    <>
      <div class="ui card" id="card">
        <div class="image">
          <img src={cv.image} />
        </div>
        <div class="content" id="cardcontent">
          <h3 class="ui header">{cv.name}</h3>

          <div class="description">{cv.description}</div>
        </div>
      </div>
    </>
  );
};

export default CvCard;