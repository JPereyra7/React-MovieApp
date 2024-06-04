import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import logocinema from '../assets/logocinema.svg'

library.add(faPlay, faCircleInfo);

const Header = () => {


    return (
    <>
    <div className="backgroundImage">
     <div className="navbarContainer">
        <img className="logo" src={logocinema} alt="" />
        <ul className="listContainer">
            <li className='menuLinks'>Hem</li>
            <li className='menuLinks'>Serier</li>
            <li className='menuLinks'>Filmer</li>
            <li className='menuLinks'>Nytt & Populärt</li>
            <li className='menuLinks'>Min Lista</li>
            <li className='menuLinks'>Bläddra efter språk</li>
        </ul>
     </div>
     <div className="billBoardContainer">
        <img className="billboardTitle" src="/src/assets/billboardtitle.webp" alt="" />
        <p className="billBoardParagraphOne">#10 bland filmer idag</p>
        <p className="billBoardDescription">Flocken får det hett om öronen när Scrat hamnar i rymden och råkar utlösa en kosmisk händelse som försätter hela jorden i fara.</p>

        <div className="buttonContainer">
            <button className="playButton">
            <FontAwesomeIcon icon={faPlay} /> Spela upp</button>
            <button className="moreInfoButton">
              <FontAwesomeIcon icon="circle-info" style={{ color: "#ffffff" }} /> Mer info
            </button>
        </div>

        <h2 className="popularTitle">Populärt just nu</h2>
        </div>
     </div>
    </>
  )
}

export default Header