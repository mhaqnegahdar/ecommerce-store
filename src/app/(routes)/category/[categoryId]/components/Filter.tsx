"use client";

// Hooks / Packages
import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";

// Types
import { FilterProps } from "@/types/props";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const Filter = ({ valueKey, name, data }: FilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedValue = searchParams.get(valueKey);

  // Actions
  //   On Filter Click
  const onClick = (id: string) => {
    const currentSearchParams = qs.parse(searchParams.toString());

    // Add new Filters to current url
    const query = {
      ...currentSearchParams,
      [valueKey]: id,
    };

    // Remove filter if already selected
    if (currentSearchParams[valueKey] === id) {
      query[valueKey] = null;
    }

    // Generate url
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map(filter => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                selectedValue === filter.id ? "bg-black text-white" : ""
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
