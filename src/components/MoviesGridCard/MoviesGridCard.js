import './MoviesGridCard.css'

import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class MoviesGridCard extends Component {
    constructor(props){
        super(props)
        // console.log(this.props.pelicula);
        this.state = {verDesc: false, fav: false}
    }
    handleverDesc(){
        this.setState({
            verDesc: !this.state.verDesc
          })
    }

    componentDidMount(){
        const storage = localStorage.getItem("favoritos")
        if ( storage !== null){
            const parsedStorage = JSON.parse(storage)
            const estaFav = parsedStorage.includes(this.props.pelicula.id)
            if(estaFav){
                this.setState({fav: true})
            }
        }
    }

    agregarFav(){
        const storage = localStorage.getItem("favoritos")
        if ( storage !== null){
            const parsedStorage = JSON.parse(storage);
            parsedStorage.push(this.props.pelicula.id)
            const stringStorage = JSON.stringify(parsedStorage)
            localStorage.setItem("favoritos", stringStorage)
        } else{
            const primerFavorito = [this.props.pelicula.id]
            const stringStorage = JSON.stringify(primerFavorito)
            localStorage.setItem("favoritos", stringStorage)
        }
        this.setState({fav: true})
    }
    quitarFav(){
        const storage = localStorage.getItem("favoritos")
        const parsedStorage = JSON.parse(storage);
        const restoFavoritos = parsedStorage.filter((id) => id !== this.props.pelicula.id)
        const stringStorage = JSON.stringify(restoFavoritos)
        localStorage.setItem("favoritos", stringStorage)
        this.setState({fav: false})
    }
    render(){
        console.log(this.props);
            
        const { poster_path, title, overview, id } = this.props.pelicula;
        return(
            <article  className='card'>
                    <img src= {`https://image.tmdb.org/t/p/original${poster_path}`} alt="" />
                    <h4> {title} </h4> 
                    <br></br>
                    <button className = "more" onClick={()=> !this.state.fav ? this.agregarFav() : this.quitarFav()  }>
                        
                        {this.state.fav ? "Quitar de favoritos" : "Agregar a favoritos"}</button>
                    <p className = "more"><Link to= {`/pelicula/id/${id}`} className="link">Ir a detalle</Link></p>
                    <article className={ this.state.verDesc ? "show" : "hide" }>
                        <p>{overview}</p> 
                    </article>
                    <p className = "more" onClick={()=> this.handleverDesc()}>{this.state.verDesc ? "Ocultar Descripcion" : "Ver Descripcion"}</p>
            </article>
         
        );
    }

}

export default MoviesGridCard