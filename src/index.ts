import { createApp } from "vue/dist/vue.esm-bundler";
// import SFCButton from "./SFCButton.vue";
// import JSXButton from "./JSXButton"
import ViolaUI from './entry'

createApp({
    template: `
        <div>
            <ViButton>Default</ViButton>
            <ViButton type="primary">Primary</ViButton>
            <ViButton type="success">普通按钮</ViButton>
            <ViButton type="info">普通按钮</ViButton>
            <ViButton type="warning">普通按钮</ViButton>
            <ViButton type="danger">普通按钮</ViButton>
        </div>
        <div>
            <ViButton plain>Default</ViButton>
            <ViButton type="primary" plain>plain</ViButton>
            <ViButton type="success" plain>plain</ViButton>
            <ViButton type="info" plain>plain</ViButton>
            <ViButton type="warning" plain>plain</ViButton>
            <ViButton type="danger" plain>plain</ViButton>
        </div>
        <div>
            <ViButton round>round</ViButton>
            <ViButton type="primary" round>round</ViButton>
            <ViButton type="success" round>round</ViButton>
            <ViButton type="info" round>round</ViButton>
            <ViButton type="warning" round>round</ViButton>
            <ViButton type="danger" round>round</ViButton>
        </div>
        <div>
            <ViButton type="primary" size="small">small</ViButton>
            <ViButton type="primary" size="medium">medium</ViButton>
            <ViButton type="primary" size="large">large</ViButton>
        </div>
        <div>
            <ViButton type="primary" circle icon="search" size="small"></ViButton>
            <ViButton type="success" circle icon="edit"></ViButton>
            <ViButton type="info" circle icon="check"></ViButton>
            <ViButton type="warning" circle icon="message"></ViButton>
            <ViButton type="danger" circle icon="delete"></ViButton>
        </div>
    `
})
.use(ViolaUI)
.mount("#app");