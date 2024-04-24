import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputBlock, SelectInput } from "../common";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  getPersonalInfo,
  increaseOrDecreaseBy,
  setPersonalInfo,
} from "@/redux";
import { PersonalInfoSchema } from "@/validations";
import type { TPersonalInfo } from "@/validations";
import { COUNTRY_OF_ORIGIN } from "@/config";

const PersonalInfo = () => {
  const personalInfo = useSelector(getPersonalInfo);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TPersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
    reValidateMode: "onBlur",
    defaultValues: personalInfo,
  });

  const dispatch = useDispatch();
  const handler: SubmitHandler<TPersonalInfo> = (value) => {
    dispatch(setPersonalInfo(value));
    dispatch(increaseOrDecreaseBy(1));
  };

  const handlePrevious = () => {
    dispatch(increaseOrDecreaseBy(-1));
  };

  return (
    <>
      <h1 className="text-center text-lg font-extrabold mb-4">
        Personal Details
      </h1>
      <form
        className="space-y-4 w-[20rem] mx-auto"
        onSubmit={handleSubmit(handler)}
      >
        <InputBlock
          label="Date Of Birth"
          {...register("DOB")}
          type="date"
          error={errors.DOB?.message}
        />
        <SelectInput
          error={errors.countryOfOrigin?.message}
          label="Select Country of Origin"
          {...register("countryOfOrigin")}
          options={COUNTRY_OF_ORIGIN}
        />
        <p>Relationship Status</p>
        <div className="flex gap-2 justify-between">
          <InputBlock
            label="Married"
            {...register("relationshipStatus")}
            type="radio"
            value={"yes"}
            className="flex justify-center items-center"
          />
          <InputBlock
            label="Unmarried"
            {...register("relationshipStatus")}
            value={"no"}
            type="radio"
            className="flex justify-center items-center"
          />
        </div>
        {errors.relationshipStatus?.message && (
          <span className="text-[red] inline-block">
            {errors.relationshipStatus?.message}
          </span>
        )}
        <div className="grid auto-cols-fr grid-flow-col gap-2">
          <Button
            size={"lg"}
            className="grow"
            type="button"
            onClick={handlePrevious}
          >
            Previous
          </Button>
          <Button size={"lg"} className="grow" type="submit">
            Next
          </Button>
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;
