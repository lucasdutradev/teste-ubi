import { ReactNode } from "react";

export interface PropChild
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
