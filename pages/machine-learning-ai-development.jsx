import { useEffect } from "react";
import { useRouter } from "next/router";

const ItRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/services/machine-learning-ai-development");
  }, []);

  return null;
};

export default ItRedirect;
