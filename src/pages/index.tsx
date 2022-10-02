import type { NextPage } from "next";
import { PageWrapper } from "../components/PageWrapper";

const Home: NextPage = () => {
  return (
    <PageWrapper title="Home | Alexander Bartolo">
      <div className="flex w-full bg-gray p-4 min-h-[500px]">
        <div className="w-full text-center">
          <p className="text-white">Photo</p>
          <p className="text-white">Description about myself</p>
          <p className="text-white">Resume CTA</p>
        </div>
      </div>

      <div className="flex w-full bg-blue p-4 min-h-[500px]">
        <div className="w-full text-center">
          <p className="text-white">Work Experience</p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
