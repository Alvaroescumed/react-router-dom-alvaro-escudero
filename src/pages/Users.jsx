import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch"


export default function Users(){

    const {data: users} = useFetch('https://jsonplaceholder.typicode.com/users/');

    return(
        <>
            <h1>Usuarios de la Web</h1>
            <ul>
            {users.map(user =>(
                <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
            ))}
            </ul>
        </>
    )
}