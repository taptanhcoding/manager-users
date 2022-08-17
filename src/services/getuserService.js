import * as request from '~/utils/httpRequest';

export const getUser = async (q) => {
    try {
        const res = await request.get(`users/${q}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
