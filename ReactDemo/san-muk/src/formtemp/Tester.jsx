//this one takes the config files and send to the Form Rendrer.

import { useState } from "react";
import LoginFormConfig from "./FormConfig";
import FormRendrer from "./FormRenderer";

const TesterForm = () => {

    const [form, setForm] = useState(<LoginFormConfig />);
    const [finalData, setFinaldata] = useState({});

    const handleOnChange = () => {
        console.log('this is the onchange');
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(finalData);

    }
    return <FormRendrer elements={form} onChange={handleOnChange} onSubmit={handleOnSubmit} setFinaldata={setFinaldata} />
}

export default TesterForm;