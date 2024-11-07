import React, { useState } from 'react';
import Card from './Card';

const Form = () => {
    const [error, setError] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const [user, setUser] = useState({
        name:"",
        favoriteFood:"",
    })
    
    const handleSubmit = (e)=> {
        e.preventDefault()
        if(user.name.length >= 3 && user.name[0] !== " " && user.favoriteFood.length >= 6 ) {
            setError(false)
            setConfirm(true)
        } else {
            setConfirm(false)
            setError(true)
        }
    }
    
    return (
        <>
        <form className='form' onSubmit={handleSubmit}>            
            <input type='text' 
            className='form-input'
            placeholder='Ingresa tu nombre'
            onChange={(event) => {
                setConfirm(false)
                setUser({ ...user, name: event.target.value })
                }
            }
            />
            <input type='text'
            className='form-input'
            placeholder='Ingresa tu comida favorita'
            onChange={(event) => {
                setConfirm(false)
                setUser({ ...user, favoriteFood: event.target.value })
                }
            }
            />
            <button type='submit' className='form-btn'>Enviar</button>
            {error && (<p style={{ color: "red" }}>Por favor chequea que la información sea correcta</p> )}

        </form>
        {confirm && (<Card name={user.name} favorite={user.favoriteFood} />) }
        </>
    );
}

export default Form;



