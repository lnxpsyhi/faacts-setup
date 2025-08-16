import { defineConfig } from '@farmfe/core';
import farmPostcssPlugin from '@farmfe/js-plugin-postcss';
import reactPlugin from '@farmfe/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [reactPlugin(), farmPostcssPlugin()],
  compilation: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname),
      }
    }
    // output: {
    //   assetsFilename: 'assets/[resourceName].[hash].[ext]',
    // },
    // assets: {
    //   include: ['txt']
    // },
    // minify: true,
  }
});
