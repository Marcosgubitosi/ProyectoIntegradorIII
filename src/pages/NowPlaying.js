import MoviesGrid from '../components/MoviesGrid/MoviesGrid';

const NowPlaying = ()=>{
    return(
        <>
            <section>
                <MoviesGrid url = {'https://api.themoviedb.org/3/movie/now_playing?api_key=31e421d77201e7a1eefe33f85b67fa3b'} title = {'Now Playing'}/>
            </section>
        </>

    )
}
export default NowPlaying;