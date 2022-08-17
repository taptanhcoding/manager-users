import { createContext, useState } from 'react';
import { create } from '~/services/createService';

const HandleUsers = createContext();
function HandleUser({ children }) {
    const [newInfo, setInfo] = useState({});

    const handleAdd = (nameValue, jobValue) => {
        const creaUser = async () => {
            const newUser = await create(nameValue, jobValue);
            setInfo(newUser);
        };

        creaUser();
    };
    // console.log(newInfo);
    const value = {
        add: {
            newInfo,
            handleAdd,
        },
    };

    return <HandleUsers.Provider value={value}>{children}</HandleUsers.Provider>;
}

export { HandleUser, HandleUsers };
