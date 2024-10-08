import React, {Component} from 'react';
import MoviesGridCard from '../components/MoviesGridCard/MoviesGridCard';


class SearchResults extends Component{
    constructor(props){
        super(props);
        console.log(props);
        
        this.state = { 
            movies : [],
            isLoading: true
        }
    }
    componentDidMount(){
        this.setState({
            isLoading: true
        })
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=9458a99baf5a9ba3fe341cd43217ef95`)
        .then((response)=> response.json())
        .then((data) => {
            this.setState( {movies : data.results , isLoading : false})
        })
        .catch((e) => console.log(e))
    }
   
    render(){
        return(
            <div>  
                <h1> Resultados de busqueda</h1>
                <article className='container'>
                    {this.state.movies.length === 0 ? (
                    <h2>No hay resultados para: "{this.props.location.state.query}"</h2>):(this.state.isLoading === true ? (
                        <h3>Cargando...</h3>
                    ): (this.state.movies.map((pelicula, idx) => (
                        <MoviesGridCard key={idx}  pelicula = {pelicula} /> ))))}

                </article> 
            </div>
        )
    }
}

export default SearchResults;