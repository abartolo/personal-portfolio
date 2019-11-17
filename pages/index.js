import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Layout from '../src/components/Layout';

const Index = ({ shows }) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {shows.map((show) => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map((entry) => entry.show),
  };
};

export default Index;
