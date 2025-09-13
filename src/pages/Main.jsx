import { Card } from "../components/main/Card";
import { TopContent } from "../components/main/TopContent";

export const Main = () => {
  return (
    <>
      <TopContent />
      <div className="bg-back-color min-h-[100vh] px-[33px] lg:px-[165px] flex items-center justify-center">
        <Card />
      </div>
    </>
  );
};
