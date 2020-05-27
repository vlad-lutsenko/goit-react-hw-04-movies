/* Core */
import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
/*instruments */
import route from "./helpers/route";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
/* Components */
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

const Movies = lazy(() =>
  import("./pages/Movies/Movies" /* webpackChunkName: "Movies" */)
);
const NotFound = lazy(() =>
  import("./pages/NotFound/NotFound" /* webpackChunkName: "NotFound" */)
);
function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader type="TailSpin" color="#red" />}>
        <Switch>
          <Route exact path={route.HOME} component={HomePage} />
          <Route path={route.MOVIES} component={Movies} />
          <Route path="/:anything" component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
