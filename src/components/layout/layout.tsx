import React, {FC} from "react";

import './layout.scss';


export const Layout: FC = (props) => {
    return <>
        <div className="layout" >
            {props.children}
        </div>
    </>
}