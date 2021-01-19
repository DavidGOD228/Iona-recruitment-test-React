import axios from "axios";
import {config} from '../config';

const apiURL = config.API.url;

type ResponseDataType = {
    data: Array<any>;
};

// get all breads
export const getBreeds = (): Promise<ResponseDataType> => axios.get(apiURL + '/breeds');