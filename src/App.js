import {useState, useEffect, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import BreedCard from './components/BreedCard'

import {Container, Row} from 'react-bootstrap'

function App() {
  const [breeds, setbreeds] = useState([])
  const [searchFilter, setsearchFilter] = useState("")
  const searchRef=useRef()
  useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(res=>{setbreeds(res.message)})
  },
  []);
  const handleSearchFilter=(e)=>{
    const val=searchRef.current.value;
    setsearchFilter(val);
  }
  
  return (
    <>  
    <NavBar breeds={breeds}/>
    <Container>   
      <br/>
      <Row xs lg="3" sm="12" className="justify-content-md-center">        
          <input className="col-sm-12"  onChange={handleSearchFilter} ref={searchRef} type="text" placeholder="Type here to filter by breed"/>        
      </Row>
      <br/>
      <Row xs lg="6" sm="12" className="justify-content-md-center m-auto p-auto">
         {Object.entries(breeds)
         .filter((breed,i)=>breed[0].includes(searchFilter.toLocaleLowerCase()))
         .map((breed, i) =><BreedCard key={breed} breed={breed[0]} subBreed={breed[1]}/>)}
      </Row>
    </Container>
    </>
  );
}

export default App;
