import React, { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  error: string | undefined;
}

const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  ComponentProps<"textarea"> & Props
>(({ className, label, error, children, ...rest }, ref) => {
  return (
    <div className={cn("max-w-[25rem] space-y-1", className)}>
      <label htmlFor={rest.name}>{label}</label>
      <div className="ml-1 flex">
        <textarea
          className={cn(
            "flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          rows={0}
          {...rest}
          ref={ref}
        ></textarea>
      </div>
        {error && <span className="text-[red] inline-block">{error}</span>}
    </div>
  );
});

export default TextArea;
