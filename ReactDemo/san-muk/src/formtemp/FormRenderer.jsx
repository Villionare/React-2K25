import { useState } from "react";

//this will take those config files and on the basis of it, it will gerate the form code then will render that

const FormRendrer = ({ elements, onChange, onSubmit, setFinaldata }) => {


    const [input, setInput] = useState(elements.type.inputTag);
    const [buttons, setButtons] = useState(elements.type.buttons);
    // console.log(input[0].style);

    //so here we have to send the final input data to the server or what ever so we will create an object of all the input names
    //and then will pass the value entered in them then we will send them back to the parent component - onSubmit

    const intialValue = input.reduce((accumulator, current) => {
        accumulator[current.name] = ''; //in this statement we are creating key with the name given to the input tag and assiging its value ''
        return accumulator;
    }, {});

    const [config, setConfig] = useState(intialValue);

    //now we will create onChange;
    const handleOnChange = (event) => {

        const { name, value } = event.target;
        setConfig(prevState => ({
            ...prevState,
            [name]: value,
        }));
        setFinaldata(config)
    }


    return <form onSubmit={onSubmit}>
        <h1>Login Form</h1>
        {input.map((input) => { return <input type={input.type} placeholder={input.placeholder} name={input.name} value={config.value} onChange={handleOnChange} className={input.style} /> })}
        {buttons.map((input) => { return <input type={input.type} placeholder={input.placeholder} name={input.name} value={config.value} onChange={handleOnChange} className={input.style} /> })}
    </form>
}

export default FormRendrer;