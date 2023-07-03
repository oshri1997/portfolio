import React from "react";

const DownloadCV = () => {
  return (
    <div className="mt-4 cursor-default rounded-2xl bg-bluep px-4 py-2 text-center text-sm uppercase duration-100 ease-in-out hover:bg-bluep/90 md:ml-10 md:mt-0 ">
      <a className="text-white" href="/Oshri_Moalem_CV.pdf" download="Oshri_Moalem_CV">
        Download CV
      </a>
    </div>
  );
};

export default DownloadCV;
