import CardHorizontal from "@/components/common/CardHorizontal";
import CardVertical from "@/components/common/CardVertical";
import { useContext, useEffect, useState } from "react";
import blogContext from "@/context/context";
import axiosBase from "@/utils/axiosSetup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const index = () => {
  const { posts, setPosts } = useContext(blogContext);
  let [articles, setArticles] = useState(posts);
  const [isLoading, setIsLoading] = useState(false);
  const [cat, setCat] = useState("");

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const result = await axiosBase({
        url: "/post",
        method: "GET",
      });
      setPosts(result?.data?.data);
      setArticles(result?.data?.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const errMess = err?.response?.data || "Cann't get post!";
      console.log(errMess);
      toast.error(errMess);
    }
  };

  useEffect(() => {
    if (posts.length === 0) {
      fetchPosts();
    }
  }, []);

  const handleChangeCategory = () => {
    const filterdPosts = posts.filter((post) => post.category === cat);
    setArticles(filterdPosts);
  };

  useEffect(() => {
    if (cat === "") {
      setArticles(posts);
    } else {
      handleChangeCategory();
    }
  }, [cat]);

  return (
    <>
      {isLoading ? (
        <div className="w-full min-h-screen pt-32 text-center">
          <progress className="progress progress-info w-56"></progress>
        </div>
      ) : (
        <div className="lg:px-6">
          <ToastContainer theme="colored" />
          <div className="mt-6 flex gap-3 mb-6 flex-wrap">
            <button
              className={`btn btn-sm rounded-full ${
                cat === "" && "btn-success"
              }`}
              onClick={() => setCat("")}
            >
              ALL
            </button>
            <button
              className={`btn btn-sm rounded-full ${
                cat === "Programming" && "btn-success"
              }`}
              onClick={() => setCat("Programming")}
            >
              Programming
            </button>
            <button
              className={`btn btn-sm rounded-full ${
                cat === "Technology" && "btn-success"
              }`}
              onClick={() => setCat("Technology")}
            >
              Technology
            </button>
            <button
              className={`btn btn-sm rounded-full ${
                cat === "News" && "btn-success"
              }`}
              onClick={() => setCat("News")}
            >
              News
            </button>
            <button
              className={`btn btn-sm rounded-full ${
                cat === "Lifestyle" && "btn-success"
              }`}
              onClick={() => setCat("Lifestyle")}
            >
              Lifestyle
            </button>
          </div>
          <div className="grid md:grid-cols-2 place-items-center md:place-items-stretch  lg:grid-cols-3 gap-3">
            {articles.length > 0 &&
              articles.map(
                (post, index) =>
                  index < 3 && <CardVertical key={index} post={post} />
              )}
          </div>
          {articles.length > 3 && (
            <h1 className="text-xl font-bold mt-10 ml-6 md:ml-0 mb-3 text-secondary">
              ALL ARTICLES
            </h1>
          )}
          <div className="grid md:place-items-stretch md:gap-2">
            {articles.length > 0 &&
              articles.map(
                (post, index) =>
                  index > 2 && <CardHorizontal key={index} post={post} />
              )}
          </div>
        </div>
      )}
    </>
  );
};

export default index;
