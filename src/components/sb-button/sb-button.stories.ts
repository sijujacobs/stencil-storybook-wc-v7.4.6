
export default {
  title: 'Components/SBButton',
  component: 'sb-button',
  parameters: {
    actions: {
      handles: ['onClick']
    }
  },
  argTypes:{
    onClick: { action: 'onClick'},
    primary: {
      control: 'boolean'
    },
    size: {
      control: {type: 'select'},
      options: ['small', 'medium', 'large']
    },
  }
};

const Template = (args) => `
  <sb-button 
    is-disabled="${args.isDisabled}" 
    is-primary="${args.isPrimary}" 
    size="${args.size}" 
    label="${args.label}"
    @onClick="args.onClick"
  >
  </sb-button>
`;

// const template = args => `<sb-button is-disabled="${args.isDisabled}" is-primary="${args.isPrimary}" size="${args.size}" label=${args.label}></sb-button>`;



export const Default = Template.bind({});
Default.args = {
  isPrimary: true,
  cName: 'button Name',
  size:  'medium',
  label:  '9999999 New Format',
  isDisabled: false,
};



