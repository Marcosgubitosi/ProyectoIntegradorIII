import React, {Component} from 'react'
import MoviesGridCard from '../MoviesGridCard/MoviesGridCard'
import "./MoviesGrid.css"
import Filtrado from '../Filtrado/Filtrado'


class MoviesGrid extends Component {
    constructor(props){
        super(props)
        this.state = { datos: [], pelisFiltradas: [], page: 1,  isLoading: true}
        console.log(props);
        
    }
    componentDidMount (){
        // console.log(`${this.props.url}${this.state.page}`);
        this.setState({
          isLoading: true
        })
          fetch(`${this.props.url}${this.state.page}`)
            .then(response => response.json())
            .then(data => this.setState({datos: data.results, pelisFiltradas: data.results, isLoading : false}))
            .catch(err => console.error(err));
    }
    HandleCargarMas(){ 
      fetch(`${this.props.url}${this.state.page + 1}`)
      .then(response => response.json())
      .then((data) => this.setState({datos: this.state.datos.concat(data.results), page: this.state.page + 1}))      
      
    }
    filtrarPeliculas(nombre){
      const pelFiltradas = this.state.pelisFiltradas.filter(
        (e) => e.title.toLowerCase().includes(nombre.toLowerCase())
      )
      this.setState({
        datos: pelFiltradas
      })
    }
    render() { 
      const pelis = this.state.datos.slice(0,this.props.limit)
      const pelisFilt = this.state.pelisFiltradas.slice(0,this.props.limit)
      //console.log(this.state.pelisFiltradas)
      console.log(pelis);
      
        return (
          <>
            <section className='main'>
                <h2>{this.props.title}</h2>
                <Filtrado filtrarPeliculas={(nom) => this.filtrarPeliculas(nom)}/>
                <ul className='container'>
              {this.state.isLoading ? (
                  <h3>Cargando...</h3>
              ):(this.state.datos.length === 0 ? (
                <h3> No hay peliculas con ese filtro</h3>
              ) : 
              (this.state.datos.slice(0,5).map((pelicula,idx) => (
                <MoviesGridCard key={idx} pelicula={pelicula}/>)
              ))) }
              
             
              
              {this.props.limit !== 5 ? ( <button onClick={() => this.HandleCargarMas() }>Cargar +</button>): (<p></p>)}
              </ul>
            </section>
          </>
        );
      }
      
}

export default MoviesGrid