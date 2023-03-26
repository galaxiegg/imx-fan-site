import React from "react";
import classnames from "classnames";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  outlined?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { outlined, ...restProps } = props;
  return (
    <button
      {...restProps}
      className={classnames(
        props.className || "",
        "rounded-full py-3 px-10 flex items-center justify-center text-center",
        {
          "btn-secondary": outlined,
          "btn-primary": !outlined,
        }
      )}
    >
      {props.children}
    </button>
  );
};
