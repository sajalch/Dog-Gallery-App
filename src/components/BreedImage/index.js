import React, {useState, useEffect} from 'react'
import {Card} from 'react-bootstrap'

const BreedImage = ({breedName,numOfImg}) => {
    const [images, setimages] = useState([])
    
        useEffect(()=>{
            fetch(`https://dog.ceo/api/breed/${breedName}/images/random/${numOfImg}`)
            .then(response => response.json())
            .then(res=>{setimages(res.message)})    
        },[breedName,numOfImg])
    
    return (
        <>
        {
        images.map((image, index)=>
        <Card key={index} style={{ width: '6rem', margin: '2px' }}>
           <Card.Img variant="top" alt={breedName} src={image} style={{width:'auto', height:'5rem'}} />
        </Card>
        )}
        </>
    )
}

export default BreedImage
