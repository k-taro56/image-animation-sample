"use client";

const BackgroundVideo = () => {
  return (
    <div className="relative w-full h-screen">
      <video autoPlay loop muted className="absolute w-full h-full object-cover">
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <h1 className="text-black text-4xl font-bold">サンプルテキスト</h1>
      </div>
    </div>
  );
};

export default BackgroundVideo;
