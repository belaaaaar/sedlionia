import React, {FC, useEffect, useState} from "react";

import './news.scss';
import {Menu} from "../../components/menu/menu";
import {Footer} from "../../components/footer/footer";
import {Vkpost} from "../../components/vkpost/vkpost";
import {Layout} from "../../components/layout/layout";

type PostsResponse = {
    Posts: Array<{
        id: number
        name: string
    }>
};

export const News: FC = () => {
    const [posts, setPosts] = useState<PostsResponse["Posts"]>([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/rest/posts?limit=10')
            .then((response) => {
                return response.json() as Promise<PostsResponse>;
            })
            .then((data) => {
                setPosts(data.Posts);
            });
    }, [])
    return <div>
        <Menu/>
        <Layout>
            <div className="Article">
                <h1 className="title">Новости</h1>
                <div className="Article__container">
                    {posts.map((post, index) => {
                        return <Vkpost key={index} target={"vkpostid" + post.id} name={post.name}/>
                    })}
                </div>
            </div>
        </Layout>
        <Footer/>
    </div>
}