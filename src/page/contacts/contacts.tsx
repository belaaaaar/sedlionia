import React, {FC, useEffect, useState} from "react";

import './contacts.scss';
import {Menu} from "../../components/menu/menu";
import {Footer} from "../../components/footer/footer";
import instalogo from "../../image/instagramm.png";
import vklogo from "../../image/vk.png";
import tglogo from "../../image/tg.png";

export const Contacts: FC = () => {
    return <>
        <Menu/>
        <div className="Contacts">
            <h1 className="block_title">Контакты</h1>
            <div className="Contacts__container">

                <div className="social__icons">
                    <img className="icon" src={instalogo} alt="instalogo"/>
                    <img className="icon" src={vklogo} alt="vklogo"/>
                    <img className="icon" src={tglogo} alt="tglogo"/>
                </div>
                <div className="footer__address">
                    <span>ул. Красная, 42 <br/> +8999999999999</span>
                </div>


                <iframe
                    className="Contacts__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A3aa650a962be99a9b8f7684c51ec098cbb12fa1d38d617c574dd49bae71df474&amp;source=constructor"
                    width="100%" height="400" frameBorder="0"></iframe>
            </div>
        </div>
        <Footer/>
    </>
}