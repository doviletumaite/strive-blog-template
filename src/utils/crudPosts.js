const URL = process.env.REACT_APP_BE_URL
const POSTS_URL = `${URL}/posts`

// GET POSTS
export const getPosts = async () => {
  try {
    console.log(process.env)
    const response = await fetch(`${POSTS_URL}`)

    if (response.ok) {
      const posts = await response.json();
      console.log(posts)
      return posts;
    } else {
      throw new Error("error: failed fetch posts");
    }
  } catch (error) {
    throw error;
  }
};