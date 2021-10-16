import React,{useState,useCallback} from 'react'
import ImagesZoom from './ImagesZoom'
import Proptypes from 'prop-types'
import {Card} from 'react-bootstrap'
import styled from 'styled-components'

// let SelectImage = styled(Card.Img)`
//             border : none;
//         `

const PostImages = ({images,header}) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false);
    const [select,setSelect] = useState(false);
    
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
    const onHandleImage = useCallback(
      (e) => {
        setSelect((prev) => !prev)
        if(select)
          e.target.style.border = 'none'
        else 
        e.target.style.border = '2px solid red'
      },
      [select],
    )
    if(images.length === 1){
        return (
            <>
            { 
            header && <Card.Img style={{width: "100%" }}  variant="top" alt={images[0].src} src={`http://localhost:3065/${images[0].src}`} onClick={onHandleImage} />
            }
            {!header &&  
            <>
            <Card.Img style={{width: "100%" }}  variant="top" alt={images[0].src} src={`http://localhost:3065/${images[0].src}`} onClick={onZoom} />
                 {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
            }
            </>
        )
    }
    if(images.length === 2){
        return (
            <>  
            {header && 
                <>
                <Card.Img style={{width: "50%" }}  variant="top" alt={images[0].src} src={`http://localhost:3065/${images[0].src}`} onClick={onHandleImage} />
                <Card.Img style={{width: "50%" }}  variant="top" alt={images[1].src} src={`http://localhost:3065/${images[1].src}`} onClick={onHandleImage} />
                </>
                }
            
            
            {!header &&  
                <>
                <Card.Img style={{width: "50%" }}  variant="top" alt={images[0].src} src={`http://localhost:3065/${images[0].src}`} onClick={onZoom}/>
                <Card.Img style={{width: "50%" }}  variant="top" alt={images[1].src} src={`http://localhost:3065/${images[1].src}`} onClick={onZoom}/>
                   {showImagesZoom &&  <ImagesZoom images={images} onClose={onClose} />}
                </>
            }
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
    header:Proptypes.string.isRequired,
}
export default PostImages
