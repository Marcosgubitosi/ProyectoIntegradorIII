import React, {Component} from 'react'
import DetalleCard from "../DetalleCard/DetalleCard"

class Detalle extends Component {
    constructor(props){
        super(props)
        this.state = { peli: null }
    }
    componentDidMount (){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGYxNjk2MDJhNDhmNDNlZmM5NWRlOTBmNWIzMjk5MSIsIm5iZiI6MTcyNjQxMzcyNy4xNzk5NTgsInN1YiI6IjY2ZTZmOTY1ZDdiY2NhNTI0ZGIwOWM1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d6Ow_K_PM0RM2Vt-KN6IdqY_PgrstVijF790b4o8L4c'
            }
          };
          const id = this.props.match.params.id
          
          fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
            .then(response => response.json())
            .then(data => this.setState({peli: data}))
            .catch(err => console.error(err));

    }
    render() {
        
        return (
          <section>
            {this.state.peli === null ? (
              <h3>Cargando...</h3>
            ) : (
                <DetalleCard pelicula = {this.state.peli} />
              )}
          </section>
        );
      }
      
}

export default Detalle