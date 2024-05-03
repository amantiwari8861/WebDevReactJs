import { useState, useEffect } from 'react';
import './Loader.css'
function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    },[]);

    if (isLoading) {
        // return <Loading />;
        return <div className="loader"></div>
    }
    return (
        <div>
            <h1>Data Loaded!</h1>
        </div>
    );
}
export default Loader;

// const Loading=()=>{
//     return ("Loading..."
//     )
// }