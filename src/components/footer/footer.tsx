import React, {FC} from "react";

import './footer.scss';
import {Mediaicons} from "../mediaicons/mediaicons";

export const Footer: FC = () => {
    return <>

        <div className="footer__background">
            <div className="footer__content">
                <Mediaicons/>
                <div className="footer__address">
                    <span>ул. Красная, 42 <br/> +8999999999999</span>
                </div>
            </div>
        </div>
    </>
}

