import MyIcon from '@/components/elements/MyIcon.vue'

export default {
  title: 'Elements/MyIcon',
  component: MyIcon,
  argTypes: {
    name : {
      control : "select",
      options : ['community', 'documentation', 'ecosystem', 'support', 'tooling','cf','fc','camion','leftarrow','rightarrow','arrow']
    },
    color : {
      control : "select",
      options : ['orange','default','light-orange','black']
    }
  }
}

export const Icon = {
  render: (args) => {
    return {
      components: {
        MyIcon,
      },
      setup(){
        return { args }
      },
      template: `<MyIcon v-bind="args" />`
    }
  },
  args: {
    name: 'community',
    color:'default'
  }
}