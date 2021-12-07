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
      <div tw="font-semibold">{title}</div>
      <Divider />
      <div tw="h-120 mt-6">{children}</div>
    </>
  );
};
