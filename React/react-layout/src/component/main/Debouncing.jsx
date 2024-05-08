import React, { useEffect, useState } from 'react'

const Debouncing = () => {
    const [name, setName] = useState();
    useEffect(() => {
        let pr = setTimeout(() => {
            console.log("name is " + name);
        }, 4000);
        return () => {
            clearTimeout(pr)
        }
    }, [name])
    const updateName = (e) => {
        setName(e.target.value)
        // console.log(name);
    }
    return (
        <div>
            Name : <input type="text" onChange={updateName} />
        </div>
    )
}

export default Debouncing
