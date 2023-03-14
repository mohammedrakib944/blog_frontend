import { createContext } from "react";
import { useState } from "react";

const blogContext = createContext();

export const ContextProdiver = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const values = {
    posts,
    setPosts,
  };
  return <blogContext.Provider value={values}>{children}</blogContext.Provider>;
};

export default blogContext;
