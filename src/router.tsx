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
                element: <LoginPage />,
            },
            {
                path: "/spaceList",
                element: <SpaceListPage />,
            },
            {
                path: "/tableList",
                element: <TableListPage />,
            },
            {
                path: "/addSpace",
                element: <AddSpacePage />,
            },
            {
                path: "/addTable",
                element: <AddTablePage />,
            },
            {
                path: "/table",
                element: <TablePage />,
            },
        ],
    },
]);

export default Router;
