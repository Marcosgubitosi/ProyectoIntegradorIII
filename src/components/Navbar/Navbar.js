import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar= () => {
   
    return (
        <section className = "navbar">
            <ul className='logo-nav'>
            <img className="logo" src='./img/png-logo-proyectoprograIII.png' alt=''></img>
            <h1>HAPPY MOVIES :)</h1>
            </ul>
            
            <ul className="main-nav">
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="/nowplaying" className="link">Now Playing</Link></li>
                <li><Link to="/upcoming" className="link">Upcoming</Link></li>
                <li><Link to="/favoritos" className="link">Favoritos</Link></li>
            </ul>
        </section>
    )
}

export default Navbar