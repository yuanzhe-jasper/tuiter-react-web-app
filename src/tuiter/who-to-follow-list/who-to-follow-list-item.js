import React from "react";

const WhoToFollowListItem = ({ who }) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-md-3 col-12">
          <img
            className="rounded-circle"
            height={44}
            src={`../images/${who.avatarIcon}`}
          />
        </div>
        <div className="col-md-6 col-12">
          <div className="fw-bold">{who.userName}</div>
          <div>@{who.handle}</div>
        </div>
        <div className="col-md-3 col-12">
          <button className="btn btn-primary rounded-pill float-end">
            Follow
          </button>
        </div>
      </div>
    </li>
  );
};
export default WhoToFollowListItem;
