# Button 按钮

<!-- <lyButton size="large">large</lyButton>
<lyButton type="primary" size="large">确认</lyButton>
<lyButton type="primary">primary</lyButton>
<lyButton type="primary" disabled>确认</lyButton>
<lyButton type="primary" block>确认</lyButton> -->

:::details 使用`type`属性来定义 Button 的样式。

<div>
  <ly-button type="primary">primary</ly-button>
  <ly-button type="secondary">secondary</ly-button>
  <ly-button type="text">text</ly-button>
</div>

  ```vue
  <template>
    <ly-button type="primary">primary</ly-button>
    <ly-button type="secondary">secondary</ly-button>
    <ly-button type="text">text</ly-button>
  </template>
  ```
:::

:::details 使用`disabled`属性来禁用 Button。
<div>
  <ly-button disabled >large</ly-button>
  <ly-button type="primary" disabled>large</ly-button>
  <ly-button size="small" disabled>large</ly-button>
</div>

  ```vue
  <template>
    <ly-button disabled >large</ly-button>
    <ly-button type="primary" disabled>large</ly-button>
    <ly-button size="small" disabled>large</ly-button>
  </template>
  ```
:::

:::details 使用`size`属性来定义 Button 的大小。
<div>
  <ly-button size="large">large</ly-button>
  <ly-button size="medium">medium</ly-button>
  <ly-button size="small">small</ly-button>
</div>

  ```vue
  <template>
    <ly-button size="large">large</ly-button>
    <ly-button size="medium">medium</ly-button>
    <ly-button size="small">small</ly-button>
  </template>
  ```
:::

:::details 使用`block`属性来定义 Button 的样式。
<div>
  <ly-button size="large" block >large</ly-button>
  <ly-button type="primary" block >large</ly-button>
</div>

  ```vue
  <template>
    <ly-button size="large" block >large</ly-button>
    <ly-button type="primary" block >large</ly-button>
  </template>
  ```
:::

## Attributes

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|size|尺寸|`String`|`medium` / `small` / `mini`|-|
|type|类型|`String`|`primary` / `secondary` / `text`|-|
|disabled|是否禁用状态|`boolean`|-|`false`|
|block|是否独占一行|`boolean`|-|`false`|

<!-- 
## Events

|Event Name|Description|Parameters|
|---|---|---|
|onclear|Fire when the form is cleared|The argument is a boolean value representing xxx|



## Slots

|Name|Description|Default Slot Content|
|---|---|---|
|header|Form header|`<th>title</th>`|



## Methods

|Method|Description|Parameters|
|---|---|---|
|clear|Used to manually clear the form|-| -->
