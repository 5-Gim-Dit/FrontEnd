import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { SpaceListPage } from "./pages/spaceList";
import { TableListPage } from "./pages/tableList";
import { AddSpacePage } from "./pages/addSpace";
import { AddTablePage } from "./pages/addTable";
import { TablePage } from "./pages/table";

const Router = createBrowserRouter([
    {
        path: "",
        children: [
            {
                path: "/",
                element: <SpaceListPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/callback",
                element: <SpaceListPage />,
            },
            {
                path: "/spaceList",
                element: <SpaceListPage />,
            },
            {
                path: "/tableList/:id",
                element: <TableListPage />,
            },
            {
                path: "/addSpace",
                element: <AddSpacePage />,
            },
            {
                path: "/addTable/:id",
                element: <AddTablePage />,
            },
            {
                path: "/table/:id",
                element: <TablePage />,
            },
        ],
    },
]);

export default Router;
