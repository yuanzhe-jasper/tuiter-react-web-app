import React, { useEffect } from "react";
import SingleTuitsItem from "./tuits-single-item";
import { useDispatch, useSelector } from "react-redux";
import { findTuitsThunk } from "../services/tuits-thunks";


const TuitsList = () => {
  const { tuits, loading } = useSelector((state) => state.tuitsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findTuitsThunk());
  }, []);
  return (
    <>
      <ul className={"list-group"}>
        {loading && <li className="list-group-item">Loading...</li>}
        {tuits.map((tuit) => {
          return (
            <li className={"list-group-item"}>
              <SingleTuitsItem tuit={tuit} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TuitsList;
