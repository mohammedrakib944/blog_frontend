import Link from "next/link";
import Head from "next/head";
import { IoMdArrowRoundBack } from "react-icons/io";
import axiosBase from "@/utils/axiosSetup";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState({});
  const router = useRouter();
  const { slug } = router.query;

  const fetchPost = async (slug) => {
    try {
      const result = await axiosBase({
        url: `/post/${slug}`,
        method: "GET",
      });
      setSinglePost(result?.data?.data);
    } catch (err) {
      console.log("Here is error: ", err);
      const errMess = err?.response?.data || "Server error!";
      toast.error(errMess);
    }
  };

  useEffect(() => {
    if (slug) {
      console.log("Slig: ", slug);
      fetchPost(slug);
    }
  }, [slug]);

  return (
    <>
      <Head>
        <title>{singlePost?.title}</title>
        <meta
          name="description"
          content={singlePost?.short_ans}
          key={singlePost?.category}
        />
        <meta name="robots" content="all" />
      </Head>

      <div className="px-20 py-3 text-gray-500 text-sm">
        Article by |
        <Link href="/" className="font-semibold text-success">
          {" "}
          Mohammed Rakib
        </Link>
      </div>
      <div className="flex gap-6">
        <ToastContainer theme="colored" />
        <div className=" px-6 bg-[#2d303d] lg:max-w-[800px] lg:pb-6 lg:px-20 rounded-xl mx-auto">
          {/* Ttile */}
          <h2 className="text-3xl mt-6 mb-1">{singlePost?.title}</h2>
          {/* Time */}
          <p className="text-neutral-content my-1">
            <span className="pb-0 text-sm text-gray-500">
              <Moment format="D MMM YYYY" withTitle>
                {singlePost?.date}
              </Moment>
            </span>
          </p>
          {/* Categroy */}
          <p className="text-gray-500 mb-3 font-semibold">
            #{singlePost?.category}
          </p>
          {/* Poster */}
          <img
            className="w-full rounded-md"
            src={singlePost?.image}
            alt="Rakib | blog"
          />

          {/* Description */}
          <div className="lg:text-lg pt-6">
            <div className="prose lg:text-lg">
              <ReactMarkdown>{singlePost?.description}</ReactMarkdown>
            </div>
          </div>

          {/* Google adds section */}
          <div className="w-[468px] h-[160px] mt-10 bg-gray-900/50"></div>

          {/* Go to posts */}
          <p className="mt-24 pb-4 text-lg text-secondary">THE END!</p>
          <div className=" mb-10 pt-6 border-t border-secondary">
            <Link className="flex gap-3 items-center text-success" href="/blog">
              <IoMdArrowRoundBack /> All Articles
            </Link>
          </div>
        </div>

        {/* Google adds section */}
        <div className="hidden md:block pt-20">
          <div className="sticky top-4 w-[160px] h-[600px] bg-gray-900/50"></div>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
