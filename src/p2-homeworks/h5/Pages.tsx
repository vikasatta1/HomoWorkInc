import React from 'react'
import {Routes, Route,Navigate} from 'react-router-dom'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";
import PlusJunior from "./pages/PlusJunior";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    PLUS_JUNIOR: '/plus-junior',
}

function Pages() {
    return (
        <div>

            <Routes>

                <Route path={'/'}  element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.PLUS_JUNIOR} element={<PlusJunior/>}/>


                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={"/*"} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Pages
