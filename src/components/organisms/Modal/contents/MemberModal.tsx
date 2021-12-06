import 'twin.macro';
import { UserApiSettingForm } from 'src/components/organisms/form/UserApiSettingForm';

export const MemberModal = () => {
  return (
    <>
      <div>Member Modal</div>
      <div tw="h-125 mt-6">
        <UserApiSettingForm />
      </div>
    </>
  );
};
