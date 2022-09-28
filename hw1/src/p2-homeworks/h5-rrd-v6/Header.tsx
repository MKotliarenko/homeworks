import React from 'react'
import {NavLink} from "react-router-dom";
import arrow from "./common/img/arrow.png";
import s from './Header.module.css'
import {PATH} from "./Pages";

function Header() {

    return (
        <div>
            <div className={s.div}>
                <img className={s.img} src={arrow}/>
                <NavLink className={s.nav} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
                <NavLink className={s.nav} to={PATH.JUNIOR}>Junior</NavLink>
                <NavLink className={s.nav} to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
            </div>

        </div>
    )
}

export default Header
