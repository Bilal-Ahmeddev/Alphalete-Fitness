import React from "react";
import { useParams } from "react-router-dom";

const Videos = () => {
  const { videoId } = useParams(); // Fetch videoId from URL

  if (!videoId) {
    return (
      <div className="text-white text-center mt-10">
        No video found.
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-full max-w-3xl bg-black rounded-lg overflow-hidden">
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`}
          title="Workout Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Videos;
