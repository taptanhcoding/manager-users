import { createContext, useState } from 'react';
import { create } from '~/services/createService';
import { deleteUser } from '~/services/deleteService';
import { upUser } from '~/services/upuserService';

const HandleUsers = createContext();
function HandleUser({ children }) {
    //Add
    const [newInfo, setInfo] = useState();
    const [upInfo, setUp] = useState();
    const [idDelete, setId] = useState();
    const [idUp, setIdUp] = useState();

    const handleAdd = (nameValue, jobValue, props) => {
        const creaUser = async () => {
            const newUser = await create(nameValue, jobValue);
            props.onHide();
            setInfo(newUser);
        };

        creaUser();
    };
    // console.log(newInfo);
    //Remove
    const handleDelete = (idUser, props) => {
        const deleteData = async () => {
            await deleteUser(idUser);
            props.onHide();

            setId(idUser);
        };

        deleteData();
    };
    // Update
    const handleUpdate = (idUser, nameValue, jobValue, props) => {
        const updateData = async () => {
            const upUserValue = await upUser(idUser, nameValue, jobValue);
            setUp(upUserValue);
            props.onHide();

            setIdUp(idUser);
        };

        updateData();
    };

    const value = {
        add: {
            newInfo,
            handleAdd,
        },
        remove: {
            idDelete,
            handleDelete,
        },
        update: {
            upInfo,
            idUp,
            handleUpdate,
        },
    };

    return <HandleUsers.Provider value={value}>{children}</HandleUsers.Provider>;
}

export { HandleUser, HandleUsers };
