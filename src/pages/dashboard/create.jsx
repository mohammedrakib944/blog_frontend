import dynamic from "next/dynamic";
import "react-markdown-editor-lite/lib/index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MarkdownIt from "markdown-it";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState, useContext } from "react";
import axiosBase from "@/utils/axiosSetup";
import blogContext from "@/context/context";

const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});

const markdownItOptions = {
  html: true,
  linkify: true,
  typographer: true,
};

// Initialize a markdown parser
const markdownParser = new MarkdownIt(markdownItOptions);

// JSX FUNCTION
const Create = () => {
  const { setPosts } = useContext(blogContext);
  const [title, setTitle] = useState("");
  const [shortAns, setShortAns] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("Programming");
  const [markdownText, setMarkdownText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEditorChange = ({ html, text }) => {
    setMarkdownText(text);
  };

  // CREATE POST
  const handleCreatePost = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const sendingData = {
      title,
      short_ans: shortAns,
      description: markdownText,
      category,
      image,
    };

    //Sending to backend
    try {
      const result = await axiosBase({
        url: "/post",
        method: "POST",
        data: sendingData,
        headers: {
          accept: "application/json",
          "Content-Type": `multipart/form-data;`,
        },
        withCredentials: true,
      });

      setPosts((prev) => [...prev, result?.data?.data]);
      toast.success("Post added!");
      setIsLoading(false);

      // Set all to NULL
      setTitle("");
      setShortAns("");
      setImage("");
      setCategory("Programming");
    } catch (err) {
      let errMessage = err.response?.data?.message || "Cannot added Post!";
      toast.error(errMessage);
      setIsLoading(false);
    }
  };

  return (
    <div className="px-6">
      <ToastContainer theme="colored" />
      <Link className="flex gap-3 items-center text-success" href="/dashboard">
        <IoMdArrowRoundBack /> Dashboard
      </Link>

      <form onSubmit={handleCreatePost}>
        <p className="text-lg font-semibold mt-10 text-secondary">Title</p>
        <input
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Type here"
          className="w-full py-3 mb-3 text-2xl font-semibold focus:outline-none bg-transparent"
        />

        <p className="text-lg font-semibold text-secondary">Short answer</p>
        <input
          required
          type="text"
          value={shortAns}
          onChange={(e) => setShortAns(e.target.value)}
          placeholder="Type here"
          className="w-full py-3 mb-3 focus:outline-none bg-transparent"
        />

        <p className="text-lg font-semibold mt-2 mb-3 text-secondary">
          Description
        </p>
        <MdEditor
          style={{ height: "500px" }}
          renderHTML={(markdown) => markdownParser.render(markdown)}
          onChange={handleEditorChange}
        />
        <div className="flex flex-wrap items-center mt-10 gap-6 mb-10">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Cover Image</span>
            </label>
            <input
              type="file"
              name="images"
              onChange={(e) => setImage(e.target.files[0])}
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Select Category</span>
            </label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="select select-bordered"
            >
              <option>Programming</option>
              <option>Technology</option>
              <option>Lifestyle</option>
              <option>News</option>
            </select>
          </div>
        </div>

        <div className="flex gap-3 my-8">
          <button
            disabled={isLoading}
            className="btn btn-secondary rounded-full px-5"
          >
            <Link href="/dashboard">Cancle</Link>
          </button>
          <button
            disabled={isLoading}
            type="submit"
            className="btn btn-success rounded-full px-6"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
