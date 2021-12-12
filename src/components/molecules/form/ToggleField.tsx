import 'twin.macro';
import React from 'react';
import { ToggleButton } from 'src/components/molecules/ToggleButton';
import { BiHelpCircle } from 'react-icons/bi';

interface Props {
  toggleOn: boolean;
  onClick: () => void;
  onSubmit?: () => void;
  title: string;
  helpMessage?: string;
}

// formは利用していない
export const ToggleField = ({
  toggleOn,
  onClick,
  onSubmit,
  title,
  helpMessage,
}: React.PropsWithChildren<Props>) => {
  return (
    <>
      <div tw="flex items-center">
        <span tw="text-sm font-medium">{title}</span>
        <div tw="flex ml-auto">
          <ToggleButton
            toggleOn={toggleOn}
            onClick={onClick}
            onSubmit={onSubmit}
          />
        </div>
      </div>
      {helpMessage && (
        <div tw="flex ">
          <BiHelpCircle tw="fill-current text-gray-400" size={18} />
          <span tw="ml-2 text-gray-400 text-sm font-medium">{helpMessage}</span>
        </div>
      )}
    </>
  );
};
