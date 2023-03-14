import { BsGithub, BsLinkedin, BsYoutube, BsFacebook } from "react-icons/bs";
import Link from "next/link";

const Socials = [
  {
    title: "Github",
    icon: <BsGithub />,
    link: "https://github.com/mohammedrakib944",
  },
  {
    title: "Youtube",
    icon: <BsYoutube />,
    link: "https://www.youtube.com/@mohammadrakib2809/featured",
  },
  {
    title: "Facebook",
    icon: <BsFacebook />,
    link: "https://www.facebook.com/md.rakib.38/",
  },
  {
    title: "Linkedin",
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/md-rakibuzzaman-246a701b2/",
  },
];

const Footer = () => {
  return (
    <div className="mt-28">
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div>
          <div className="grid grid-flow-col gap-4">
            {Socials.map((data, index) => (
              <div key={index} className="text-xl">
                <a href={data.link} target="_blank">
                  {data.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/blog" className="link link-hover">
            My Blog
          </Link>
          <Link href="/" className="link link-hover">
            Home
          </Link>
          <Link href="/about" className="link link-hover">
            About
          </Link>
          <Link href="/contact" className="link link-hover">
            Contact
          </Link>
          <Link href="/privary" className="link link-hover">
            Privary Policy
          </Link>
        </div>
        <div>
          <p>Copyright (c) 2023 mohammedrakib944</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
