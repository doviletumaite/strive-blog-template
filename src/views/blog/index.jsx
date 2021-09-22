import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { withRouter } from "react-router";
import BlogAuthor from "../../components/blog/blog-author";
import { getPosts } from "../../utils/crudPosts";
import "./styles.css";

const Blog = () => {

  // componentDidMount() {
  //   const { id } = this.props.match.params;
  //   console.log(posts);
  //   const blog = posts.find((post) => post._id.toString() === id);
  //   if (blog) {
  //     this.setState({ blog, loading: false });
  //   } else {
  //     this.props.history.push("/404");
  //   }
  // }
 
  // async componentDidMount () {
  //    const posts = await getPosts()
  //    if (posts) {
  //       console.log("that", posts)
  //       this.setState({ posts, loading: false });
  //    } else {
  //     this.setState({ posts, loading: false });
  //    }
    
  // }

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

    // const { loading, posts } = this.state;
    // if (loading) {
    //   return <div>loading</div>;
    // } else {
      return (
        <>
       {post.map((post) => 
        <div className="blog-details-root">
        <Container>
          <Image className="blog-details-cover" src={post.cover} fluid />
          <h1 className="blog-details-title">{post.title}</h1>

          <div className="blog-details-container">
            <div className="blog-details-author">
              <BlogAuthor {...post.author} />
            </div>
            <div className="blog-details-info">
              <div>{post.createdAt}</div>
              <div>{`${post.readTime.value} ${post.readTime.unit} read`}</div>
            </div>
          </div>

          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </Container>
      </div>
        )}
        </>
      );
    }
  


export default withRouter(Blog);
