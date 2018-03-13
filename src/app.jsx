import React from 'react';
import "./app.scss"
import Counter from './components/Counter/Counter'
import Button from './components/Button/Button'

if (process.env.NODE_ENV !== 'production') {
    console.log('⚗ Dev mode on ⚗');
}

const App = () => (
    <div>    
        <h1 className="title">It Works!</h1>
        <p>Enjoy!</p>
        <Counter/>
        <Button>Action</Button>
    </div>
);

export default App;