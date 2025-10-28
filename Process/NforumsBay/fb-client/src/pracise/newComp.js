const { useState } = require("react");


const NewComp = () => {
    const [start, setStart] = useState(345);

    return
    `<div class="h-full">
        this is a react component, and this is the value of state ${start}
    </div>`
}

export default NewComp