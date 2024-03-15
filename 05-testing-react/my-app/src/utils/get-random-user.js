const API_URL = "https://randomuser.me/api";

const getRandomUser = async (num = 5) => {
  try {
    const response = await fetch(`${API_URL}/?results=${num}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch random user");
  }
};

export default getRandomUser;
