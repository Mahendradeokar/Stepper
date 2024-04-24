import React, { ComponentProps, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface Props {
  label: string;
  error?: string | undefined;
  passwordViewToggler?: boolean;
}

type TReturnPasswordView = (shouldShow: boolean) => "text" | "password";

const returnPasswordView: TReturnPasswordView = (shouldShow) => {
  return shouldShow ? "text" : "password";
};

const InputBlock = React.forwardRef<
  HTMLInputElement,
  ComponentProps<"input"> & Props
>(
  (
    {
      className,
      label,
      error,
      children,
      passwordViewToggler = false,
      type,
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <div className={cn("max-w-[25rem] space-y-1", className)}>
        <label htmlFor={rest.name}>{label}</label>
        <div className="ml-1 flex">
          <input
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            {...rest}
            type={passwordViewToggler ? returnPasswordView(showPassword) : type}
            ref={ref}
          />
          {passwordViewToggler && (
            <Button
              type="button"
              variant={"ghost"}
              className="w-[5ch]"
              size={"sm"}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "Hide" : "Show"}
            </Button>
          )}
        </div>
        {error && (
          <span className="text-[red] inline-block max-w-[20ch]">{error}</span>
        )}
      </div>
    );
  }
);

export default InputBlock;
