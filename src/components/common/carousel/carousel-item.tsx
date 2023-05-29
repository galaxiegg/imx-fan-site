import React from "react";

interface CarouselItemProps {
  children: React.ReactNode;
  width?: string;
}

export const CarouselItem = (props: CarouselItemProps) => {
  return (
    <div
      className={"inline-flex items-center justify-center gap-12"}

    >
      {props.children}
    </div>
  );
};
