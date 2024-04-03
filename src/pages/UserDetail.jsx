import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch"


export default function UserDetail (){

    const { userId } = useParams()

    const {data: user} = useFetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    return(
        <div>
            <h1>{user?.name}</h1>
            <ul>
                <li>email: {user?.email}</li>
                <li>phone: {user?.phone}</li>
                <li>web: {user?.website}</li>
            </ul>
        </div>
    )

}