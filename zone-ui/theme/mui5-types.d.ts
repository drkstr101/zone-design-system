import { CSSProperties } from 'react';

interface CustomShadowOptions {
  z1: string;
  z4: string;
  z8: string;
  z12: string;
  z16: string;
  z20: string;
  z24: string;
  //
  primary: string;
  secondary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
  //
  card: string;
  dialog: string;
  dropdown: string;
}

import type { Theme, ThemeOptions } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Theme {
    customShadows: CustomShadowOptions;
  }
  interface ThemeOptions {
    customShadows?: CustomShadowOptions;
  }
}

import type {
  PaletteColor,
  SimplePaletteColorOptions,
  TypeBackground,
} from '@mui/material/styles/createPalette';
declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
}

import type { TypographyVariants } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface TypographyVariants {
    fontWeightSemiBold: CSSProperties['fontWeight'];
  }
}

import type { ButtonPropsVariantOverrides } from '@mui/material/Button';
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    soft: true;
  }
}

import type { ButtonGroupPropsVariantOverrides } from '@mui/material/ButtonGroup';
declare module '@mui/material/ButtonGroup' {
  interface ButtonGroupPropsVariantOverrides {
    soft: true;
  }
}

import type { ChipPropsVariantOverrides } from '@mui/material/Chip';
declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    soft: true;
  }
}

import type { FabPropsVariantOverrides } from '@mui/material/Fab';
declare module '@mui/material/Fab' {
  interface FabPropsVariantOverrides {
    outlined: true;
    outlinedExtended: true;
    soft: true;
    softExtended: true;
  }
}

import type {
  PaginationPropsColorOverrides,
  PaginationPropsVariantOverrides,
} from '@mui/material/Pagination';
declare module '@mui/material/Pagination' {
  interface PaginationPropsVariantOverrides {
    soft: true;
  }

  interface PaginationPropsColorOverrides {
    info: true;
    success: true;
    warning: true;
    error: true;
  }
}
