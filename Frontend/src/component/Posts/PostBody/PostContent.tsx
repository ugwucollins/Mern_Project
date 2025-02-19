import { useParams } from "react-router";
import Homenavbar from "../../navbar/Homenavbar";
import PostItems from "./PostItems";
import Footer from "../../footer/Footer";

const PostContent = () => {
  const { _id } = useParams();
  return (
    <>
      <Homenavbar />
      <PostItems id={_id} />
      <Footer />
    </>
  );
};

export default PostContent;
