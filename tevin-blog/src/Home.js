import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    // This function runs every time there is a re-render (the data changes)
    useEffect(() => {
        fetch('http://localhost:8000/blogs').then(
            res => {
                return res.json();
            }
        ).then(data => {
            console.log(data);
            setBlogs(data);
        });
        // We can access the state
    }, []);  
    // passing a dependency array to specify when useEffect should run (not after every render)
    // an empty array makes sure the function is only run once, on the first render

    return ( 
        <div className="home">
            {/* If blogs is null, it does not proceed with creating the component */}
            {blogs && <BlogList blogs={blogs} homePageTitle="All Blogs!"/>} 
        </div>
     );
}
 
export default Home;