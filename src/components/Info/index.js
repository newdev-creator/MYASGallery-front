// import
import './Info.scss';

import julien from './julien.jpeg';
import benoit from './benoit.jpeg';
import morgane from './morgane.png';
import thomas from './thomas.jpeg';
import loris from './loris.jpg';
import murielle from './murielle.jpg';

const Info = () => (
  <div className="info">
    <h1>L'équipe</h1>
    <div className="owner">
      <img src={murielle} alt="murielle" />
      <span className="name">Muriel Léorat Cassard</span>
      <span className="role">Galeriste</span>
    </div>
    <div className="members">
      <div className="member">
        <img src={morgane} alt="morgane" />
        <div className="name">
          <span id="morgane">Morgane Tressens</span>
        </div>
        <span className="role">Product Owner</span>
      </div>
      <div className="member">
        <img src={julien} alt="julien" />
        <div className="name">
          <span id="julien">Julien Freisa</span>
        </div>
        <span className="role">Git Master</span>
      </div>
      <div className="member">
        <img src={thomas} alt="thomas" />
        <div className="name">
          <span id="thomas">Thomas Biendicho</span>
        </div>
        <span className="role">Lead Dev Back</span>
      </div>
      <div className="member">
        <img src={benoit} alt="benoit" />
        <div className="name">
          <span id="benoit">Benoit Malherbe</span>
        </div>
        <span className="role">Scrum Master</span>
      </div>
      <div className="member">
        <img src={loris} alt="loris" />
        <div className="name">
          <span id="loris">Loris Job</span>
        </div>
        <span className="role">Lead Dev Front</span>
      </div>
    </div>
  </div>
);

export default Info;
