import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputBlock, TextArea } from "../common";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserSignUpDetails,
  increaseOrDecreaseBy,
  setSignUpDetails,
} from "@/redux";
import { signUpSchema } from "@/validations";
import type { TSignUpSchema } from "@/validations";

const SignUpForm = () => {
  const signUpValues = useSelector(getUserSignUpDetails);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
    // mode: "onBlur"
    reValidateMode: "onBlur",
    defaultValues: signUpValues,
  });

  const dispatch = useDispatch();
  const handler: SubmitHandler<TSignUpSchema> = (value) => {
    dispatch(setSignUpDetails(value));
    dispatch(increaseOrDecreaseBy(1));
  };

  return (
    <>
      <h1 className="text-center text-lg font-extrabold mb-4">
        Sign Up Details
      </h1>
      <form className="grid auto-cols-fr grid-flow-row lg:grid-cols-2 gap-3" onSubmit={handleSubmit(handler)}>
        <InputBlock
          label="User Name"
          {...register("username")}
          error={errors.username?.message}
        />
        <InputBlock
          label="Email"
          {...register("email")}
          error={errors.email?.message}
        />
        <InputBlock
          label="Phone Number"
          {...register("number")}
          error={errors.number?.message}
        />
        {/* make it text area */}
        <TextArea
          label="Address"
          {...register("address")}
          error={errors.address?.message}
        />
        <InputBlock
          label="Password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />
        <InputBlock
          type="password"
          label="Confirm Password"
          {...register("cPassword")}
          passwordViewToggler
          error={errors.cPassword?.message}
        />

        <Button size={"lg"} className="col-span-2" type="submit">
          Next
        </Button>
      </form>
    </>
  );
};

export default SignUpForm;
