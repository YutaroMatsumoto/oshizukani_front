import 'twin.macro';
import { useForm, useFieldArray } from 'react-hook-form';
import { UserApiSettingArrayField } from 'src/components/molecules/form/UserApiSettingArrayField';
import { Divider } from 'src/components/molecules/Divider';
import { Button } from 'src/components/molecules/Button';
import { IoPersonAdd } from 'react-icons/io5';

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
      <div tw="h-100 overflow-scroll px-6">
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
        <div tw="flex float-right">
          <Button
            title="追加"
            icon={<IoPersonAdd size={18} />}
            black
            onClick={addField}
          />
          <Button tw="ml-4" title="保存" onClick={() => doSubmit} />
        </div>
      </div>
    </form>
  );
};
