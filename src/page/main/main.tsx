import React, {FC, useEffect, useState} from "react";
import master from "../../image/master.png";
import {Header} from "../../components/header/header";

import './main.scss';
import {Menu} from "../../components/menu/menu";
import {Footer} from "../../components/footer/footer";
import {Vkpost} from "../../components/vkpost/vkpost";
import {useNavigate} from "react-router-dom";
import {Layout} from "../../components/layout/layout";

type PostsResponse = {
    Posts: Array<{
        id: number
        name: string
    }>
};

export const Main: FC = () => {
    const [posts, setPosts] = useState<PostsResponse["Posts"]>([]);

    let navigate = useNavigate();
    const routeTatoo = () => {
        navigate("/tattoo-gallery");
    }
    const routePiercing = () => {
        navigate("/piercing-gallery");
    }
    const routeNews = () => {
        navigate("/news");
    }
    const routeSketch = () => {
        navigate("/sketch-gallery");
    }

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/rest/posts?limit=3')
            .then((response) => {
                return response.json() as Promise<PostsResponse>;
            })
            .then((data) => {
                setPosts(data.Posts);
            });
    }, [])
    return <div>
        <Header/>
        <Menu/>
        <Layout>
            <div className="wrapper">
                <div className="AboutMaster">
                    <h1 className="title">О мастере</h1>
                    <div className="AboutMaster__container">
                        <img src={master} alt="" className="AboutMaster__photo"/>
                        <div className="AboutMaster__text">Привет, Я занимаемся пирсингом и татуировками в Челябинске, а
                            это блог, посвящен моему хобби и творчеству. Здесь Вы можете увидеть мои новые работы
                        </div>
                    </div>
                </div>
                <div className="GallerysArt">
                    <h1 className="title">Галлереи моего творчества</h1>
                    <div className="GallerysArt__container">
                        <div className="GallerysArt__item" onClick={routeSketch}>
                            <div className="GallerysArt__alt">Эскизы</div>
                        </div>
                        <div className="GallerysArt__item" onClick={routeTatoo}>
                            <div className="GallerysArt__alt">Тату</div>
                        </div>
                        <div className="GallerysArt__item" onClick={routePiercing}>
                            <div className="GallerysArt__alt">Пирсинг</div>
                        </div>
                        <div className="GallerysArt__item" onClick={routeNews}>
                            <div className="GallerysArt__alt">Блог</div>
                        </div>
                    </div>
                </div>
                <div className="Article">
                    <h1 className="title">Новости</h1>
                    <div className="Article__container">
                        {posts.map((post, index) => {
                            return <Vkpost key={index} target={"vkpostid" + post.id} name={post.name}/>
                        })}
                    </div>
                </div>
            </div>
        </Layout>
        <Footer/>
    </div>
}