import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputBlock, TextArea } from "../common";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { getInterestInfo, increaseOrDecreaseBy, setInterest } from "@/redux";
import {
  TInterestInfo,
  interestInfoSchema,
} from "@/validations/InterestInfoSchema";
import { TRAVEL_PREFERENCE } from "@/config";
import { useRouter } from "next/navigation";

const InterestInfo = () => {
  const interestInfo = useSelector(getInterestInfo);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<TInterestInfo>({
    resolver: zodResolver(interestInfoSchema),
    reValidateMode: "onBlur",
    defaultValues: interestInfo,
  });

  const dispatch = useDispatch();
  const handler: SubmitHandler<TInterestInfo> = (value) => {
    dispatch(setInterest(value));
  };

  const submit = async () => {
    const isValid = await trigger();
    if (isValid) {
      router.push("/user");
    }
  };

  const handlePrevious = () => {
    dispatch(increaseOrDecreaseBy(-1));
  };

  return (
    <>
      <h1 className="text-center text-lg font-extrabold mb-4">
        Interest's Details
      </h1>
      <form
        className="space-y-4 max-w-[40rem] mx-auto"
        onSubmit={handleSubmit(handler)}
      >
        <TextArea
          label="Describe yourself"
          {...register("description")}
          error={errors.description?.message}
        />
        <p>Travel Preference</p>
        <div className="grid grid-cols-2 gap-x-3">
          {TRAVEL_PREFERENCE.map((place) => {
            return (
              <InputBlock
                label={place}
                {...register("travelPreference")}
                type="checkbox"
                value={place}
                className="flex items-center"
              />
            );
          })}
        </div>
        {errors.travelPreference?.message && (
          <span className="text-[red] inline-block">
            {errors.travelPreference?.message}
          </span>
        )}
        <div className="grid gap-2 auto-cols-fr grid-flow-col">
          <Button
            size={"lg"}
            className=""
            type="button"
            onClick={handlePrevious}
          >
            Previous
          </Button>
          <Button size={"lg"} className="" type="submit">
            Save
          </Button>
          <Button size={"lg"} onClick={submit} type="button">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default InterestInfo;
