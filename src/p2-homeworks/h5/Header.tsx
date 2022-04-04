import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Pages";
import s from './Header.module.css'


function Header() {


    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link}
                // @ts-ignore
                     activeClassName={s.active}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link}
                // @ts-ignore
                     activeClassName={s.active}>junior</NavLink>
            <NavLink to={PATH.PLUS_JUNIOR} className={s.link}
                // @ts-ignore
                     activeClassName={s.active}>plus-junior</NavLink>
            <div className={s.block}/>
        </div>
    )
}

export default Header
