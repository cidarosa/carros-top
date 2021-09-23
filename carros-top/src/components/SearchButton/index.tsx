import './styles.css';

const SearchButton = () => {

    return (
        <div className="base-card search-card-container">

            <div className="input-search">
                <input type="text" id="txtSearch" name="txtSearch" placeholder="Digite sua busca" />
            </div>
            
            <div className="search-button">
                <button className="btn btn-primary" type="button">BUSCAR</button>
            </div>

        </div>

    );
}

export default SearchButton;