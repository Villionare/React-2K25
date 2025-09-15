import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"

const ExternalForm = () => {

    const [data, setData] = useState({
        fname: '',
        pass: ''
    });

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev, [name]: value,
        }));
    }

    useEffect(() => {
        console.log(data.fname);
        console.log(data.pass);
    }, [data]);

    const submitForm = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return <>
        <div className="min-h-screen bg-fuchsia-500">
            <form onSubmit={(e) => { submitForm(e) }}>
                <input name="fname" type="text" value={data.fname} onChange={e => onInputChange(e)} />
                <input name="pass" type="password" value={data.pass} onChange={e => onInputChange(e)} />
                <button type="submit">sussss</button>
            </form>
        </div>
    </>
}

export default ExternalForm;