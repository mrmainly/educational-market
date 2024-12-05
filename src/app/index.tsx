import { Routing } from "@/pages";
import { withProviders } from "./providers";

import "./styles/index.css";

const App = () => {
    return (
        <>
            <Routing />
        </>
    );
};

export default withProviders(App);
