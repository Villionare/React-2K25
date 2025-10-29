// import React, { useState } from "react";
// import UserContext, { User } from "./create";

// const userProvider = ({ children }: React.ReactNode) => {
//     const [users, setUserList] = useState<User[] | null>(null);

//     const addUrs = (user: User) => {
//         users?.push(user);
//         return true;
//     }

//     const dltUsers = (user: User) => {
//         const userToDEL = users?.map(e => e.id == user.id);
//         userToDEL?.pop();
//         return true;
//     }

//     const uptUsers = (user: User) => {
//     }


//     return <UserContext value={addUrs, dltUsers}>
//         {children}
//     </UserContext>
// }

// export default userProvider;