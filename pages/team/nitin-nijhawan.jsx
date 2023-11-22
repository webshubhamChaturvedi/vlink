
import { useEffect } from "react";
import { useRouter } from "next/router";

const AboutUsRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/about-us/team/nitin-nijhawan");
  }, []);

  return null;
};

export default AboutUsRedirect;
