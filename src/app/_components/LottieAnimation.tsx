"use client"; // Client-side component

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

interface LottieAnimationProps {
  src: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ src }) => {
  return (
    <DotLottieReact
      src={src}
      loop
      autoplay
    />
  );
};

export default LottieAnimation;
