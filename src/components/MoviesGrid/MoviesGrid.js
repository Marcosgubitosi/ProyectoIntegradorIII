import React, {Component} from 'react'
import MoviesGridCard from '../MoviesGridCard/MoviesGridCard'
import "./MoviesGrid.css"
import Filtrado from '../Filtrado/Filtrado'


class MoviesGrid extends Component {
    constructor(props){
        super(props)
        this.state = { datos: [], pelisFiltradas: [], page: 1}
        console.log(props);
        
    }
    componentDidMount (){
        // console.log(`${this.props.url}${this.state.page}`);
          fetch(`${this.props.url}${this.state.page}`)
            .then(response => response.json())
            .then(data => this.setState({datos: data.results}))
            .catch(err => console.error(err));
    }
    HandleCargarMas(){ 
      fetch(`${this.props.url}${this.state.page + 1}`)
      .then(response => response.json())
      .then((data) => this.setState({datos: this.state.datos.concat(data.results), page: this.state.page + 1}))      
      
    }
    filtrarPeliculas(nombre){
      const pelFiltradas = this.state.datos.filter(
        (elemento) => elemento.title.toLowerCase().includes(nombre.toLowerCase())
      )
      this.setState({
        pelisFiltradas: pelFiltradas
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
                <Filtrado filtrarPeliculas={(nom) => this.filtrarPeliculas(nom)} history={this.props.history}/>
                <ul className='container'>
              {this.state.datos.length === 0 ? (
                <h3>Cargando...</h3>
              ) : (this.state.pelisFiltradas.length === 0 ? (
                  pelis.map((pelicula, idx) => (
                    <MoviesGridCard key={idx} pelicula={pelicula}/>
                  ))
                ) : (pelisFilt.map((pelicula, idx) => (
                  <MoviesGridCard key={idx} pelicula={pelicula}/>
                )))
              )}
              
              {this.props.limit !== 5 ? ( <button onClick={() => this.HandleCargarMas() }>Cargar +</button>): (<p></p>)}
              </ul>
            </section>
          </>
        );
      }
      
}

export default MoviesGrid