import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

// cremos la funcion AuthRoute que sera la que validara el acceso del usuario en caso de que tenga localStorage.jwt
export default function AuthRoute({ children }) {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('jwt'); 

        if (!token) {
            navigate('/');
        }
    }, [navigate]);

    return children;
}