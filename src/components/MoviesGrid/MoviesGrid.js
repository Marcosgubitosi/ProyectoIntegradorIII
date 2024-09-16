import React, {Component} from 'react'
import MoviesGridCard from '../MoviesGridCard/MoviesGridCard'
import "./MoviesGrid.css"


class MoviesGrid extends Component {
    constructor(props){
        super(props)
        this.state = { datos: []}
        // console.log(props.url);
        
    }
    componentDidMount (){
        // console.log(this.props.url);
          fetch(this.props.url)
            .then(response => response.json())
            .then(data => this.setState({datos: data.results}))
            .catch(err => console.error(err));

    }
    render() { 

        return (
          <>
            <section>
                <h2>{this.props.title}</h2>
                <ul className='container'>
              {this.state.datos.length === 0 ? (
                <h3>Cargando...</h3>
              ) : (
                this.state.datos.slice(0,this.props.limit).map((pelicula, idx) => (
                  <MoviesGridCard key={idx} pelicula={pelicula}/>
                ))
              )}
              </ul>
            </section>
          </>
        );
      }
      
}

export default MoviesGrid