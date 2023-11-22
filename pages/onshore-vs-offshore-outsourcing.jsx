import { useEffect } from "react";
import { useRouter } from "next/router";

const Redirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/blog/onshore-vs-offshore-outsourcing");
  }, []);

  return null;
};

export default Redirect;
