import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import NowPlaying from "./pages/NowPlaying";


function App() {
  return (
    <>
        <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/favoritos" component={Favoritos}/>
            <Route exact path="/nowplaying" component={NowPlaying}/>
          </Switch>
        <Footer/>
    </>
  );
}

export default App;
