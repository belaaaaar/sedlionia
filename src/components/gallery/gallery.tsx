import React, {useEffect, useState} from "react";
import {Menu} from "../../components/menu/menu";

import './gallery.scss';
import {ModalForGallery} from "../../components/modalforgallery/modalforgallery";
import {Footer} from "../../components/footer/footer";
import {Layout} from "../layout/layout";

type ImagesResponse = {
    Images: Array<{
        url: string
    }>
};

interface GalleryProps {
    url: string
}

export const GalleryComponent = ({url}: GalleryProps) => {
    const [gallery, setGallery] = useState<ImagesResponse["Images"]>([]);
    const [imgId, setImgId] = useState(0);
    const [modal, setModal] = useState(false);
    const onClose = () => setModal(false)

    const onRight = () => {
        if (imgId < gallery.length - 1) {
            setImgId((id) => {
                return ++id;
            });
        } else {
            setImgId((id) => {
                return 0;
            });
        }

    }

    const onLeft = () => {
        if (imgId > 0) {
            setImgId((id) => {
                return --id;
            });
        } else {
            setImgId((id) => {
                return gallery.length -1;
            });
        }
    }

    useEffect(() => {
        fetch(url)
            .then((response) => {
                return response.json() as Promise<ImagesResponse>;
            })
            .then((data) => {
                setGallery(data.Images);
            });
    }, [])

    return <>
        <ModalForGallery onClose={onClose} onRight={onRight} onLeft={onLeft} content={gallery[imgId]?.url || ""}
                         visible={modal}/>
        <Menu/>
        <Layout>
            <div className="gallery">
                <div className="gallery__background">
                    {gallery.map((link, index) => {
                        return <div key={index} className="gallery__block" onClick={() => {
                            setImgId(index)
                            setModal(true)
                        }}>
                            <img className="gallery__img" src={link.url} alt=""/>
                        </div>
                    })}
                </div>
            </div>
        </Layout>
        <Footer/>
    </>
}