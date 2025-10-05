import { useState } from "react";

interface formDataType {
    identifier: string;
    password: string;
}

const Form: React.FC = () => {
    const [formDetails, setFormDetails] = useState<formDataType>({
        identifier: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormDetails((prev) => ({
            ...prev,
            [name as keyof formDataType]: value,
        }));
    };

    const submitForm = (): void => {
        console.log(formDetails);
    };

    return (
        <>
            <input
                type="text"
                value={formDetails.identifier}
                name="identifier"
                onChange={handleChange}
            />
            <input
                type="password"
                value={formDetails.password}
                name="password"
                onChange={handleChange}
            />
            <button onClick={submitForm}>Submit</button>
            {formDetails.identifier}
            {formDetails.password}
        </>
    );
};

export default Form;