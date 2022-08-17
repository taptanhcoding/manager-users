import * as request from '~/utils/httpRequest';

export const create = async (name, job) => {
    try {
        const res = await request.post(`users`, {
            first_name: name,
            last_name: job,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
