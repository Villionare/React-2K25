//this is the main config files where we specify - what do we want in the form.

const LoginFormConfig = {
    inputTag: [
        { type: "Text", name: "username", id: "name-text", placeholder: "Enter Username", value: "handleValue", onchange: "handleOneChange", style: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2" },
        { type: "password", name: "password", id: "pass-text", placeholder: "Enter Password", value: "handleValue", onchange: "handleOneChange", style: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2" },
    ],
    buttons: [
        { type: "submit", id: "btn-sub", value: "Submit", name: "submit", style: "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md" },
        { type: "submit", id: "btn-forget", value: "Forgot Password", name: "forgot", style: "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md" }
    ]
}

export default LoginFormConfig;