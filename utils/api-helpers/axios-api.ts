import axios from 'axios';

export const getRequest = async (URL: any) => {
  const response: any = await axios.get(URL).catch(e => {
    console.warn(e);
  });

  return response.data;
};
