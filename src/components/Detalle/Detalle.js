import React, {Component} from 'react'
import DetalleCard from "../DetalleCard/DetalleCard"

class Detalle extends Component {
    constructor(props){
        super(props)
        this.state = { peli: null }
    }
    componentDidMount (){
  
          const id = this.props.match.params.id
          
          fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=31e421d77201e7a1eefe33f85b67fa3b`)
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