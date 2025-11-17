import React, { createContext } from "react";

interface InputContextProps {
    placeholder: string,
    showInputBox: boolean,
    actionText: string,
    onPostFun: (e: React.SyntheticEvent) => void;
    setOnPostFun: (fn: (e: React.SyntheticEvent) => void) => void;
    setShowInputBox: (value: boolean) => void,
    setPlaceholder: (value: string) => void,
    setActionText: (value: string) => void,
}

const ShowInputContext = createContext<InputContextProps | null>(null);

export default ShowInputContext;