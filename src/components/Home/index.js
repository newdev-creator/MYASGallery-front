import './home.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loader from 'src/components/Loader';
import Carousel from 'src/containers/Carousel';
import CarouselArtwork from 'src/containers/CarouselArtwork';
import PickingImg from 'src/containers/PickingImg';
import { useEffect } from 'react';

const Home = (props) => {
  const { loading } = props;

  useEffect(() => {
    props.loadData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="home-page">
      <h1 className="title-name">
        Make your art shine
      </h1>
      <Link to="/myas-gallery">
        <p className="bio-gallery">
          Une galerie d'art qui diffuse des œuvres à tous.<br />
          Amateurs d'art, collectionneurs, artistes, notre philosophie,
          vous rassembler dans divers lieux éphémères.
          MYAS Gallery représente des artistes contemporains avec des styles
          et des personnalités fortes, également présent pour
          les artistes émergeants
          afin de faire découvrir leurs œuvres à des passionnés.<br />
          &rarr;
        </p>
      </Link>
      <Carousel />
      <PickingImg />
      <CarouselArtwork />
    </div>
  );
};

Home.propTypes = {
  loading: PropTypes.bool,
  loadData: PropTypes.func.isRequired,
};

Home.defaultProps = {
  loading: false,
};

export default Home;
