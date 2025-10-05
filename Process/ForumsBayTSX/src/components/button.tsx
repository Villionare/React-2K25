import { useState } from "react";

interface ButtonData {
  name: string;
  bgcolor: string;
  border: string;
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonData> = (props) => {
    const { name, bgcolor, border, text, onClick = ()=>alert("this is the default if the onClick is not available") } = props;
    const [check, setCheck] = useState<number>(0);

  return (
    <>
    <h1>
        <p>
            so this is the count value: {`${check}`}
        </p>
    </h1>
      <button
        style={{
          backgroundColor: `${bgcolor}`,
          border: `${border}`,
          color: `${text}`,
        }}
        onClick={onClick}
      >
        {name}
      </button>
      <button onClick={()=>setCheck(prev=>prev+1)}>
        increase
      </button>
    </>
  );
};

export default Button;
