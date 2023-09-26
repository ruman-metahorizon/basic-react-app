import axios from "../axios/axios";
import {config} from "../config/config";

export async function getAllUsers() {
    try {
      const response = await axios.get('/users/');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  export const createUser= (data ) => {
    return axios.request({
      url: `/users/`,
      method:'post',
      data: data,
      headers: {'Content-Type': 'application/json'}
    }).then((res) => {
      console.log(res);
      return res.data
      }).catch((error)=> {
        console.log(error);
      })
    
   }