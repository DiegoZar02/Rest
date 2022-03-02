import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MyNav from "./components/Nav";

const App = (): JSX.Element => {
    return (
        <Fragment>
            <MyNav />
            <Outlet />
        </Fragment>
    );
};

export default App;
