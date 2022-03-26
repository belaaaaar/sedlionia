import React, {FC, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import './menu.scss';

export const Menu: FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (visible) {
            let items = document.getElementsByClassName("menu")
            for (let item of items) {
                item.classList.add("hide")
            }
        } else {
            let items = document.getElementsByClassName("menu")
            for (let item of items) {
                item.classList.remove("hide")
            }
        }
    }, [visible])

    useEffect(() => {
        const item = document.getElementById(window.location.pathname)
        if (item) {
            item.classList.add('underline');
        }
    })
    return <div className="menu_background">
        <div className="burger" onClick={() => setVisible(!visible)}>Ξ</div>
        <div className="menu">
            <Link rel="preload" to="/" id="/" className="menu__item">главная</Link>
            {/*<div className="menu__item">акции</div>*/}
            <Link rel="preload" to="/tattoo-gallery" id="/tattoo-gallery" className="menu__item">тату</Link>
            <Link rel="preload" to="/piercing-gallery" id="/piercing-gallery" className="menu__item">пирсинг</Link>
            <Link rel="preload" to="/sketch-gallery" id="/sketch-gallery" className="menu__item">эскизы</Link>
            {/*<div className="menu__item">уход</div>*/}
            <Link rel="preload" to="/news" id="/news" className="menu__item">блог</Link>
            <Link rel="preload" to="/creativity-gallery" id="/creativity-gallery" className="menu__item">творчество</Link>
            <Link rel="preload" to="/contacts" id="/contacts" className="menu__item">контакты</Link>
        </div>
    </div>
}

