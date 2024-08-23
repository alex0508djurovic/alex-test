import React, { FC } from "react";

interface Props {
  value: string | number | undefined;
  type: string;
  name: string;
  onChange: (e: any) => void;
  specStyle?: string;
}

export const TextField: FC<Props> = ({ specStyle, ...restProps }) => {
  return (
    <input
      className={`border-2 pl-2 border-blue-900 mr-[0.5%] ${specStyle}`}
      {...restProps}
      placeholder={restProps.name}
      autoComplete="off"
    />
  );
};
