import * as request from '~/utils/httpRequest';

export const login = async (q) => {
    try {
        const res = await request.post(`login`, {
            email: q,
            password: 'cityslicka',
        });
        return res.token;
    } catch (error) {
        console.log(error);
    }
};
