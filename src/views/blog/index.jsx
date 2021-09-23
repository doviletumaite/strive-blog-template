import React, { useEffect, useState } from "react";
import { Container, Image, Modal, Button, Form } from "react-bootstrap";
import { withRouter } from "react-router";
import BlogAuthor from "../../components/blog/blog-author";
import { getPosts } from "../../utils/crudPosts";
import "./styles.css";

const URL = process.env.REACT_APP_BE_URL

const Blog = ({ match }) => {
  const { id } = match.params;
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
   const [loading, setLoading] = useState(true);
   const [open, setOpen] = useState(false);
   const [file, setFile] = useState(null);
   const fetchPosts = async (id) => {
    try {
     let posts = await getPosts(id)
     setPost(posts)
     setLoading(false)
    } catch (error) {
      throw error
    }
  }
 
  useEffect(() => {
    fetchPosts()
  }, [])

  const submitForm = (e) => {
    e.preventDefault()
    const fileFormData = new FormData();
    fileFormData.append("picture", file)
    const uploadPicture = async (id) => {
      try {
       let response = await fetch (`${URL}/file/uploadPicture/${id}`, {
         method: "PUT", 
         body: fileFormData,
       })
      //  getPosts(id)
      } catch (error) {
        console.log(error)
      }
    }
    uploadPicture(id)
    console.log(file)
    setOpen(false)
  }

    // const { loading, posts } = this.state;
    // if (loading) {
    //   return <div>loading</div>;
    // } else {
      return (
      
        <div className="blog-details-root">
        <Container>
          <>
          {post.map((post) => ( 
            <div>
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
             </div>
          )
             )}
          </>

          <Button
              onClick={() => setOpen(true)}
              size="lg"
              variant="dark"
              className="m-5"
            >
              Upload Cover
            </Button>

          <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={open}
          animation={false}
        >
          <Modal.Header>
            <Modal.Title>Upload Cover</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={submitForm}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label></Form.Label>
                <Form.Control
                  onChange={(e) => {
                    const file = e.target.picture[0];
                    setFile(file);
                  }}
                  accept="image/*"
                  type="file"
                  placeholder="Photo"
                  required
                />
              </Form.Group>
              <Form.Group className="d-flex mt-3">
                <Button
                  type="submit"
                  size="lg"
                  variant="dark"
                  style={{ marginLeft: "1em" }}
                >
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
        </Container>
      </div>
    
      );
    }
  


export default withRouter(Blog);
