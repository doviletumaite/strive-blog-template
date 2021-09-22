const URL = process.env.REACT_APP_BE_URL
// const POSTS_URL = `${URL}/posts`
// console.log("POSTS_URL",POSTS_URL)
// GET POSTS
export const getPosts = async () => {
  try {
   console.log(URL)
    const response = await fetch(`${URL}/posts`)
    console.log("response")
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