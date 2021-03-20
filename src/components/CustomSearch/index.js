import React, {useState, useRef} from 'react'
import {Button, Modal, Row, Col} from 'react-bootstrap'
import BreedImage from '../BreedImage'

function CustomSearch({breeds, show, close}) {
  const totalImg=useRef()
  const breedOption=useRef()
  const [renderImages, setrenderImages] = useState(false)
  const [breedName, setbreedName] =useState("")
  const [numOfImg, setnumOfImg] =useState(1)

  const handleClose=()=>{
    setrenderImages(false);
    close();
  }
  const handleGetImage=(e)=>{
    setrenderImages(false);
    const numOfImg=totalImg.current.value;
    const breedSelected=breedOption.current.value;
    if(breedSelected==="#")
      return;
    if(breedSelected){
      setbreedName(breedSelected)
    } 
    if(numOfImg){
      setnumOfImg(numOfImg)
    }     
    setrenderImages(true);     
  }
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Custom Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row >
            <Col lg="6">
            <select ref={breedOption} style={{width:"80%"}}>
              <option value="#">Select a Breed</option>
              {Object.entries(breeds)
               .map((breed, i) =><option key={breed[0]} value={breed[0]}>{capitalize(breed[0])}</option>)}              
            </select>
            </Col>
            <Col lg="6">
            <input ref={totalImg} type="number" style={{width:"80%"}} placeholder="Number of Images" min="1" defaultValue={numOfImg}/>
            </Col>
          </Row>
          <div className="text-center mt-3">
            <Button variant="success" onClick={handleGetImage}>Get Images</Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
           {renderImages&&           
           (<> 
              <Row className="text-center text-capitalize col-12">
                <h5>Showing {numOfImg} images of {breedName}</h5>
              </Row>
              <br/>
              <Row className="justify-content-md-center text-center m-auto p-auto">
                <BreedImage breedName={breedName} numOfImg={numOfImg}/>
              </Row>
           </>)
           }
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomSearch
