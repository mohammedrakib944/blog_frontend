import Image from "next/image";
import One from "../../../public/achive/1.jpg";
import Two from "../../../public/achive/2.jpg";
import Three from "../../../public/achive/3.jpeg";

const achive = [
  {
    img: One,
    alt: "rakib",
  },
  {
    img: Two,
    alt: "Rakib",
  },
  {
    img: Three,
    alt: "rakib",
  },
];

const Achivement = () => {
  return (
    <div className="mt-6 md:mt-28">
      <h1 className="text-2xl font-bold mb-2 border-l-2 border-primary pl-3 uppercase">
        Achivement
      </h1>
      <h2 className="text-lg font-bold mt-4">
        <span className="text-primary">BUET</span> CSE FEST 2022
      </h2>
      <p className="text-neutral-content">Hackathon: Web 3.0 and Blockchain</p>
      <p className="text-neutral-content">Position: 2nd</p>

      <div className="flex flex-wrap gap-4 mt-4">
        {achive.map((data, index) => (
          <Image
            src={data.img}
            priority
            key={index}
            className="rounded-lg max-w-full lg:max-w-[400px]"
            alt={data.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Achivement;
