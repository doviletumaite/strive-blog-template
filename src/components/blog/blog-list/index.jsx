import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
// import posts from "../../../data/posts.json";
import { getPosts } from "../../../utils/crudPosts.js";
const BlogList = () => {
  
  const [post, setPost] = useState([])

  const fetchPosts = async () => {
    try {
     let posts = await getPosts()
     setPost(posts)
    } catch (error) {
      throw error
    }
  }
 
  useEffect(() => {
    fetchPosts()
  }, [])
    return (
      <Row>
        {post.map((post) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={post.title} {...post} />
          </Col>
        ))}
      </Row>
    );
  }

export default BlogList