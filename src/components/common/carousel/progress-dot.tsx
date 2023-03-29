import React from "react";

interface ProgressDotsProps {
  total: number;
  current: number;
  onDotClick: (dot: number) => void;
}

const ProgressDots = (props: ProgressDotsProps) => {
  const generateDots = () => {
    const dots: React.ReactElement[] = [];
    if (props.total <= 1) {
      return <React.Fragment />;
    }

    for (let i = 0; i < props.total; i++) {
      const isCurrentDot: boolean = i + 1 === props.current;
      dots.push(
        <div
          className={` cursor-pointer w-2 h-2  rounded-full ${
            isCurrentDot ? "bg-secondary" : "bg-[#0AD8FF66]"
          }`}
          onClick={() => props.onDotClick(i)}
        />
      );
    }
    return dots;
  };

  return (
    <div className={"flex items-center justify-center mx-2 my-8 gap-2"}>
      {generateDots()}
    </div>
  );
};

export default ProgressDots;
