import React, {useState} from 'react'
import SubBreed from '../SubBreed'
import CardTemplate from '../CardTemplate';
const BreedCard = ({breed, subBreed}) => {
    const breedName=breed;
    const [showSubBreed, setshowSubBreed] = useState(false)
    
    const handleSubBreedModalClick=(e)=>{
        setshowSubBreed(prev=>!prev);
    }
    const handleClick=(e)=>{
        setshowSubBreed(prev=>!prev);
    }
    const handleShowSubBreed=()=>{
        return showSubBreed&& <SubBreed breed={breed} subBreed={subBreed} show={showSubBreed} close={handleSubBreedModalClick}/>;
    }
    const styles={ width: '11rem', margin: '5px' };
    return (
        <> 
        <div onClick={handleClick}>
            <CardTemplate styles={styles} breedName={breedName}/>
        </div>       
        {handleShowSubBreed()}
        </>
    )
}
export default BreedCard
