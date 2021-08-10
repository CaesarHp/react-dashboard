import React from "react";
import { useSelector } from "react-redux";

function ProgressBar() {
  const progress = useSelector((state) => state.data.monthlyProgress);

  const completed = Math.round(
    (progress.monthFinishedTodo / progress.monthTotalTodo) * 100
  );

  console.log(progress);
  console.log(completed);

  const containerStyles = {
    height: 25,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginBottom: 30,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#824dff",
    borderRadius: "inherit",
    textAlign: "right",

    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",

    transition: "all 0.3s ease-in-out",
  };

  const labelStyles = {
    color: "white",
    fontSize: 14,
    fontWeight: 500,
    marginRight: 20,
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
