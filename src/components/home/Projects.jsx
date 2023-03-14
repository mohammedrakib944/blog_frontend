import portfolio from "../../../public/projects/NFTmarket.png";
import DoracM from "../../../public/projects/DoracM.png";
import ecommerce from "../../../public/projects/ecommerce.png";
import instaLong from "../../../public/projects/instaLong.png";
import nftMarket from "../../../public/projects/NFT.png";
import movie from "../../../public/projects/movie.png";
import Image from "next/image";

const projectsData = [
  {
    title: "Crypto Swap",
    img: nftMarket,
    tech: "NEXT.JS CSS 3 Ether.js",
  },
  {
    title: "Dorac (NFT Marketplace)",
    img: DoracM,
    tech: "React.js Ether.js Tailwind CSS CSS 3",
  },
  {
    title: "Ecommerce",
    img: ecommerce,
    tech: "React.js Tailwind CSS MySQL Express.js",
  },
  {
    title: "Instagram Dark (Frontend)",
    img: instaLong,
    tech: "Next js Tailwind CSS",
  },
  {
    title: "Movie Details",
    img: movie,
    tech: "React js CSS 3",
  },
  {
    title: "Portfolio Website",
    img: portfolio,
    tech: "React js CSS 3 Tailwind CSS",
  },
];

const Projects = () => {
  return (
    <div className="mt-6 md:mt-28">
      <h1 className="text-2xl font-bold mb-2 uppercase border-l-2 border-primary pl-3">
        Projects
      </h1>
      <div>
        <h3 className="mt-6">
          Explore this website. This is one of my full-stack project (Next.js,
          Tailwind CSS, Express.js, MySql).
        </h3>
        {/* <p className="mt-2 text-neutral-content">
          Build with Next js,Tailwind CSS, Express js, Mysql
        </p> */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="card rounded-sm  bg-base-100  border hover:border-gray-600 duration-200 border-gray-400/10"
            >
              <figure>
                <Image
                  className="h-[200px] object-cover"
                  alt={project.title}
                  src={project.img}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                {/* <p className="text-neutral-content text-sm">{project.tech}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
