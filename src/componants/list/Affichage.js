import React from 'react';
import { useState } from 'react';

function Affichage() {
    const [compt, setcompt] = useState(0);

    function Increment() {
        setcompt(compt + 1);
    }

    return (
        <>
            <p>Compteur: {compt}</p> {/* Display the current count */}
            <button onClick={Increment}>Clicker +</button> {/* Pass the function reference */}
        </>
    );
}

export default Affichage;
