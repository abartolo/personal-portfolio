import React, { useCallback } from "react";

export const ResumeButton = () => {
  const openResume = useCallback(() => {
    window.open("/pdf/Resume-Alexander-Bartolo.pdf", "_blank");
  }, []);

  return (
    <button
      className="ml-2 p-2 bg-blue-dark hover:bg-orange text-white rounded-md text-md"
      onClick={openResume}
    >
      Resume
    </button>
  );
};
