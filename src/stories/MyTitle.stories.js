import MyTitle from '@/components/elements/MyTitle.vue'


export default {
  title: 'Elements/MyTitle',
  component: MyTitle,
  argTypes: {
    content : {
      control: "text",
    },
    size: {
      control: "select",
      options: ['weight', 'small']
    },
    
  }
}

export const Title = {
  render: (args) => {
    return {
      components: {
        MyTitle,
      },
      setup(){
        return { args }
      },
      template: `<MyTitle v-bind="args" /></MyTitle>`
    }
  },
  args: {
    content : 'titre',
    size : 'weight',
  }
}