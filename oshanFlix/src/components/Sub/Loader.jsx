/* eslint-disable react/prop-types */
import { Player } from "@lottiefiles/react-lottie-player";

const Loader = (props) => {
  return (
    <>
      <Player
        src="/lottie/loader.json"
        className={props.className || "w-[50px]"}
        loop
        autoplay
      />
    </>
  );
};

export default Loader;
