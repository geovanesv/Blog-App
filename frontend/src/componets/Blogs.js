// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Blog from "./Blog";
// import "./Blogs.css";

// const Blogs = () => {
//   const [blogs, setBlogs] = useState();
//   const sendRequest = async () => {
//     const res = await axios
//       .get("http://localhost:5000/api/blogs")
//       .catch((err) => console.log(err)); 
//     const data = await res.data;
//     return data;
//   };
//   useEffect(() => {
//     sendRequest().then((data) => setBlogs(data.blogs));
//   }, []);
//   console.log(blogs);
//   return (
//     <div>
//       {blogs &&
//         blogs.map((blog, index) => (
//           <Blog
//             id={blog._id}
//             isUser={localStorage.getItem("userId") === blog.user._id}
//             title={blog.title}
//             desc={blog.desc}
//             img={blog.img}
//             user={blog.user.name}
//             date={new Date(blog.date).toLocaleDateString()}
//           />
//         ))}
//     </div>
//   );
// };

// export default Blogs;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
import "./Blogs.css"

const Blogs = () => {
  const [blogs, setBlogs] = useState();

  const sendRequest = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blogs");
      const data = res.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);

  return (
    <div className="container mt-5">
      {blogs &&
        blogs.map((blog, index) => (
          <div key={index} className="blog-container">
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-desc">{blog.desc}</p>
            <p className="blog-user">
              Autor: {blog.user.name} | Data:{" "}
              {new Date(blog.date).toLocaleDateString()}
            </p>
            {/* Adicione as demais propriedades necessárias do Blog component */}
              <Blog
                id={blog._id}
                isUser={localStorage.getItem("userId") === blog.user._id}
                title={blog.title}
                desc={blog.desc}
                img={blog.img}
                user={blog.user.name}
                date={new Date(blog.date).toLocaleDateString()}
              />
          </div>
        ))}
      <a href="/add-blog" className="add-blog-btn">
        Adicionar Novo Blog
      </a>
    </div>
  );
};

export default Blogs;
