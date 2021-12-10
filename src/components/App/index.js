// import packages

// Route : endpoints to make navigation easier
// Switch : renders the first component matching the route name
import { Switch, Route } from 'react-router';

// runs side effects when a component is loading
// ex: calling an API
import { useEffect } from 'react';

// allows to validate the type of prop
// requires the prop
import PropTypes from 'prop-types';

// import CSS
import '../../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

// import visual components
import Header from 'src/containers/Header';
import Home from 'src/containers/Home';
import ArtistsList from 'src/containers/ArtistsList';
import SingleArtist from 'src/containers/SingleArtist';
import Contact from 'src/containers/Contact';
import Artworks from 'src/containers/Artworks';
import SingleArtwork from 'src/containers/SingleArtwork';
import EventsList from 'src/containers/EventsList';
import SingleEvent from 'src/containers/SingleEvent';
import LegalNotice from 'src/components/LegalNotice';
import Info from 'src/components/Info';
import Footer from 'src/components/Footer';
import NotFound from 'src/components/NotFound';

// main component
const App = (props) => {
  useEffect(() => {
    // loading global datas before rendering
    // allows the loader to do its job
    props.loadGlobalData();
  }, []);

  return (

    <div className="app">
      <Header />

      <div className="main">

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/artistes" exact>
            <ArtistsList />
          </Route>

          <Route path="/artistes/:slug" exact>
            <SingleArtist />
          </Route>

          <Route path="/contact" exact>
            <Contact />
          </Route>

          <Route path="/œuvres" exact>
            <Artworks />
          </Route>
          <Route path="/œuvres/categorie/:slug" exact component={Artworks} />
          <Route path="/œuvres/:slug" exact>
            <SingleArtwork />
          </Route>
          <Route path="/evenements" exact>
            <EventsList />
          </Route>

          <Route path="/evenements/:slug" exact>
            <SingleEvent />
          </Route>
          <Route path="/myas-gallery" exact>
            <Info />
          </Route>
          <Route path="/mentions-legales" exact>
            <LegalNotice />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>

      <Footer />
    </div>

  );
};

// checks if loadGlobalData is defined and checks if it's a function
App.propTypes = {
  loadGlobalData: PropTypes.func.isRequired,
};

// export component
export default App;
