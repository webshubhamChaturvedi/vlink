import { useEffect } from "react";
import { useRouter } from "next/router";

const CaseStudyRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/case-study");
  }, []);

  return null;
};

export default CaseStudyRedirect;
