// import { useState } from 'react'
// const Form1 = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         console.log("name :"+name);
//         console.log("email :"+email);
//         console.log("phone :"+phone);
//     }
//     return (
//         <div>
//             <form action="" onSubmit={handleSubmit}>
//     Name  : <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
//     email : <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
//     phone : <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} /> <br />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }
// export default Form1


import { useEffect, useState } from 'react'
const Form1 = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });
    let [formErr, setFormErr] = useState({
        nameErr: "",
        emailErr: "",
        phoneErr: ""
    });

    useEffect(() => {
        console.log(formData);
        console.log(formErr);
    }, [formData, formErr])

    const updateFormData = (e) => {
        // console.log(e);
        const { name, value } = e.target
        // console.log(name+":",value);
        setFormData({
            ...formData,
            [name]: value
        });
        // console.log(formData);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let errors = {};

        if (formData.name === "" || formData.name === null) {
            errors.nameErr = "Please input the name!";
        }
        if (formData.email === "" || formData.email === null) {
            errors.emailErr = "Please input the email!";
        }
        if (formData.phone === "" || formData.phone === null) {
            errors.phoneErr = "Please input the phone!";
        }
    
        setFormErr((prevErr) => ({
            ...prevErr,
            ...errors
        }));
    
        // If there are no errors, proceed with form submission logic
        if (Object.keys(errors).length === 0) {
            // Perform form submission logic here
            console.log("Form submitted successfully!");
        }
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                Name  : <input type="text" name="name" onChange={updateFormData} /><span style={{ color: "red" }}>{formErr.nameErr}</span> <br />
                email : <input type="text" name="email" onChange={updateFormData} /><span style={{ color: "red" }}>{formErr.emailErr}</span> <br />
                phone : <input type="text" name="phone" onChange={updateFormData} /><span style={{ color: "red" }}>{formErr.phoneErr}</span> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Form1

