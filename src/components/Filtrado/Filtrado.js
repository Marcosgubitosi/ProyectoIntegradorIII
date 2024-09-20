import React, {Component} from 'react';


class Filtrado extends Component{
    constructor(props){
        super(props);
        this.state = { 
            filterValue:""
        }
    }
    handleCancelSubmit(e){
        e.preventDefault()
    }
    handleFormChange(e){
        this.setState({
            filterValue: e.target.value
        }, () => this.props.filtrarPeliculas(this.state.filterValue))
    }
   

    render(){
        return(
            <div className="fcontainer">
              <form className = "search" onSubmit={(e) => this.handleCancelSubmit(e)}>
               <input className = "isearch" onChange={(e) => this.handleFormChange(e)} value={this.state.filterValue} name='filterValue'/>
               <button className = "bsearch" type='submit'> Filtrar </button>
              </form>
            </div>
        )
    }
}

export default Filtrado;