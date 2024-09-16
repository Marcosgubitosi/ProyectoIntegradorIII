import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import NowPlaying from "./pages/NowPlaying";
import Upcoming from "./pages/Upcoming";
import Detalle from "./components/Detalle/Detalle"
import SearchResults from "./pages/SearchResults";
import PaginaNoEncontrada from "./pages/PaginaNoEncontrada";


function App() {
  return (
    <>
        <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/favoritos" component={Favoritos}/>
            <Route exact path="/nowplaying" component={NowPlaying}/>
            <Route exact path="/upcoming" component={Upcoming}/>
            <Route exact path="/pelicula/id/:id" component={Detalle}/>
            <Route exact path="/search" component={SearchResults}/>
            <Route path="" component={PaginaNoEncontrada}/>
          </Switch>
        <Footer/>
    </>
  );
}

export default App;
