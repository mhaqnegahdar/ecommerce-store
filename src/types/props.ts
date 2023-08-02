import { Category, Billboard, Product, Image } from "@/types/data";
import { MouseEventHandler } from "react";
import SingleProduct from "./../app/(routes)/product/[productId]/page";
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

type GalleryProps = {
  images: Image[];
};

type GalleryTabProps = {
  image: Image;
};

type InfoProps = {
  data: Product;
};

// Layouts
type ContainerProps = {
  children: React.ReactNode;
};

// Pages
type SingleProductProps = {
  params: {
    productId: string;
  };
};

export type {
  ContainerProps,
  NavBarProps,
  BillboardProps,
  ProductListProps,
  ProductCardProps,
  IconButtonProps,
  CurrencyProps,
  SingleProductProps,
  GalleryProps,
  GalleryTabProps,
  InfoProps,
};
