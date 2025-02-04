import React from "react";

async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 3000);
  });
  return <div>Blog</div>;
}

export default Blog;
