import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <Helmet>
      <title>SpaceX Launch Programs</title>

      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="description"
        content="React SpaceX app with server side rendering"
      />

      <link
        rel="shortcut icon"
        // href={`${process.env.PUBLIC_URL}/favicon.ico?v1`}
        href="https://images2.imgbox.com/ff/81/EOWojaSj_o.png"
      />
    </Helmet>
  );
};

export default Head;
