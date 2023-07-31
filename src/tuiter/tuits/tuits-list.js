import React from "react";
import SingleTuitsItem from "./tuits-single-item";
import {useSelector} from "react-redux";

const TuitsList = () => {
    const tuits = useSelector(state => state.tuits)
    return(
        <>
          <ul className={"list-group"}>
            {
              tuits.map(tuit => {
                return(
                    <li className={"list-group-item"}>
                      <SingleTuitsItem tuit={tuit}/>
                    </li>
                );
              })
            }
          </ul>
        </>
    );
  };
  
  export default TuitsList;