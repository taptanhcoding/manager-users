import * as request from '~/utils/httpRequest';

export const deleteUser = async (q) => {
    try {
        const res = await request.dele(`users/${q}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
