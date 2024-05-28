import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { currency, changeCurrency } = useContext(AppContext);

    const handleCurrencyChange = (e) => {
        changeCurrency(e.target.value);
    };

    return (
        <div>
            <label htmlFor="currency-select">Currency:</label>
            <select id="currency-select" value={currency} onChange={handleCurrencyChange}>
                <option value="£">£ Pound Sterling</option>
                <option value="$">$ US Dollar</option>
                <option value="€">€ Euro</option>
                <option value="¥">¥ Japanese Yen</option>
            </select>
        </div>
    );
};

export default CurrencySelector;
