import MoviesGrid from '../components/MoviesGrid/MoviesGrid';
import { Link } from 'react-router-dom'
import { Component } from 'react';
import SearchForm from '../components/SearchForm/SearchForm';

class Home extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <>
            <h1>Home</h1>
            <SearchForm history={this.props.history}/>
            <section>
                <MoviesGrid url = {'https://api.themoviedb.org/3/movie/now_playing?api_key=31e421d77201e7a1eefe33f85b67fa3b'} title = {'Now Playing'} limit = {5} />
                <button><Link to="/nowplaying" className="link">Ver Todas</Link></button>
            </section>
            <section>
                <MoviesGrid url = {'https://api.themoviedb.org/3/movie/upcoming?api_key=31e421d77201e7a1eefe33f85b67fa3b'} title = {'Upcoming'} limit = {5}/>
                <button><Link to="/upcoming" className="link">Ver Todas</Link></button>
                <br></br>
                <br></br>
            </section>
        </>

    )
    }}
export default Home;