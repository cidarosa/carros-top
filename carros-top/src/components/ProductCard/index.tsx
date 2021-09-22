import './styles.css';

import ProductImg from 'assets/images/car-card.png';
import ProductDescription from 'components/ProductDescription';

const ProductCard = () => {

    return (

        <div className="base-card product-card" >
            <div className="card-top-container">
                <img src={ProductImg} alt="Nome do Carro" />
            </div>

            <div className="card-bottom-container">
                <ProductDescription />
                <button className="btn btn-primary" type="button">COMPRAR</button>
            </div>           
        </div>
    );
}

export default ProductCard;