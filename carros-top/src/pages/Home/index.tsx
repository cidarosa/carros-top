import { ReactComponent as MainImage } from 'assets/images/car-header.svg';
import './styles.css';
import ButtonIcon from 'components/ButtonIcon';

import Navbar from "components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">

          <div className="home-content-container">
            
            <MainImage />

            <h1>O carro perfeito para você</h1>
            <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
          </div>

          <div className="home-card-button">
            <ButtonIcon />
            <p>Comece agora a navegar</p>
          </div>

        </div>
      </div>

    </>
  );
}

export default Home;