const POSTS_URL = "http://localhost:3002/posts";

// GET POSTS
export const getPosts = async () => {
  try {
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