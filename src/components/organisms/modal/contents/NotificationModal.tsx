import 'twin.macro';
import { NotificationForm } from 'src/components/organisms/form/NotificationForm';
import { ModalContentTemplate } from 'src/components/templates/ModalContentTemplate';

export const NotificationModal = () => {
  return (
    <ModalContentTemplate title="通知設定">
      <NotificationForm />
    </ModalContentTemplate>
  );
};
