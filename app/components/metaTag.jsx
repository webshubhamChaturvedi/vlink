import React from "react";

const Metatag = ({ content }) => {
  return (
    <>
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={content} />
      <meta property="og:image:secure_url" content={content} />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:site_name" content="VLink" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};

export default Metatag;
