"use client";

// Hooks / Packages
import { Tab } from "@headlessui/react";
import Image from "next/image";

// Components
import GalleryTab from "./GalleryTab";

//Types
import { GalleryProps } from "@/types/props";

const Gallery = ({ images }: GalleryProps) => {
  return (
    <Tab.Group as={"div"} className={"flex flex-col-reverse"}>
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className={`grid grid-cols-4 gap-6`}>
          {images.map(image => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className={`aspect-square w-full`}>
        {images.map(image => (
          <Tab.Panel key={image.id}>
            <figure className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                src={image.url}
                fill
                alt={"Thumbnail"}
                className="object-cover origin-center"
              />
            </figure>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
