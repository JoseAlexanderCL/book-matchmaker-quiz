import type { ReactNode } from "react";

interface CozySceneProps {
  children?: ReactNode;
}

export function CozyScene({ children }: CozySceneProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-night -z-20" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-reflection -z-10" />
      <img
        src="/moon.svg"
        alt="Luna"
        className="absolute top-4 right-4 w-24 h-24 z-10"
      />
      <img
        src="/cypresses.svg"
        alt="Cipreses"
        className="absolute bottom-20 left-0 w-full z-20"
      />
      <img
        src="/rocks.svg"
        alt="Rocas"
        className="absolute bottom-0 left-0 w-full z-30"
      />
      <img
        src="/boy-fox.svg"
        alt="Niño y zorro"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-40 w-32"
      />
      <div className="relative z-50">{children}</div>
    </div>
  );
}
