import { useUserContext } from "../context/user/create";
import Countries from "../ENUMS/country";
const First = () => {

    const { users } = useUserContext();

    return <>
        <h3>
            {users && users.map((v) => (
                <p key={v.id}>
                    Name: {v.name}, Age: {v.age}, Married: {String(v.isMarried)}
                </p>
            ))}

            this is the first h3
            <br />
            also fetching from the enum {Countries.BRAZIL}
        </h3>
    </>
}

export default First;