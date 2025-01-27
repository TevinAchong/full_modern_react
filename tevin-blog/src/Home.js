import { useState } from 'react';

const Home = () => {

    const [name, setName] = useState('Naruto');
    const [age, setAge] = useState(25);

    const handleClick = (e) => {
        if (name === 'Naruto')
            setName('Sasuke');
        else
            setName('Naruto');
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old.</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;