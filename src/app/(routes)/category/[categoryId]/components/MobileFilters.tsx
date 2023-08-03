"use client";

// Hooks / Packages
import { useState } from "react";

//Components
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { Dialog } from "@headlessui/react";
import Filter from "./Filter";
// Types
import { MobileFiltersProps } from "@/types/props";

// Icons
import { Plus, X } from "lucide-react";

const MobileFilters = ({ colors, sizes }: MobileFiltersProps) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        onClose={onClose}
        className="relative z-40 lg:hidden"
      >
        {/* Background */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        {/* Dialog Position */}
        <div className="fixed inset-0 z-40">
          <Dialog.Panel className="relative ms-auto flex h-full w-full max-w-xs flex-col overflow-y-auto py-4 pb-6 bg-white shadow-xl">
            {/* Close Button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} onClick={onClose} />} />
            </div>
            {/* Render Filters */}
            <div className="p-4">
              <Filter valueKey="sizeId" name={"Sizes"} data={sizes} />
              <Filter valueKey="colorId" name={"Colors"} data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
