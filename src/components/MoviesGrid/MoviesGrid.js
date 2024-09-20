import React, {Component} from 'react'
import MoviesGridCard from '../MoviesGridCard/MoviesGridCard'
import "./MoviesGrid.css"
import Filtrado from '../Filtrado/Filtrado'


class MoviesGrid extends Component {
    constructor(props){
        super(props)
        this.state = { datos: [], pelisMostradas: 5, pelisFiltradas: []}
        // console.log(props.url);
        
    }
    componentDidMount (){
        // console.log(this.props.url);
          fetch(this.props.url)
            .then(response => response.json())
            .then(data => this.setState({datos: data.results}))
            .catch(err => console.error(err));
    }
    HandleCargarMas(){
      this.setState({pelisMostradas: this.state.pelisMostradas + 5})
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
      const pelis = this.state.datos.slice(0,this.state.pelisMostradas)
      const pelisFilt = this.state.pelisFiltradas.slice(0,this.state.pelisMostradas)
      const limit = (this.props.limit) ? this.props.limit : this.state.datos.length;
      //console.log(this.state.pelisFiltradas)
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
              
              {this.state.pelisMostradas < limit ? ( <button onClick={() => this.HandleCargarMas() }>Cargar +</button>): (<p></p>)}
              </ul>
            </section>
          </>
        );
      }
      
}

export default MoviesGrid