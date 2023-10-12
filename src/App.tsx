import { RouterProvider } from "react-router-dom";
import Router from "./router";
import { GlobalStyle } from "./Styles/Global/gloablStyle.style";

function App() {
    return (
        <>
            <RouterProvider router={Router} />
            <GlobalStyle />
        </>
    );
}

export default App;
