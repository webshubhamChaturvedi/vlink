import { useEffect } from "react";
import { useRouter } from "next/router";

const CorporateRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/about-us/corporate-social-responsibility");
  }, []);

  return null;
};

export default CorporateRedirect;
