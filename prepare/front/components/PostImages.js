import React,{useState,useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ImagesZoom from './ImagesZoom'
import Proptypes from 'prop-types'
import {Card} from 'react-bootstrap'
import styled from 'styled-components'
import { DELETE_POST_IMAGE_REQUEST } from '../reducers/post'
import { XSquare, XSquareFill } from 'react-bootstrap-icons'

// let SelectImage = styled(Card.Img)`
//             border : none;
//         `

const PostImages = ({images,header,postid}) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false);
    const [selectImage1,setSelectImage1] = useState(false);
    const [selectImage2,setSelectImage2] = useState(false);
    const dispatch = useDispatch();
    const {deletePostImageLoading} = useSelector(state => state.post)
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
   
    const onDeleteImage = useCallback(
    (imageid,postid) =>  () => {
        dispatch({
              type : DELETE_POST_IMAGE_REQUEST,
              data : {imageId : imageid,postId : postid,}
          })

        },
      [],
    )
    const handleDeleteImage = useCallback(
    (e) => {
        if( e.target.id === images[0].id.toString(10) && !selectImage1){
            e.target.style.border = '0.5rem solid red'
            setSelectImage1(prev => !prev)
        }else if(e.target.id === images[0].id.toString(10) && selectImage1){
            e.target.style.border = 'none'
            setSelectImage1(prev => !prev)
        }
        else if(e.target.id === images[1].id.toString(10) && !selectImage2){
            e.target.style.border = '0.5rem solid red'
            setSelectImage2(prev => !prev)
        }else if(e.target.id === images[1].id.toString(10) && selectImage2){
            e.target.style.border = 'none'
            setSelectImage2(prev => !prev)
        }
    }

      ,[selectImage1,selectImage2,images],

    )
    if(images.length === 1){
        return (
            <>
            { 
            header && 
            <>
                <Card.Img id ={images[0].id} onClick = {handleDeleteImage}  style={{width: "100%",}}  variant="top" alt={images[0].src} src={`http://localhost:3065/${images[0].src}`}  />
                {selectImage1 && <XSquareFill style={{position:'absolute', top:0, right:'0', fontSize: '28px', color: 'red',backgroundColor: 'black',cursor:'pointer'}} onClick={!deletePostImageLoading && onDeleteImage(images[0].id,postid)}>Delete</XSquareFill>}
            </>

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
                    <Card.Img id ={images[0].id} onClick = {handleDeleteImage}  style={{width: "50%",}}  variant="top" alt={images[0].src} src={`http://localhost:3065/${images[0].src}`}  />
                    <Card.Img id ={images[1].id}  onClick = {handleDeleteImage}  style={{width: "50%", }}  variant="top" alt={images[1].src} src={`http://localhost:3065/${images[1].src}`}  />
                    {selectImage1 &&<XSquareFill style={{position:'absolute', top:0, right:'50%', fontSize: '28px', color: 'red',backgroundColor: 'black',cursor:'pointer'}} onClick={!deletePostImageLoading && onDeleteImage(images[0].id,postid)}>Delete</XSquareFill>}
                    {selectImage2 && <XSquareFill style={{position:'absolute', top:0, right:0, fontSize: '28px', color: 'red',backgroundColor: 'black',cursor:'pointer'}} onClick={!deletePostImageLoading && onDeleteImage(images[1].id,postid)}>Delete</XSquareFill>}
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
            { 
            header && 
            <>
                <Card.Img id ={images[0].id} onClick = {handleDeleteImage}  style={{width: "100%",}}  variant="top" alt={images[0].src} src={`http://localhost:3065/${images[0].src}`}  />
                {selectImage1 && <XSquareFill style={{position:'absolute', top:0, right:'0', fontSize: '28px', color: 'red',backgroundColor: 'black',cursor:'pointer'}} onClick={!deletePostImageLoading && onDeleteImage(images[0].id,postid)}>Delete</XSquareFill>}
            </>

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
PostImages.propTypes = {
    postid : Proptypes.number.isRequired,
    images : Proptypes.arrayOf(Proptypes.object).isRequired,
    header : Proptypes.string.isRequired,

}
export default PostImages
