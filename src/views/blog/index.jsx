import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import { withRouter } from "react-router";
import BlogAuthor from "../../components/blog/blog-author";
import { getPosts } from "../../utils/crudPosts";

import "./styles.css";
class Blog extends Component {
  state = {
    posts: [],
    loading: true,
  };
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
  render() {
    const { loading, posts } = this.state;
    if (loading) {
      return <div>loading</div>;
    } else {
      return (
        <div className="blog-details-root">
          <Container>
            <Image className="blog-details-cover" src={posts.cover} fluid />
            <h1 className="blog-details-title">{posts.title}</h1>

            <div className="blog-details-container">
              <div className="blog-details-author">
                <BlogAuthor {...posts.author} />
              </div>
              <div className="blog-details-info">
                <div>{posts.createdAt}</div>
                <div>{`${posts.readTime.value} ${posts.readTime.unit} read`}</div>
              </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: posts.content }}></div>
          </Container>
        </div>
      );
    }
  }
}

export default withRouter(Blog);
