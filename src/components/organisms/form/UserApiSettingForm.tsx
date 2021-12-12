import 'twin.macro';
import { useForm, useFieldArray } from 'react-hook-form';
import { UserApiSettingArrayField } from 'src/components/molecules/form/UserApiSettingArrayField';
import { Divider } from 'src/components/molecules/Divider';
import { Button } from 'src/components/molecules/Button';
import { IoAlertCircleOutline, IoPersonAdd } from 'react-icons/io5';

type UserApiSetting = {
  userName: string;
  googleApi: string;
};

export type UserApiSettingForm = {
  useApiSettings: UserApiSetting[];
};

export const UserApiSettingForm = () => {
  const { handleSubmit, control } = useForm<UserApiSettingForm>({
    defaultValues: {
      useApiSettings: [{ userName: '', googleApi: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'useApiSettings',
  });

  const addField = () => {
    append({ userName: '', googleApi: '' });
  };

  const removeField = (index: number) => {
    remove(index);
  };

  const doSubmit = (data: UserApiSettingForm) => {
    console.log('data', data);
  };

  return (
    <form tw="relative h-full" onSubmit={handleSubmit(doSubmit)}>
      <div tw="h-96 overflow-scroll px-6 py-6 bg-gray-50">
        {fields.map((field, index) => (
          <UserApiSettingArrayField
            control={control}
            key={field.id}
            index={index}
            removeField={removeField}
          />
        ))}
      </div>

      <div tw="absolute bottom-0 w-full">
        <Divider />
        <div tw="flex items-center">
          <div tw="flex ml-auto">
            <Button
              tw="w-48"
              title={`追加（${fields.length}/20）`}
              icon={<IoPersonAdd size={18} />}
              black
              disable={fields.length > 19}
              onClick={addField}
            />
            <Button tw="w-48 ml-4" title="保存" onClick={() => doSubmit} />
          </div>
        </div>
        <div tw="flex items-center w-92 ml-auto mt-4 text-sm">
          <div tw="fill-current text-red-600">
            <IoAlertCircleOutline size={18} />
          </div>
          <span tw="ml-2">
            更新は保存ボタンを押下することでのみ実行されます
          </span>
        </div>
      </div>
    </form>
  );
};
