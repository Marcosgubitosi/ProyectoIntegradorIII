import React, {Component} from 'react'
import MoviesGridCard from '../components/MoviesGridCard/MoviesGridCard';
import MoviesGrid from '../components/MoviesGrid/MoviesGrid';

class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state = { peliculas: []}
        
    }
   
componentDidMount(){
    const storage = localStorage.getItem("favoritos")
    if (storage !== null){
        const parsedStorage = JSON.parse(storage)
        Promise.all(
            parsedStorage.map( (id) => fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9458a99baf5a9ba3fe341cd43217ef95`)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                peliculas: [...this.state.peliculas, data]
            })
        })
         )
        )
    }
}
    
    render() { 
        console.log(this.state.peliculas);
        return (
          <>
          <h1>Favoritos</h1>
          {this.state.peliculas.map((pelicula, idx) => (
            <MoviesGridCard key={idx}  pelicula = {pelicula} /> ))}
          </>
        );
      }
      
}

export default Favoritos