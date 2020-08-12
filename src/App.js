import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const COLORS = {
  0: "red",
  1: "blue",
  2: "green"
};

const useStyles = makeStyles((theme) => ({//I believe a have to use this instead of what I did
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function FloatingActionButtons() {
  const [colorState, toggleColor] = useState(1);
  const toggle = useCallback((color) => {
    if (color > 1) return 0;
    return color + 1;
  });
  const [message, setMessage] = useState("Loading...");

  return (
    <>
      <h1>{message}</h1>
      <ChildComponent colorState={colorState} setMessage={setMessage} />
      <button onClick={() => toggleColor(toggle(colorState))}>Change color</button>
    </>
  );
}

const ChildComponent = ({ colorState, setMessage }) => {
  useEffect(() => {
    setMessage("Hello world!!");
  });
  console.log(colorState);
  return (
    <h1 style={{ backgroundColor: COLORS[colorState] }}>Child component</h1>
  );
};
