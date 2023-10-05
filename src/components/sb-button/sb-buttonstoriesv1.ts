
export default {
  title: 'Components/SBButton',
};

const template = args => `<sb-button is-disabled="${args.isDisabled}" is-primary="${args.isPrimary}" size="${args.size}" label=${args.label}></sb-button>`;


// const Template = args => <Button {...args} />

export const Default = template.bind({});
Default.args = {
  isPrimary: true,
  cName: 'button Name',
  size:  'medium',
  label:  'helloLabelOLD',
  isDisabled: false,
};



