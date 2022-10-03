import type { NextPage } from "next";
import { IntroSection } from "../components/IntroSection";
import { PageWrapper } from "../components/PageWrapper";

const Home: NextPage = () => {
  return (
    <PageWrapper title="Home | Alexander Bartolo">
      <IntroSection />
      <div className="flex w-full bg-blue p-4 min-h-[500px]">
        <div className="w-full text-center">
          <p className="text-white">Work Experience</p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
