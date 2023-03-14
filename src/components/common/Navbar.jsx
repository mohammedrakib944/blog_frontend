import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 border border-gray-500/50 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Articles</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/dashboard/create">Write Article</Link>
            </li>
            <li>
              <Link href="/admin">Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/" className="normal-case text-xl font-bold">
          <span className="text-success">Md.</span>Rakib
        </Link>
      </div>
      <div className="navbar-end">
        <Link href="/blog">
          <button className="btn btn-sm btn-success rounded-full flex items-center gap-2 md:mr-3">
            <span className="text-[12px] md:text-sm uppercase">
              ALL Articles
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
