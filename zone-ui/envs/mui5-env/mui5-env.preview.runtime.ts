import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { ThemeProvider } from '@watheia/zone-ui.theme';
import { Mui5EnvAspect } from './mui5-env.aspect';

export class Mui5EnvPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const mui5EnvPreviewMain = new Mui5EnvPreviewMain();
    // uncomment the line below to register a new provider to wrap all compositions using this environment with a custom theme.
    react.registerProvider([ThemeProvider]);

    return mui5EnvPreviewMain;
  }
}

Mui5EnvAspect.addRuntime(Mui5EnvPreviewMain);
