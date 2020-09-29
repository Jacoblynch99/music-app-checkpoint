import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  liStyle: {
    listStyle: "none",
    fontSize: 18,
    color: "red",
  },
});

const Text = (props) => {
  const classes = useStyles();
  let message = [];
  if (props.switch !== "") {
    message.push(props.switch);
  }
  if (props.select !== "") {
    message.push(props.select);
  }
  if (props.sound !== "") {
    message.push(props.sound);
  }
  return (
    <div>
      {message.map((item) => {
        return <li className={classes.liStyle}>{item}</li>;
      })}
    </div>
  );
};

export default Text;
