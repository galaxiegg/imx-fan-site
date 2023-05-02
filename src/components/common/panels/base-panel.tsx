import React from "react";
import classNames from "classnames";

interface BasePanelProps {
  children: any,
  className?: string,
}

export function BasePanel(props: BasePanelProps) {
  return (
    <div className={classNames("rounded-md p-4 mb-4 bg-gray-500 bg-opacity-20", props.className)}>
      {props.children}
    </div>
  );
}
