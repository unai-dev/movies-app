import type { FC } from "react";

interface Props {
  header: string;
  description?: string;
}
export const CustomHeader: FC<Props> = ({ header, description }) => {
  return (
    <>
      <div className="m-5 w-full justify-center text-center  ">
        <h1 className="font-bold text-4xl ">{header}</h1>
        <p className="text-md mt-2 ">{description}</p>
      </div>
    </>
  );
};
