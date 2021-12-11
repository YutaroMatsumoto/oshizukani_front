import 'twin.macro';
import React from 'react';
import { Divider } from 'src/components/molecules/Divider';

interface Props {
  title?: string;
}

export const ModalContentTemplate = ({
  title,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <>
      <div tw="px-2 font-semibold">{title}</div>
      <Divider />
      <div tw="h-124 mt-6">{children}</div>
    </>
  );
};
