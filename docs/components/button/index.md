# Button 按钮
常用操作按钮

## 基础的函数用法
使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。
:::demo 

```vue
<template>
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
</template>
```
:::
