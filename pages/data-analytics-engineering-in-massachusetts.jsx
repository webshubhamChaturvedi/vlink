import { useEffect } from "react";
import { useRouter } from "next/router";

const DataAnalysisTeamsRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/locations/data-analytics-engineering-in-massachusetts");
  }, []);

  return null;
};

export default DataAnalysisTeamsRedirect;
