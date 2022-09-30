import type { NextPage } from "next";
import { PageWrapper } from "../components/PageWrapper";

const Home: NextPage = () => {
  return (
    <PageWrapper title="Home | Alexander Bartolo">
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </PageWrapper>
  );
};

export default Home;
