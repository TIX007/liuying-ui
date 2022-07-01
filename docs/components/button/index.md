# Button 按钮

<!-- <QiButton size="large">large</QiButton>
<QiButton type="primary" size="large">确认</QiButton>
<QiButton type="primary">primary</QiButton>
<QiButton type="primary" disabled>确认</QiButton>
<QiButton type="primary" block>确认</QiButton> -->

:::details 使用`type`属性来定义 Button 的样式。

<div>
  <qi-button type="primary">primary</qi-button>
  <qi-button type="secondary">secondary</qi-button>
  <qi-button type="text">text</qi-button>
</div>

  ```vue
  <template>
    <qi-button type="primary">primary</qi-button>
    <qi-button type="secondary">secondary</qi-button>
    <qi-button type="text">text</qi-button>
  </template>
  ```
:::

:::details 使用`disabled`属性来禁用 Button。
<div>
  <qi-button disabled >large</qi-button>
  <qi-button type="primary" disabled>large</qi-button>
  <qi-button size="small" disabled>large</qi-button>
</div>

  ```vue
  <template>
    <qi-button disabled >large</qi-button>
    <qi-button type="primary" disabled>large</qi-button>
    <qi-button size="small" disabled>large</qi-button>
  </template>
  ```
:::

:::details 使用`size`属性来定义 Button 的大小。
<div>
  <qi-button size="large">large</qi-button>
  <qi-button size="medium">medium</qi-button>
  <qi-button size="small">small</qi-button>
</div>

  ```vue
  <template>
    <qi-button size="large">large</qi-button>
    <qi-button size="medium">medium</qi-button>
    <qi-button size="small">small</qi-button>
  </template>
  ```
:::

:::details 使用`block`属性来定义 Button 的样式。
<div>
  <qi-button size="large" block >large</qi-button>
  <qi-button type="primary" block >large</qi-button>
</div>

  ```vue
  <template>
    <qi-button size="large" block >large</qi-button>
    <qi-button type="primary" block >large</qi-button>
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
