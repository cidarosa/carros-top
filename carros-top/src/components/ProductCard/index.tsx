import './styles.css';

import ProductImg from 'assets/images/car-car.png';

const ProductCard = () => {

    return (

        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={ProductImg} alt="Nome do Carro"/>
            </div>
        </div>


    );
}

export default ProductCard;