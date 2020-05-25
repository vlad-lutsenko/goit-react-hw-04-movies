import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./containers/HomePage/HomePage";

const Movies = lazy(() => import("./containers/Movies/Movies"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<p>loading</p>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies" component={Movies} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
