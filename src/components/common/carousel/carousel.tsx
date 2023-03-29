import React from "react";
import ProgressDots from "./progress-dot";

interface CarouselProps {
  children: React.ReactNode;
  show: number;
  showLeftRightIndicator?: boolean;
  showProgressDots?: boolean;
  current?: number;
  totalCards?: number;
}

const Carousel = (props: CarouselProps) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [touchPosition, setTouchPosition] = React.useState<number | undefined>(
    undefined
  );
  const [currentDotPosition, setCurrentDotPosition] = React.useState<number>(
    props.current || 1
  );

  const length: number = React.useMemo(
    () => React.Children.count(props.children),
    [props.children]
  );
  const percentage: number = React.useMemo(
    () => (activeIndex / length) * 100,
    [activeIndex]
  );

  const nextItem = () => {
    const isLast: boolean = length - props.show === activeIndex;
    if (isLast) {
      setActiveIndex(0);
    } else if (activeIndex < length - props.show) {
      setActiveIndex((prevState: number) => prevState + 1);
    }
  };

  const previousItem = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevState: number) => prevState - 1);
    } else {
      setActiveIndex(length - props.show);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchPosition) {
      const diff: number = touchPosition - e.touches[0].clientX;
      if (diff > 5) {
        nextItem();
      }
      if (diff < -5) {
        previousItem();
      }
      setTouchPosition(undefined);
    }
  };

  const handleDotsClick = (dot: number) => {
    setActiveIndex(dot);
    setCurrentDotPosition(dot + 1);
  };

  return (
    <div
      className={`w-full overflow-hidden`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div
        className={` whitespace-nowrap`}
        style={{
          transition: "transform 0.3s",
          transform: `translateX(-${activeIndex * (100 / props.show)}%)`,
        }}
      >
        {React.Children.map(
          props.children,
          (child: React.ReactNode, index: number) => {
            return child ? (
              React.cloneElement(child as React.ReactElement, {
                width: `${100 / props.show}%`,
              })
            ) : (
              <React.Fragment />
            );
          }
        )}
      </div>
      {props.showLeftRightIndicator && (
        <div className={`carousel-indicators`}>
          <div className={"indicator-left"} onClick={previousItem}>
            Prev
          </div>
          <div className={"indicator-right"} onClick={nextItem}>
            Next
          </div>
        </div>
      )}
      {props.showProgressDots && props.totalCards && (
        <ProgressDots
          current={currentDotPosition}
          total={props.totalCards}
          onDotClick={handleDotsClick}
        />
      )}
    </div>
  );
};

export default Carousel;
