
import React from 'react';
import Header from './components/shared/Header'
import RentalHome from './pages/RentalHome';
import Login from './pages/Login';
import Register from './pages/Register';


const App = () => {

    const renderPages = () => {
        const {pathname} = window.location;

        switch (pathname) {
            case '/': 
                return <RentalHome />;
            case '/Login': 
                return <Login />;
            case '/Register': 
                return <Register />
            default: 
                return <RentalHome />;
        }
    }

    return (
        <div>
            <Header />
            {renderPages()}
        </div>
    );
}

export default App;
