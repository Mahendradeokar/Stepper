"use client";

import { InterestInfo, SignUpForm, personalInfoForm } from "@/components/Forms";
import { Stepper } from "@/components/common";
import { getStepper } from "@/redux";
import { useSelector } from "react-redux";

const numberOfSteppers = 3;

const stepperComponentConfig = [SignUpForm, personalInfoForm, InterestInfo];

export default function Home() {
  const stepper = useSelector(getStepper);
  const Component = stepperComponentConfig[stepper];
  return (
    <main className="h-screen grid place-content-center">
      <div className="max-w-[50rem] md:min-w-[50rem] border-black rounded-md shadow-xl p-7 space-y-5">
        <div className="flex gap-4 justify-between">
          {Array.from({ length: numberOfSteppers }).map((_, index) => {
            const isActive = index == stepper;
            return (
              <Stepper
                isActive={isActive}
                label={String(index + 1)}
                key={index}
              />
            );
          })}
        </div>

        <div className="grid place-content-center gap-3">
          <Component />
        </div>
      </div>
    </main>
  );
}
