import {ScullyConfig} from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "my-posts",
  outDir: './dist/static',
  routes: {
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: "./mdfiles"
      }
    },
  }
};
