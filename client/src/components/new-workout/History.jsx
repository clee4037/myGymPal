import React from "react";
import { convertDateMMDDYYYY } from "../../utils/convertDateMMDDYYYY";
import { totalVolume } from "../../utils/totalVolume";
import { oneRepMax } from "../../utils/oneRepMax";

const History = ({ history }) => {
  return (
    history &&
    history.map((item) => {
      return (
        <tr className="exercise-table">
          <th scope="row">{convertDateMMDDYYYY(item.date)}</th>
          <td>{item.data.map((set) => `${set.weight}x${set.reps} `)}</td>
          <td>
            1 Rep Max:
            {Math.max(
              ...item.data.map((set) => oneRepMax(set.weight, set.reps))
            )}
          </td>
          <td>Volume: {totalVolume(item.data)}</td>
        </tr>
      );
    })
  );
};

export default History;
