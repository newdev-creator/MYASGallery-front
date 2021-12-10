// page 404
// == Import
import './notFound.scss';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="notfound">
    <h2 title="404...">404...</h2>
    <p>

      <Link to="/">clique pour revenir à l'accueil...</Link>
    </p>
  </div>
);

export default NotFound;
