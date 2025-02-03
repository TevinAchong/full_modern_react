import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // This function runs every time there is a re-render (the data changes)
    useEffect(() => {
        console.log('useEffect ran');
        // We can access the state
        console.log(blogs);
    }); 

    return ( 
        <div className="home">
            <BlogList blogs={blogs} homePageTitle="All Blogs!" handleDelete={handleDelete}/>
            
            {/* Component being reused */}
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} homePageTitle="Mario's Blogs!"/>
        </div>
     );
}
 
export default Home;