import { useEffect } from "react";
import { useRouter } from "next/router";

const Faq = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/about-us/faq");
  }, []);

  return null;
};

export default Faq;
