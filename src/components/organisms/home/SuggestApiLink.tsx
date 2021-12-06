import "twin.macro";
import { TextInput } from "src/components/molecules/form/TextInput";
import { BaseTemplate } from "src/components/templates/BaseTemplate";

export const SuggestApiLink = () => {
  return (
    <BaseTemplate>
      <p>！APIが連携されていません！</p>
      <TextInput />
    </BaseTemplate>
  );
};
