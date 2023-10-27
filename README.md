# React 18 Init

用于创建新的 React 18.2.0 项目，开箱即用



## 项目集成

1. React-Router

   同时封装了全局前置路由守卫 `src/router/RouteGuard`

2. Redux

3. craco

4. less

5. antd-mobile

   PC端请卸载 `antd-mobile`，安装 `antd` 即可，同时修改 `src/App.less`

6. axios



## Use

1. first

   ```shell
   git clone
   ```

2. second

   ```shell
   yarn install
   ```

3. three

   ```shell
   yarn start
   ```

4. four

   ```shell
   yarn run build
   ```



## tips

`devDependencies` 下的 `@babel/plugin-proposal-private-property-in-object` 包并非一定要，请根据需要下载或者卸载，其本身只是解决yarn的一个警告才引入的。
