import { useEffect } from "react";
import { useRouter } from "next/router";

const CareerRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/resources/career");
  }, []);

  return null;
};

export default CareerRedirect;
