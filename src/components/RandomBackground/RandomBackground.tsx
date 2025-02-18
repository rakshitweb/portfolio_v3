export function RandomBackground() {
  const commonClasses =
    "absolute w-[35rem] h-[35rem] lg:w-[45rem] lg:h-[45rem] rounded-full bg-ball lg:[--animation-duration: 20s]";

  return (
    <div className="absolute z-backdrop h-full w-full overflow-hidden">
      <div className={`${commonClasses} animate-ball-move`} />
      <div className={`${commonClasses} animate-ball-move-inverted`} />
    </div>
  );
}
