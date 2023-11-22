import { useEffect } from "react";
import { useRouter } from "next/router";

const ContactRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/about-us/contact-us");
  }, []);

  return null;
};

export default ContactRedirect;
