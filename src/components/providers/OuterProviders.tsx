// Hooks / Packages

// Types
import { ContainerProps } from "@/types/props";
import StoreProvider from "./StoreProvider";

const OuterProviders = ({ children }: ContainerProps) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default OuterProviders;
