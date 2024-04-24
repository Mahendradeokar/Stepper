import { cn } from "@/lib/utils";

interface StepperProps {
  isActive: boolean;
  label: string;
}

export default function Stepper({ isActive, label }: Readonly<StepperProps>) {
  const activeClass = "bg-black text-white";
  const notActive = "border ";
  return (
    <div
      className={cn(
        " w-10 aspect-square shadow-md rounded-full grid place-content-center",
        isActive ? activeClass : notActive
      )}
    >
      <span>{label}</span>
    </div>
  );
}
