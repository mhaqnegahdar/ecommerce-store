// Hooks / Packages
import { Tab } from "@headlessui/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Types
import { GalleryTabProps } from "@/types/props";

const GalleryTab = ({ image }: GalleryTabProps) => {
  return (
    <Tab
      className={`relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white`}
    >
      {({ selected }) => (
        <div>
          <figure className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              src={image.url}
              fill
              className="object-cover object-center"
              alt="Thumbnail"
            />
          </figure>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
