import Link from "next/link";
import Moment from "react-moment";

const CardHorizontal = ({ post }) => {
  const coverImage =
    post?.image ||
    "https://unper.ac.id/wp-content/plugins/tutor/assets/images/placeholder-.jpg";
  return (
    <div className="card card-side bg-base-100 mb-6 border-b md:border-none border-gray-300/20 rounded-none pb-6 md:pb-0 px-2">
      <figure>
        <img
          className="hidden md:block max-h-[200px] md:w-[400px] rounded-lg"
          src={coverImage}
          alt="Rakib"
        />
      </figure>
      <div className="card-body lg:w-[500px] py-0 md:py-8 px-3 lg:pl-6">
        {/* title */}
        <Link href={`/blog/${post?.slug}`}>
          <h2 className="card-title hover:text-success">
            {post?.title?.substring(0, 50)}...
          </h2>
        </Link>
        <p className="text-neutral-content">
          {post?.short_ans?.substring(0, 150)}...
        </p>
        <Link href={`/blog/${post?.slug}`}>
          <button className="btn btn-success hover:bg-green-400 px-6 btn-sm rounded-full">
            Read More
          </button>
        </Link>

        <span className="pb-0 text-gray-400">
          <Moment format="D MMM YYYY" withTitle>
            {post?.date}
          </Moment>
        </span>
        <p className="text-sm text-gray-500">#{post?.id}</p>
      </div>
    </div>
  );
};

export default CardHorizontal;
