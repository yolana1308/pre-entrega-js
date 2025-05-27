import React from 'react';
import NavBar from './components/navbar';
import ItemListContainer from './components/itemListContainer';

const App = () => {
    return (
        <div>
            <NavBar />
            <ItemListContainer welcomeMessage="¡Bienvenido a nuestra tienda!" />
        </div>
    );
};

export default App;
