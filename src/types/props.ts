import { Category, Billboard, Product } from "@/types/data";
import { MouseEventHandler } from "react";
// Cpmponents
type NavBarProps = {
  data: Category[];
};

type BillboardProps = {
  data: Billboard;
};

type ProductListProps = {
  title: string;
  items: Product[];
};

type ProductCardProps = {
  data: Product;
};

type IconButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
};

type CurrencyProps = {
  value?: number | string;
};

// Layouts
type ContainerProps = {
  children: React.ReactNode;
};

export type {
  ContainerProps,
  NavBarProps,
  BillboardProps,
  ProductListProps,
  ProductCardProps,
  IconButtonProps,
  CurrencyProps,
};
