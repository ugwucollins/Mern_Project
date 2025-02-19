import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Api from "../../Axios/Api";

export const postCreateContext = createContext({});

export const filterPosts = (posts: any, search: string) => {
  return posts.filter(
    (post: any) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.categorate.toLowerCase().includes(search.toLowerCase())
  );
};
// export const filterPostsSearch = (posts: any, search: string) => {
//   return posts.filter((post: any) =>
//     post.title.toLowerCase().includes(search.toLowerCase())
//   );
// };

export const PostsContext = ({ children }: { children: ReactNode }) => {
  // const PostCollection = [
  //   {
  //     imageUrl: "/home.jpeg",
  //     _id: "1",
  //     categorate: "culinary",
  //     title: "Product Manager at TechFlow",
  //     postMessage:
  //       "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
  //     createdDate: Date.now(),
  //     updatedDate: "",
  //     createdBy: {
  //       _id: "",
  //       imageUrl: "avater.jpg",
  //       firstName: "Avater",
  //       lastName: "Deo",
  //       email: "avaterDeo@gmal.com",
  //       createdDate: Date.now(),
  //       updatedDate: "",
  //     },
  //   },
  //   {
  //     imageUrl: "/home.jpeg",
  //     categorate: "destinaton",
  //     title: "Product Manager at TechFlow",
  //     postMessage:
  //       "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
  //     createdDate: Date.now(),
  //     updatedDate: "",
  //     _id: "2",
  //     createdBy: {
  //       _id: "",
  //       imageUrl: "avater.jpg",
  //       firstName: "Avater",
  //       lastName: "Deo",
  //       email: "avaterDeo@gmal.com",
  //       createdDate: Date.now(),
  //       updatedDate: "",
  //     },
  //   },
  // ];
  const [posts, setPosts] = useState([]);
  const [search, setsearch] = useState("");

  const FetchPosts = async () => {
    try {
      const res = await Api.get("/posts");
      const post = res.data.posts;
      setPosts(post);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchPosts();
  }, []);

  return (
    <postCreateContext.Provider value={{ posts, setPosts, search, setsearch }}>
      {children}
    </postCreateContext.Provider>
  );
};

export const usePost = () => {
  return useContext(postCreateContext);
};
