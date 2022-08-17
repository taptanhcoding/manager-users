import * as request from '~/utils/httpRequest';

export const getUsers = async (q) => {
    try {
        const res = await request.get('users', {
            params: {
                page: q,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
