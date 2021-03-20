import React, {useState} from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'
import CustomSearch from '../CustomSearch'
const NavBar = ({breeds}) => {
    const [search, setsearch] = useState(false)
    const handleClick=(e)=>{
        setsearch((prevSearch)=>!prevSearch)
    }
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Dog-Gallery</Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>           
            <Button variant="info" onClick={handleClick}>Custom Search</Button>
        </Navbar> 
        <CustomSearch breeds={breeds} show={search} close={handleClick}/>
        </>
    )
}

export default NavBar
