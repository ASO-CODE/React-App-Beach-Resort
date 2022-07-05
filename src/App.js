import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";
import Error from "./Pages/Error";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Routes><
      <Route exact path="/" component={Home} />
      <Route path="/rooms/" component={Rooms} />
      <Route path="/single-room" component={SingleRoom} />
        {/* <Route path="/" component={Home} /> */}
        /Routes></Routes>
      <Home />
      <Rooms />
      <SingleRoom />
      <Error />
    </>
  );
}

export default App;
