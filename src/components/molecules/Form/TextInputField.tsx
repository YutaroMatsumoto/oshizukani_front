import 'twin.macro';

interface Props {
  value: string;
  onChange: () => void;
}

export const TextInputField = ({ value, onChange }: Props) => {
  return (
    <input
      tw="w-full border-solid border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:border focus:border-green-200"
      value={value}
      onChange={onChange}
    />
  );
};
