import React from 'react';
import 'twin.macro';

interface Props {
  label: string;
  className?: string;
}

export const FormField = ({
  label,
  className,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <div tw="flex items-center" className={className}>
      <label tw="font-medium w-28">{label}</label>
      <div tw="ml-4 w-full">{children}</div>
    </div>
  );
};
