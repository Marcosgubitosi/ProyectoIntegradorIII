import React, {Component} from 'react';


class SearchForm extends Component{
    constructor(props){
        super(props);
        this.state = { 
            query:""
        }
    }
    handleCancelSubmit(e){
        e.preventDefault()
    }
    handleFormChange(e){
        this.setState({
            query: e.target.value
        })
    }

    handleFormSubmit(){
        this.props.history.push("/search", {query: this.state.query})
        console.log("se envio el form", this.state.query)
    }
   

    render(){
        return(
            <div className="row card-container">
              <form onSubmit={(e) => this.handleCancelSubmit(e)}>
               <input onChange={(e) => this.handleFormChange(e)} value={this.state.query} name='query'/>
               <button onClick={() => this.handleFormSubmit()} > Search </button>
              </form>
            </div>
        )
    }
}

export default SearchForm;