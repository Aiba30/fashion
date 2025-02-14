import { useRef } from "react";

export const Video = () => {
  const videoRef = useRef(null);
  return (
    <>
      <video ref={videoRef} width="560" controls>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Ваш браузер не поддерживает видео.
      </video>
      <button
        style={{
          marginRight: "10px",
          padding: "10px 20px",
          background: "grey",
        }}
        onClick={() => videoRef.current.play()}
      >
        play
      </button>
      <button
        style={{ padding: "10px 20px", background: "grey" }}
        onClick={() => videoRef.current.pause()}
      >
        stop
      </button>
    </>
  );
};
