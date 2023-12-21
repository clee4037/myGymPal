import React, { useRef, useState, useEffect } from "react";

const History = ({ history }) => {
  /* WILL OPTMIZE LATER */

  const historyList =
    history &&
    history.map((item) => {
      let date = new Date(item.date);
      date = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      return (
        <tr>
          <th scope="row">{date}</th>
          <td>{item.data.map((set) => `${set.weight}x${set.reps} `)}</td>
          <td>
            1 Rep Max:
            {Math.round(
              item.data[0].weight / (1.0278 - 0.0278 * item.data[0].reps),
              0
            )}
          </td>
          <td>
            Volume:{" "}
            {item.data.reduce(
              (total, set) => (total += set.weight * set.reps),
              0
            )}
          </td>
        </tr>
      );
    });
  return <>{historyList}</>;
};

export default History;
