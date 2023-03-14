import Link from "next/link";
import { AiOutlinePlus, AiFillDelete, AiFillEdit } from "react-icons/ai";
import { IoMdLogOut } from "react-icons/io";
import { useContext, useEffect } from "react";
import blogContext from "@/context/context";
import axiosBase from "@/utils/axiosSetup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Moment from "react-moment";
import { useRouter } from "next/router";

const dashboard = () => {
  let { posts, setPosts } = useContext(blogContext);
  const router = useRouter();

  // GET POSTs
  const fetchPosts = async () => {
    try {
      const result = await axiosBase({
        url: "/post",
        method: "GET",
      });
      setPosts(result?.data?.data);
    } catch (err) {
      const errMess = err?.response?.data || "Cann't get post!";
      toast.error(errMess);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // DELTE POST
  const handleDelete = async (id) => {
    if (confirm("It will detele Permanently?")) {
      try {
        await axiosBase({
          url: `/post/${id}`,
          method: "DELETE",
          withCredentials: true,
        });
        toast.info("Delete Success!");
        fetchPosts();
      } catch (err) {
        const errMess = err?.response?.data.message || "Cann't Delete!";
        toast.error(errMess);
      }
    }
  };

  // LOGOUT
  const handleLogOut = async () => {
    if (!confirm("You want to Logout?")) return;
    try {
      await axiosBase({
        url: `/auth/logout`,
        method: "POST",
        withCredentials: true,
      });
      router.push("/admin");
    } catch (err) {
      const errMess = err?.response?.data.message || "Cann't Logout!";
      toast.error(errMess);
    }
  };

  return (
    <div className="px-6">
      <ToastContainer theme="colored" />
      <div>
        <h2 className="text-lg mt-4 font-semibold uppercase">DASHBOARD</h2>
      </div>

      {/* DASHBOARD */}
      <div className="stats shadow border border-gray-600/30 my-6">
        <div className="stat place-items-center">
          <div className="stat-title">Total Articles</div>
          <div className="stat-value">{posts?.length}</div>
          <div className="stat-desc mt-1">By Md.Rakib</div>
        </div>
        <div className="stat place-items-center">
          <Link href="/dashboard/create">
            <button className="btn btn-sm btn-success px-3 rounded-full flex items-center gap-2">
              <AiOutlinePlus /> Create New
            </button>
          </Link>
        </div>
        <div className="stat place-items-center">
          <button
            onClick={handleLogOut}
            className="btn btn-sm bg-blue-600 border-none px-3 rounded-full flex items-center gap-2"
          >
            <IoMdLogOut /> Logout
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#id</th>
              <th>title</th>
              <th>date</th>
              <th className="text-end pr-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {posts.length > 0 &&
              posts.map((post, index) => (
                <tr key={index}>
                  {/* ID */}
                  <th>{post?.id}</th>
                  {/* Title */}
                  <td className="hover:text-info">
                    <Link href={`/blog/${post?.slug}`}>
                      {post?.title.substring(0, 80)}
                    </Link>
                  </td>
                  {/* Date */}
                  <td>
                    <Moment format="D MMM YYYY" withTitle>
                      {post?.date}
                    </Moment>
                  </td>
                  {/* Action */}
                  <td className="text-end">
                    <button
                      className="btn btn-xs btn-error rounded-full"
                      onClick={() => handleDelete(post?.id)}
                    >
                      Delete &nbsp; <AiFillDelete />
                    </button>
                    &nbsp; &nbsp;
                    <Link href={`/dashboard/edit/${post?.slug}`}>
                      <button className="btn btn-xs btn-info rounded-full">
                        Edit &nbsp; <AiFillEdit />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default dashboard;
