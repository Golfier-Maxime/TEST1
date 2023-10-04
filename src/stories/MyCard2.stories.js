import MyCard2 from '@/components/MyCard2.vue'

export default {
  title: 'Components/MyCard2',
  component: MyCard2,
  argTypes: {
    prix : {
      control: "text",
    },
    title : {
      control: "text",
    },
    imageAlt : {
      control: "text",
    },
    imageSrc : {
      control: "text",
    },
    desc : {
      control: "text",
    },
  }
}

export const Card = {
  render: (args) => {
    return {
      components: {
        MyCard2,
      },
      setup(){
        return { args }
      },
      template: `<MyCard2 v-bind="args" />`
    }
  },
  args: {
    prix : 'prix du produit',
    title : "Titre de la card",
    imageAlt: "image de chat",
    imageSrc: "http://placekitten.com/g/238/206",
    desc: "desc prod",
    
  }
}