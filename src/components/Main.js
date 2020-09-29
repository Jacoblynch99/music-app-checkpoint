import React from "react";
import LoginIn from "./LoginIn";

const Main = (props) => {
  return (
    <main className={props.className} style={{ height: 1000 }}>
      <LoginIn />
    </main>
  );
};

export default Main;
