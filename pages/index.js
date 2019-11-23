import React from 'react';
// import Link from 'next/link';
import styled from 'styled-components';

import UnderConstruction from '../src/components/UnderConstruction';
// import Layout from '../src/components/Layout';

const Container = styled.div`
  align-items: center;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

const Homepage = () => (
  <Container>
    <UnderConstruction />
  </Container>
);

export default Homepage;
