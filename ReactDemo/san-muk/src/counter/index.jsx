import { useContext } from "react";
import { NewContext } from "../context";

export default function Button() {
  const getMessage = useContext(NewContext);
  // const { message, setMessage } = useState(getMessage);
  console.log(getMessage);

  return (
    <div>
      <button>
        {getMessage ? `it became ${getMessage}` : `now it became ${getMessage}`}
      </button>
      <button>Decrement</button>
    </div>
  );
}
