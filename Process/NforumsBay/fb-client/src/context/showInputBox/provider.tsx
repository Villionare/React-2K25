import { useState, type ReactNode } from "react";
import ShowInputContext from "./create";

interface Props {
    children: ReactNode
}

// type OnPostState = (e: React.FormEvent<HTMLFormElement>) => void;

const ShowInputDialogContext: React.FC<Props> = ({ children }) => {
    // const [inpType, setInpType] = useState<string>();
    const [showInputBox, setShowInputBox] = useState<boolean>(true);
    const [actionText, setActionText] = useState("default");
    const [placeholder, setPlaceholder] = useState<string>('');
    const [onPostFun, setOnPostFun] = useState<(e: React.SyntheticEvent) => void>(
        (e) => {
            e?.preventDefault?.();
        }
    );

    return (
        <ShowInputContext.Provider value={{
            showInputBox,
            placeholder,
            actionText,
            setShowInputBox,
            setActionText,
            setPlaceholder,
            onPostFun,
            setOnPostFun
        }}>
            {children}
        </ShowInputContext.Provider>
    );
};

export default ShowInputDialogContext;