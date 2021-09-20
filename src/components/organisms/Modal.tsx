import "twin.macro";

interface Props {
  onClick: () => void;
}

export const Modal = ({ onClick }: Props) => {
  return (
    <div tw="fixed top-0 left-0 flex items-center justify-center w-full h-full z-10">
      <div tw="absolute bg-black bg-opacity-50 inset-0" onClick={onClick}></div>
      <div tw="h-1/2 w-1/2 z-10 bg-white cursor-default rounded-md">
        <div tw="flex h-full">
          <div tw="w-48 bg-gray-100 rounded-l-md">
            <div tw="p-2.5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
