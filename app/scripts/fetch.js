const apiEndpoint = (url) => {
  try {
    return `${process.env.NEXT_PUBLIC_API_URL}/${url
      .split("/")
      .filter((v) => v !== "")
      .join("/")}`;
  } catch (err) {
    return null;
  }
};
export { apiEndpoint };
