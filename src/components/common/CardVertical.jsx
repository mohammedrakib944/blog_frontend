import Link from "next/link";
import Moment from "react-moment";

const CardVertical = ({ post }) => {
  const coverImage =
    post?.image ||
    "https://unper.ac.id/wp-content/plugins/tutor/assets/images/placeholder-.jpg";
  return (
    <div className="card w-[340px] bg-base-100 hover:shadow-xl duration-200 border border-gray-400/20">
      <figure>
        <img
          className="w-full h-[200px]  object-cover"
          src={coverImage}
          alt="Rakib"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center text-gray-400">
          <span>
            <Moment fromNow>{post?.date}</Moment>
          </span>
          <span className="text-sm text-gray-500">#{post?.id}</span>
        </div>
        <Link href={`/blog/${post?.slug}`}>
          <h2 className="card-title hover:text-success">
            {post?.title?.substring(0, 50)}...
          </h2>
        </Link>
        <p className="text-neutral-content">
          {post?.short_ans?.substring(0, 70)}...
        </p>
        <Link href={`/blog/${post?.slug}`}>
          <button className="btn btn-success hover:bg-green-400 px-6 mt-2 btn-sm rounded-full">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardVertical;
