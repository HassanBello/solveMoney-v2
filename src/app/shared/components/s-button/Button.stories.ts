// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SButtonComponent } from './s-button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'components/Button',
  component: SButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<SButtonComponent> = (args: SButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  size: 'medium',
  label: 'Primary BTN',
  loading: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  size: 'medium',
  label: 'Secondary BTN',
  loading: false,
};

export const Alt = Template.bind({});
Alt.args = {
  type: 'destructive',
  size: 'medium',
  label: 'Alt BTN',
  loading: false,
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  size: 'medium',
  label: 'Alt BTN',
  loading: false,
};

export const Large = Template.bind({});
Large.args = {
  type: 'primary',
  size: 'large',
  label: 'Large Button',
  loading: false,
};

export const Small = Template.bind({});
Small.args = {
  type: 'primary',
  size: 'small',
  label: 'Small Button',
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  type: 'primary',
  size: 'medium',
  label: 'Loading Button',
  loading: true,
};
