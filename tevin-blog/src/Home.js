import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState('Killua');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // This function runs every time there is a re-render (the data changes)
    useEffect(() => {
        console.log('Name has been changed!!!!');
        console.log(`It is now ${name}`);
        // We can access the state
    }, [name]);  
    // passing a dependency array to specify when useEffect should run (not after every render)
    // an empty array makes sure the function is only run once, on the first render
    // Since we pass [name] useEffect will only run when there is a change to the state of `name`

    return ( 
        <div className="home">
            <BlogList blogs={blogs} homePageTitle="All Blogs!" handleDelete={handleDelete}/>
            
            {/* Component being reused */}
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} homePageTitle="Mario's Blogs!"/>

            <button onClick={() => setName(name === 'Killua' ? 'Gojo' : 'Killua')}>change name</button>
            <p>{ name }</p>
        </div>
     );
}
 
export default Home;