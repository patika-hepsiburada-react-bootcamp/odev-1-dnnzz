import axios from "axios";

const getData = async (userId) => {
  //getting user and user's posts from api then merge.
  try {
    const { data: user } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const { data: posts } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    );
    return { ...user, posts };
  } catch (err) {
    console.error(err);
  }
};

export default getData;
