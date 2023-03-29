import React from "react";

interface CarouselItemProps {
  children: React.ReactNode;
  width?: string;
}

export const CarouselItem = (props: CarouselItemProps) => {
  return (
    <div
      className={"inline-flex items-center justify-center gap-4"}
      style={{ width: props.width }}
    >
      {props.children}
    </div>
  );
};
