export default {
  title: 'Components/CoolButton',
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['onClick'] // you can add custom events to this array to trigger actions
    }
  },
};

const template = args => `<cool-button is-primary="${args.isPrimary}">${args.label}</cool-button>`;

export const Example = template.bind({});
Example.args = {
  isPrimary: true,
  label:"test"
};
