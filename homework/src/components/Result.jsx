import React from 'react';
import { useFormStore } from "../context/context";

function Result() {
    const [state,dispatch] = useFormStore();
    const { firstName, lastName, email, city, street, house } = state.data;
    return ( 
        <div>
            <h1>Спасибо за регистрацию</h1>
            <h3>Контактная информация</h3>
            <p>Имя: {firstName}</p>
            <p>Фамилия: {lastName}</p>
            <p>Email: {email}</p>
            <p>Город: {city}</p>
            <p>Улица: {street}</p>
            <p>Дом: {house}</p>
        </div>
     );
}

export default Result;