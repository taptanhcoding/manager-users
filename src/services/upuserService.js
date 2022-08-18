import * as request from '~/utils/httpRequest';

export const upUser = async (id, name, job) => {
    try {
        const res = await request.put(`users/${id}`, {
            first_name: name,
            last_name: job,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
