import React from 'react'
import { Modal, Row} from 'react-bootstrap'
import CardTemplate from '../CardTemplate';
import BreedImage from '../BreedImage'
const SubBreed = ({breed, subBreed, show, close}) => {
    const styles={ width: '7rem', height:'10rem', margin: '2px' };
    const renderSubreed=()=>{
        if(subBreed){
            return (
                <>
                <Row className="text-center text-capitalize col-12">
                    <h5>Sub Breeds</h5>
                </Row>
                <Row className="text-center m-auto p-auto">
                    {subBreed.length!==0?
                    subBreed.map((subBreedName, index)=><CardTemplate styles={styles} key={index} breedName={breed} subBreedName={subBreedName}/>)
                    :<h6 className="text-center text-capitalize col-12">No Data Available</h6>
                    }
                </Row>
                <Row className="text-center text-capitalize col-12">
                    <h5>More Images</h5>
                </Row>
                <Row className="text-center m-auto p-auto">
                    <BreedImage breedName={breed} numOfImg={4}/>
                </Row>
                </>
            )
        }else{
            return <h5>No Sub Breeds Data Availabe</h5>
        }
    }
    return (
        <>
        <Modal show={show} onHide={close}>
          <Modal.Header closeButton>
            <Modal.Title className="text-capitalize">{` Dog Breed Name ${breed}`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {renderSubreed()}            
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default SubBreed
