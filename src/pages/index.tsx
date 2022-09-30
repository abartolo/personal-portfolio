import type { NextPage } from "next";
import { PageWrapper } from "../components/PageWrapper";

const Home: NextPage = () => {
  return (
    <PageWrapper title="Home | Alexander Bartolo">
      <div className="flex w-full bg-blue-500 p-4">
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </div>
    </PageWrapper>
  );
};

export default Home;
