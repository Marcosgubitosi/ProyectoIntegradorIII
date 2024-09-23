import './DetalleCard.css'

import React, {Component} from 'react'

class DetalleCard extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            fav: false
        }
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
        const { poster_path, title, vote_average, genres, release_date, runtime, overview, } = this.props.pelicula;
        return(
            <article  className='card-detalle'>
                <section className = 'detalle'>
                    <img src= {`https://image.tmdb.org/t/p/original${poster_path}`} alt="" />
                </section>
                <section className = 'detalle'>
                    <h4> {title} </h4> 
                    <ul>
                        <li>Rating: {vote_average}</li>
                        <li>Fecha de estreno: {release_date}</li>
                        <li>Duracion: {runtime}</li>
                        {genres.length > 0 ? (<li>Generos:</li>):(<li>Genero:</li>)}
                        <ul> 
                            {genres && genres.length > 0 ? (genres.map((genre, idx) => <li key={idx}>{genre.name}</li>)):(<li>No hay generos disponibles</li>)}
                        </ul>                        
                    </ul>
                    <p>{overview}</p> 
                    <button className = "more" onClick={()=> !this.state.fav ? this.agregarFav() : this.quitarFav()  }>
                    
                    {this.state.fav ? "Quitar de favoritos" : "Agregar a favoritos"}</button>   
                </section>
                
            </article>
         
        );
    }

}

export default DetalleCard