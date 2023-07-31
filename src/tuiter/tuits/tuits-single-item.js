import React from "react";
import { useDispatch } from "react-redux";
import { deleteTuit, countLike } from "./tuits-reducer";

const SingleTuitsItem = ({
  tuit = {
    _id: 123,
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title:
      "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    image: "nasa.png",
    liked: false,
    replies: 123,
    retuits: 432,
    likes: 2345,
    handle: "@spacex",
    tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };
  const countLikeHandler = (id) => {
    dispatch(countLike(id));
  };
  return (
    <>
      <div className={"row"}>
        <div className={"col-2"}>
          <img
            src={`/images/${tuit.image}`}
            className={"wd-avatar-js"}
            style={{ height: "64px", width: "64px", borderRadius: "50%" }}
          />
        </div>
        <div className={"col-10"}>
          <div className={"row"}>
            <div className={"col-10"}>
              <span className={"fw-bold"}>{tuit.topic} &nbsp;</span>
              <i className="bi bi-check-circle-fill text-primary" />
              <span className={"text-secondary"}>
                &nbsp; {tuit.handle} &#8226; {tuit.time}
              </span>
            </div>
            <div className={"col-2"}>
              <span className={"text-secondary"} style={{ float: "right" }}>
                &#8226;&#8226;&#8226;&nbsp;&nbsp;
                <i
                  className="bi bi-x-lg float-end"
                  onClick={() => deleteTuitHandler(tuit._id)}
                ></i>
              </span>
            </div>
          </div>
          <div className={"row"}>
            <p>
              {tuit.tuit} &nbsp;
              <i className="bi bi-arrow-right" />
              <span className={"text-primary"}>
                &nbsp; {tuit.topic}.com/updates
              </span>
            </p>
          </div>
          <div className={"row text-secondary"} style={{ marginTop: "1px" }}>
            <div className="col-3">
              <i className="bi bi-chat-left-text-fill" />
              <span className="wd-gray">&nbsp; &nbsp; {tuit.replies}</span>
            </div>
            <div className="col-3">
              <i className="bi bi-box-arrow-up-right" />
              <span className="wd-gray">&nbsp; &nbsp; {tuit.retuits}</span>
            </div>

            <div className="col-3">
              <i
                className={`bi ${
                  !tuit.liked ? "bi-heart-fill text-danger" : "bi-heart"
                }`}
                onClick={() => countLikeHandler(tuit._id)}
                id="likeClick"
              />
              <span className="wd-gray" id="likeClick">
                &nbsp; &nbsp; {tuit.likes}
              </span>
            </div>

            <div className="col-3">
              <i className="bi bi-share-fill" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTuitsItem;
