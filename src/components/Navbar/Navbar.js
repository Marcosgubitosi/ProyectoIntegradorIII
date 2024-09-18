import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar= () => {
   
    return (
        <>
            <img className="logo" src='./img/png-logo-proyectoprograIII.png' alt=''></img>
            <ul className="main-nav">
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="/nowplaying" className="link">Now Playing</Link></li>
                <li><Link to="/upcoming" className="link">Upcoming</Link></li>
                <li><Link to="/favoritos" className="link">Favoritos</Link></li>
            </ul>
        </>
    )
}

export default Navbar