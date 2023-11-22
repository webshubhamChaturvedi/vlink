import { useEffect } from "react";
import { useRouter } from "next/router";

const EducationRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/industries/education");
  }, []);

  return null;
};

export default EducationRedirect;
