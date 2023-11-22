import { useEffect } from "react";
import { useRouter } from "next/router";

const Redirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/resources/whitepapers/common-edi-challenges-and-how-to-overcome-them-healthcare-edi-simplified");
  }, []);

  return null;
};

export default Redirect;
