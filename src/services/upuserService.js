import * as request from '~/utils/httpRequest';

export const upUser = async (q) => {
    try {
        const res = await request.put(`users/${q}`, {});
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
