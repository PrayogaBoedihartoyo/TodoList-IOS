import * as React from 'react';
import Router from "./components/Router";
import {useEffect} from "react";
import Splashscreen from "./components/Splashscreen";

export default function App() {
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    }, [isLoading]);

    return isLoading ? <Splashscreen/> : <Router/>;
}
