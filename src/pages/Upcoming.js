import MoviesGrid from '../components/MoviesGrid/MoviesGrid';

const Upcoming = ()=>{
    return(
        <>
            <section>
                <MoviesGrid url = {'https://api.themoviedb.org/3/movie/upcoming?api_key=31e421d77201e7a1eefe33f85b67fa3b&page='} title = {'Upcoming'} />
            </section>
        </>

    )
}
export default Upcoming;