import tw from 'twin.macro';
import { Control, Controller } from 'react-hook-form';
import { UserApiSettingForm } from 'src/components/organisms/form/UserApiSettingForm';
import { TextInputField } from 'src/components/molecules/form/TextInputField';
import { FormField } from 'src/components/molecules/form/FormField';
import { IoPersonRemove } from 'react-icons/io5';

interface Props {
  control: Control<UserApiSettingForm>;
  index: number;
  removeField: (index: number) => void;
}

export const UserApiSettingArrayField = ({
  control,
  index,
  removeField,
}: Props) => {
  return (
    // Controllerにrenderが必須になっている？
    <div tw="flex items-center" css={[index !== 0 && tw`mt-8`]}>
      <div tw="w-full">
        <FormField label="名前">
          <Controller
            render={({ field }) => (
              <TextInputField value={field.value} onChange={field.onChange} />
            )}
            name={`useApiSettings.${index}.userName`}
            control={control}
          />
        </FormField>
        <FormField label="GoogleAPI" tw="mt-2">
          <Controller
            render={({ field }) => (
              <TextInputField value={field.value} onChange={field.onChange} />
            )}
            name={`useApiSettings.${index}.googleApi`}
            control={control}
          />
        </FormField>
      </div>
      <div tw="ml-4 cursor-pointer" onClick={() => removeField(index)}>
        <IoPersonRemove size={20} />
      </div>
    </div>
  );
};
