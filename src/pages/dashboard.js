import React, { useContext } from 'react';
import { AuthContext } from './../App';

export default function Dashboard (){
    const token = useContext(AuthContext);
    return (
        <div>
            Welcome to Dashboard
            <p>Authenticated as {token}</p>
        </div>
    )
}