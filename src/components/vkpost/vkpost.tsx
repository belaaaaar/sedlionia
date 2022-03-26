import React, {useEffect} from "react";
import VK from "../../api/vk";
import {VKapiId} from "../../config";
import './vkpost.scss';


export const Vkpost = (arr: {target: string, name: string}) => {
    useEffect(() => {
        VK.init({
            apiId: VKapiId
        });
        VK.Widgets.Article(arr.target, arr.name);
    }, [])

    return <div className="vkpost" id={arr.target}></div>
}
