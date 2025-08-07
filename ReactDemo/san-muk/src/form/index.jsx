import { useState } from "react";

const FormHandling = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_password: ''
    })

    const handleChange = (event) => {
        const { value, name } = event.target;

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            };
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData);

        console.log()
    }

    return <><form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" value={formData.name} onChange={handleChange} name="user_name" className="border-2" />
        <input type="email" placeholder="email" value={formData.email} onChange={handleChange} name="user_email" className="border-2" />
        <input type="password" placeholder="password" value={formData.password} onChange={handleChange} name="user_password" className="border-2" />
        <input type="submit" value="Submit Form" />
    </form></>
}

export default FormHandling;