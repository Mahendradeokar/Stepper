import React, { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  error: string | undefined;
  options: string[];
}

const SelectInput = React.forwardRef<
  HTMLSelectElement,
  ComponentProps<"select"> & Props
>(({ className, label, error, children, options, ...rest }, ref) => {
  return (
    <div className={cn("max-w-[25rem] space-y-2", className)}>
      <label htmlFor={rest.name}>{label}</label>
      <select
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...rest}
        ref={ref}
      >
        <option value={"DEFAULT"} hidden disabled selected>
          Please select the value
        </option>
        {options.map((opt) => {
          return <option value={opt}>{opt}</option>;
        })}
      </select>
      {error && (
        <span className="text-[red] inline-block">{error}</span>
      )}
    </div>
  );
});

export default SelectInput;
