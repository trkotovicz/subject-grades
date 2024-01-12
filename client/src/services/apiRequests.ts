import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
  timeout: 10000,
});

export const gradesList = async () => {
  try {
    const { data } = await api.get('/grades');
    return data;
  } catch (error) {
    return error;
  }
};

export const insertGrade = async (body: object) => {
  try {
    const { data } = await api.post('/grades', body);
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteGrade = async (id: string) => {
  try {
    const { data } = await api.delete(`/grades/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};

