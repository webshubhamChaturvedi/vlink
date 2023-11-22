import { useEffect } from "react";
import { useRouter } from "next/router";

const WhitePaperRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/resources/whitepapers");
  }, []);

  return null;
};

export default WhitePaperRedirect;
