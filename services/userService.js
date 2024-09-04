import API from './axiosConfig';

export const getUserById = async (userId) => {
  try {
    const response = await API.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export const addUserSkills = async (userId, skills) => {
  try {
    const response = await API.post(`/users/${userId}/skills`, { skills });
    return response.data;
  } catch (error) {
    console.error('Error adding skills:', error);
    throw error;
  }
};
