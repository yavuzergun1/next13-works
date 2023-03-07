import Posts from "../../../data.json";

export default function handlerId(req, res) {
  const { method, cookies, query } = req;

//   console.log(method);
//   console.log(cookies);
//   console.log(query);
  const { id } = query;
  console.log(id);

  const post = Posts.posts.find((post) => post.id == id);

    if (!post) {
        res.status(404).json({ message: "Post not found" });
    }
    
  res.status(200).json(post);
 console.log(post);
}
