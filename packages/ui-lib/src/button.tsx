import { cx } from "@repo/styled/css";
import { button } from "@repo/styled/recipes";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ children, className }: ButtonProps) => {
  return <button className={cx(button(), className)}>{children}</button>;
};
