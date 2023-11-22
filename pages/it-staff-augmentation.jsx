import { useEffect } from "react";
import { useRouter } from "next/router";

const ItRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/services/it-staff-augmentation");
  }, []);

  return null;
};

export default ItRedirect;
