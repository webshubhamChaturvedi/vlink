import { useEffect } from "react";
import { useRouter } from "next/router";

const NearShoreRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/services/it-staff-augmentation");
  }, []);

  return null;
};

export default NearShoreRedirect;
