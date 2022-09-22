import React from 'react';
import './Country.css';
const Country = (props) => {
    const { name, population, area, region, flags } = props.country;
    return (
        <div className='country'>
            <h2>Name:{name.common}</h2>
            <p>Population:{population}</p>
            <p><small>Area:{area}</small></p>
            <p><small>Reigon:{region}</small></p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;