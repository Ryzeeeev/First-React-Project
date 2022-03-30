import React from 'react';

const Card = ({country}) => {


    return(
        <li className="card">
            <img src={country.flags.png} alt={"drapeau " + country.translations.fra.common} />
            <div className="infos">
                <ul>
                    <li>Nom: {country.translations.fra.common}</li>
                    <li>Capital: {country.capital}</li>
                    <li>Pop: {country.population.toLocaleString()}</li>
                </ul>
            </div>
        </li>
    );
};

export default Card;