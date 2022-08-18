import * as request from '~/utils/httpRequest';

export const deleteUser = async (q) => {
    try {
        await request.dele(`users/${q}`);
    } catch (error) {
        console.log(error);
    }
};
