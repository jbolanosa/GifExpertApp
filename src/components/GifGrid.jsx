import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { getGifs } from "../helpers/getGifs";


export const GifGrid = ({category}) => {
    const [images, setimages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setimages(newImages);
    }

    useEffect( () => {
        getImages();
    }, [ ])

    return (
        <>
            <h3>{category}</h3>
            
            <div className="card-grid">
                {images.map((image) => (
                    //<li key={id}>{title}</li>
                    <GifItem key={image.id} { ...image}/>
                ))}
            </div>
        </>
    )
}
