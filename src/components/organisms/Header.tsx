import 'twin.macro';
import { useContext, useCallback } from 'react';
import { Button } from 'src/components/molecules/Button';
// import { Tab } from 'src/components/organisms/Tab';
import { Modal } from 'src/components/organisms/modal/Modal';
import {
  ModalContext,
  useModalDispatchContext,
} from 'src/contexts/ModalContextProvider';
import { RiUserSettingsFill } from 'react-icons/ri';

export const Header = () => {
  const auth = true; // 暫定対応
  const context = useContext(ModalContext);
  const modalDispatch = useModalDispatchContext();
  const showMember = useCallback(() => modalDispatch({ type: 'account' }), []);

  return (
    <header tw="flex items-center py-4 px-14 w-full h-16 fixed bg-white z-10">
      <div
        tw="flex items-center font-black text-green-400 cursor-pointer"
        onClick={() => console.log('Click Logo')}
      >
        oshizukani
      </div>
      {/* TODO: Tab機能は将来的に必要になったら入れる */}
      {/* <div tw="mx-auto">
        <Tab />
      </div> */}
      <div tw="ml-auto">
        <div tw="flex items-center cursor-pointer">
          {auth ? (
            <RiUserSettingsFill
              tw="fill-current text-gray-400 transition hover:text-green-400"
              onClick={showMember}
              size={25}
            />
          ) : (
            <Button title="ログイン" onClick={() => console.log('Login')} />
          )}
          {context.visible && <Modal />}
        </div>
      </div>
    </header>
  );
};
