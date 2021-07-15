import React,{useState,useCallback} from 'react'
import ImagesZoom from './ImagesZoom'
import Proptypes from 'prop-types'
import {Card} from 'react-bootstrap'
const PostImages = ({images}) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false)
    const onZoom = useCallback(
        (e) => {
            e.preventDefault();
            setShowImagesZoom(true)
        },
        [],
    )
    const onClose = useCallback(
        (e) => {
            e.preventDefault();
            setShowImagesZoom(false)
        },
        [],
    )
    if(images.length === 1){
        return (
            <>    
            <Card.Img style={{width: "100%" }}  variant="top" alt={images[0].src} src={`http://localhost:3065/${images[0].src}`} onClick={onZoom} />
            {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
        )
    }
    if(images.length === 2){
        return (
            <>  
            <Card.Img style={{width: "50%",  }}  variant="top" alt={images[0].src} src={`http://localhost:3065/${images[0].src}`} onClick={onZoom} />
            <Card.Img style={{width: "50%",  }}  variant="top" alt={images[1].src} src={`http://localhost:3065/${images[1].src}`} onClick={onZoom} />
            {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
        )
    }
    return (
        <>
            <Card.Img style={{width: "100%" }}  variant="top" alt={images[0].src} src={`http://localhost:3065/${images[0].src}`} onClick={onZoom} />
            {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
        </>
    )
}
PostImages.propTypes = {
    images:Proptypes.arrayOf(Proptypes.object),
}
export default PostImages
