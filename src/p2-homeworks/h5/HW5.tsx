import React from 'react'
import Header from './Header'

import {HashRouter,} from "react-router-dom";
import Pages from "./Pages";

function HW5() {
    return (
        <div>
            <HashRouter>
                <Header/>
                <Pages/>
            </HashRouter>
        </div>
    )
}

export default HW5
