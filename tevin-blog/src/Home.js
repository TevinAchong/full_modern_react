import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // This function runs every time there is a re-render (the data changes)
    useEffect(() => {
        setTimeout(() => { 
            fetch('http://localhost:8000/blogs').then(
                res => {
                    if (!res.ok) {
                        throw Error('Could not fetch the data for that resource.');
                    }
                    return res.json();
                }
            ).then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            }).catch((err) => {
                setIsPending(false);
                setError(err.message);
            })
        }, 1000)
        // We can access the state
    }, []);  
    // passing a dependency array to specify when useEffect should run (not after every render)
    // an empty array makes sure the function is only run once, on the first render

    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Fetching data...</div> }

            {/* If blogs is null, it does not proceed with creating the component */}
            {blogs && <BlogList blogs={blogs} homePageTitle="All Blogs!"/>} 


        </div>
     );
}
 
export default Home;