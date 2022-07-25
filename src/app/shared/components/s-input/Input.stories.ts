import { Story, Meta } from '@storybook/angular/types-6-0';
import { SInputComponent } from './s-input.component';

export default {
  title: 'components/Input',
  component: SInputComponent,
} as Meta;

const Template: Story<SInputComponent> = (args: SInputComponent) => ({
  props: args,
});

export const Text = Template.bind({});
Text.args = {
  type: 'Text',
  placeHolder: 'Dummy placeholder'
};

export const Number = Template.bind({});
Number.args = {
  type: 'Number',
  placeHolder: '123445'
};

export const PhoneNumber = Template.bind({});
PhoneNumber.args = {
  type: 'tel',
  placeHolder: '+234 818 375 3762',
  prefix: true
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeHolder: 'Input Password here',
  suffix: true
};
