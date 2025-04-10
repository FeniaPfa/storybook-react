import "./Button.css";

type ButtonProps = {
  style?: "filled" | "outlined";
  size?: "small" | "medium" | "large";
  label: string;
};

export const Button = ({
  style = "filled",
  size = "small",
  label,
}: ButtonProps) => {
  const classNames = ["button", `button--${style}`, `button--${size}`].join(
    " "
  );

  return <button className={classNames}>{label}</button>;
};
