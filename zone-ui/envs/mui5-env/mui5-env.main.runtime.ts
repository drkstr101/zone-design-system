import { MainRuntime } from '@teambit/cli';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { ReactAspect, ReactMain, UseTypescriptModifiers } from '@teambit/react';
import { Mui5EnvAspect } from './mui5-env.aspect';
// import {
//   previewConfigTransformer,
//   devServerConfigTransformer
// } from './webpack/webpack-transformers';
import {
  buildConfigTransformer,
  devConfigTransformer,
} from './typescript/ts-transformer';

export class Mui5EnvMain {
  static slots = [];

  static dependencies = [ReactAspect, EnvsAspect];

  static runtime = MainRuntime;

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    // const webpackModifiers: UseWebpackModifiers = {
    //   previewConfig: [previewConfigTransformer],
    //   devServerConfig: [devServerConfigTransformer],
    // };

    const tsModifiers: UseTypescriptModifiers = {
      devConfig: [devConfigTransformer],
      buildConfig: [buildConfigTransformer],
    };

    const Mui5EnvEnv = react.compose([
      /**
       * Uncomment to override the config files for TypeScript, Webpack or Jest
       * Your config gets merged with the defaults
       */

      react.useTypescript(tsModifiers), // note: this cannot be used in conjunction with react.overrideCompiler
      // react.useWebpack(webpackModifiers),
      // react.overrideJestConfig(require.resolve('./jest/jest.config')),

      /**
       * override the ESLint default config here then check your files for lint errors
       * @example
       * bit lint
       * bit lint --fix
       */
      // react.useEslint({
      //   transformers: [
      //     (config) => {
      //       config.addExtends([
      //         'airbnb',
      //         'airbnb-typescript',
      //         'airbnb/hooks',
      //         'prettier',
      //       ]);
      //       return config;
      //     },
      //   ],
      // }),

      /**
       * override the Prettier default config here the check your formatting
       * @example
       * bit format --check
       * bit format
       */
      // react.usePrettier({
      //   transformers: [
      //     (config) => {
      //       config.setKey('tabWidth', 2);
      //       return config;
      //     }
      //   ]
      // }),

      /**
       * override dependencies here
       * @example
       * Uncomment types to include version 17.0.3 of the types package
       */
      react.overrideDependencies({
        peerDependencies: {
          '@emotion/react': '^11.0.0',
          '@emotion/styled': '^11.0.0',
          '@mui/material': '^5.0.0'
        },
      }),
    ]);
    envs.registerEnv(Mui5EnvEnv);
    return new Mui5EnvMain();
  }
}

Mui5EnvAspect.addRuntime(Mui5EnvMain);
