import {useState, useEffect} from 'react'
import {Card} from 'react-bootstrap'


const CardTemplate = (props) => {
    const [img, setImg] = useState([])
    let breedName=props.breedName;
    let dataString=breedName;
    
    if(props.subBreedName){
        breedName=props.subBreedName;
        dataString+=`/${breedName}`;
    }
         
    useEffect(()=>{
        fetch(`https://dog.ceo/api/breed/${dataString}/images/random`)
        .then(response => response.json())
        .then(res=>{
            setImg(res.message);
        })
    },[props.breedName])
    return (
        <>
            <Card style={props.styles} >
            <Card.Img variant="top" alt={breedName} src={!img?"#":img} style={{width:'auto', height:'6.5rem'}} />
            <Card.Body>
                <Card.Text style={{fontSize:'.8rem'}} className="text-center text-capitalize font-weight-bold">
                    {breedName}
                </Card.Text>
            </Card.Body>
            </Card>
        </>
    )
}

export default CardTemplate
