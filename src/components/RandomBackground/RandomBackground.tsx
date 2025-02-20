import { Ball } from "../SVG";

export function RandomBackground() {
  const commonClasses =
    "absolute z-backdrop w-[80rem] h-[80rem] lg:w-[100rem] lg:h-[100rem] rounded-full fill-ball lg:[--animation-duration: 20s] translate-x-[-50%] translate-y-[-50%]";

  return (
    <div className="absolute z-backdrop h-full w-full overflow-hidden">
      <Ball className={`${commonClasses} animate-ball-move`} />
      <Ball className={`${commonClasses} animate-ball-move-inverted`} />
    </div>
  );
}
