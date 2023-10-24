import * as React from 'react';
import {useEffect} from "react";
import Splashscreen from "./components/Splashscreen";
import Root from "./pages/Root";

export default function App() {
        const [isLoading, setIsLoading] = React.useState(true);
        useEffect(() => {
            setTimeout(() => {
                setIsLoading(false)
            }, 3000);
        }, [isLoading]);

        return isLoading ? <Splashscreen/> : <Root/>;
}
