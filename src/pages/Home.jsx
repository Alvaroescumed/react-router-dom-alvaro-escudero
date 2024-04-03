import { useState } from "react"


export default function Home(){
    const [isChecked, setChecked] = useState(false);
    const [show, setShow] = useState(false)

    function handleCheckChange(){
        setChecked(!isChecked);
    }

    function handleClick(){
        if(isChecked){
            const token = 'dummy_token;'
            localStorage.setItem('jwt', token); //guardamos en local storage el jwt para que el usuairio pueda acceder  a todos los enlaces de la web que filtra AuthRoute
            setShow(true);
        } else{
            localStorage.removeItem('jwt') // eliminamos el token en caso de que el usuario quite el checkbox
            setShow(false);
        }
    }

    return(
        <>
            <h1>HOME</h1>
            <p>Bienvenido a mi página web</p>
            <p>Haz click en el checkbox para poder acceder a todo el contenido de la web</p>
            {show && <p style={{color : 'green'}}>Estás logueado</p>} {/*Creamos un condicional para que cuando se realice el submit avise al usuario de que ya puede entrar en la seccion de privado*/}
            <label><input type="checkbox" checked={isChecked} onChange={handleCheckChange} />Demuestra que no ers un robot</label>
            <button onClick={handleClick}>Submit</button>
        </>
    )
}