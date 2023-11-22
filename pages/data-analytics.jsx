import { useEffect } from "react";
import { useRouter } from "next/router";

const DataAnalysisTeamsRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/services/data-analytics");
  }, []);

  return null;
};

export default DataAnalysisTeamsRedirect;
