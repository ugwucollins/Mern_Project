import Adminnavbar from "../../navbar/Adminnavbar";
import Footer from "../../footer/Footer";
import BloggersTable from "./BloggersTable";

const Bloggers = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full min-h-[90vh] mb-2 text-black dark:text-white">
        <Adminnavbar />

        <div className="ml-[21%] overflow-hidden">
          <BloggersTable />
        </div>
      </div>
      <div className="w-auto ml-[20%] overflow-x-visible min-w-fit">
        <Footer />
      </div>
    </div>
  );
};

export default Bloggers;
