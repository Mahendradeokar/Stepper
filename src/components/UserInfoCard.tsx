import { camelCaseToHeading, cn } from "@/lib/utils";
import { TPersonalInfo, TSignUpSchema } from "@/validations";
import { TInterestInfo } from "@/validations/InterestInfoSchema";
import { ComponentProps } from "react";

type Props = {
  field: string;
  value: string;
} & ComponentProps<"div">;

function Cart({ field, value }: Props) {
  return (
    <div className="flex gap-1 border border-spacing-1 border-gray-400 px-2">
      <h4 className="min-w-[20ch] border-r-2 border-gray-400">{camelCaseToHeading(field)}</h4>
      <h4>{value}</h4>
    </div>
  );
}

type TInfoObject = TSignUpSchema | TPersonalInfo | TInterestInfo;
type TUserInfoCardProps = {
  heading: string;
  infoObject: TInfoObject;
} & ComponentProps<"div">;

export default function UserInfoCard({
  heading,
  infoObject,
  className,
}: TUserInfoCardProps) {
  return (
    <>
      <h1 className="text-center text-lg font-bold">{heading}</h1>
      <div className={cn("grid mx-auto p-6 grid-cols-1", className)}>
        {Object.entries(infoObject).map(([key, value]) => {
          if (Array.isArray(value)) {
            return <Cart field={key} value={value.join("")} />;
          } else if (typeof value === "string") {
            return <Cart field={key} value={value} />;
          }
          return <Cart field={key} value={JSON.stringify(value)} />;
        })}
      </div>
    </>
  );
}
