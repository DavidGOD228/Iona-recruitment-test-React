import axios from "axios";
import {config} from '../config';

const apiURL = config.API.url;

type ResponseDataType = {
    data: Array<any>;
};

// gets list of all cats by exact breed
export const getCats = (breed_id: string = '', page: number = 1, limit: number = 10): Promise<ResponseDataType> => {
    return axios.get(apiURL + '/images/search?page=' + page + '&limit=' + limit + '&breed_id=' + breed_id);
};

// gets cat details by its id
export const getCatById = (cat_id: string): Promise<ResponseDataType> => {
    return axios.get(apiURL + '/images/' + cat_id);
};