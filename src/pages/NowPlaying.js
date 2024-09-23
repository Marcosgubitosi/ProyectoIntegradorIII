import MoviesGrid from '../components/MoviesGrid/MoviesGrid';
import { Component } from 'react';

class NowPlaying extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <MoviesGrid url = {`https://api.themoviedb.org/3/movie/now_playing?api_key=31e421d77201e7a1eefe33f85b67fa3b&page=`} title = {'Now Playing'} />
        )

    }

}

// const NowPlaying = ()=>{

//     return(
//         <>
//             <section>
//                 <MoviesGrid url = {`https://api.themoviedb.org/3/movie/now_playing?api_key=31e421d77201e7a1eefe33f85b67fa3b&page=${num}`} title = {'Now Playing'}/>
//             </section>
//         </>

//     )
// }
export default NowPlaying;