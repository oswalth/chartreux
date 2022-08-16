import '../fonts/index.css'
import '@mui/styles';

import { Theme } from '@mui/material'
import { createTheme } from '@mui/material/styles'

import { PROXIMA_NOVA_ALT_FONT, typography } from './typography'
import { Color } from './variables'

declare module '@mui/material/styles' {
  type DefaultTheme = Theme
}

declare module '@mui/material/styles/createPalette' {
  interface TypeText {
    hint: string
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: PROXIMA_NOVA_ALT_FONT,
  },
  palette: {
    background: {
      default: Color.BgPurpleFaded,
      paper: Color.BgWhite,
    },
    primary: {
      main: Color.PrimaryPurple,
      light: Color.BgPurpleFaded,
      dark: Color.PrimaryDark,
    },
    secondary: {
      dark: Color.Purple4,
      main: Color.Purple5,
      light: Color.Purple6,
    },
    text: {
      primary: Color.PrimaryCharcoal,
      secondary: Color.Charcoal1,
      hint: Color.Charcoal2,
      disabled: Color.Charcoal3,
    },
    error: {
      main: Color.Error,
    },
    warning: {
      main: Color.Warning,
      dark: Color.SecondaryOrangeLight,
      light: Color.OrangeLight5,
    },
    success: {
      main: Color.Success,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        img: {
          pointerEvents: 'none',
          userSelect: 'none',
        },
        a: {
          color: 'inherit',
          textDecoration: 'none !important',
        },
      },
    },
    // Typography
    MuiTypography: {
      styleOverrides: {
        root: {
          '& > a': {
            color: Color.PrimaryPurple,
            textDecoration: 'none',
            cursor: 'pointer',
          },
        },
        ...typography.text,
      },
    },
    // Surfaces
    MuiPaper: {
      styleOverrides: {
        elevation0: {
          boxShadow: '0px 2px 4px rgba(47, 36, 6, 0.05)',
          borderRadius: 10,
        },
        elevation1: {
          borderRadius: 10,
          boxShadow: '0px 2px 4px rgba(47, 36, 6, 0.05)',
          padding: 16,
        },
        elevation2: {
          borderRadius: 10,
          boxShadow: '0px 2px 4px rgba(47, 36, 6, 0.05)',
          padding: 24,
        },
      },
    },
    // Divider
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#EDEAFA',
          width: '100%',
        },
      },
    },
    // Inputs
    MuiTextField: {
      styleOverrides: {
        root: {
          position: 'relative',
          width: '100%',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        input: {
          width: '100%',
          '&:focus': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: '0 0 8px 0',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: Color.InputSmallTitle,
          ...typography.text.subtitle2,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        formControl: {
          top: '-2px !important',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: 48,
          padding: '22px 12px 6px',
          background: 'transparent',
          borderRadius: '4px 4px 0 0',
        },
        input: {
          height: '100%',
          padding: '0 !important',
          color: Color.PrimaryCharcoal,
          ...typography.text.subtitle2,
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          margin: '16px 0 0 24px',
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          padding: '10px 16px',
        },
      },
    },
    MuiFormHelperText: {
      // Prevent bouncing, when helper (error) text renders
      styleOverrides: {
        root: {
          position: 'absolute',
          left: 0,
          bottom: -16,
          margin: 0,
          fontSize: '12px',

          '&.MuiFormHelperText-contained': {
            margin: 0,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderColor: `${Color.Purple5} !important`,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: 'none',
          minWidth: '120px',
          padding: '9px',
          boxShadow: 'none',
          '&:active': {
            boxShadow: 'none !important',
          },
          '&:hover': {
            boxShadow: 'none !important',
          },
          ...typography.buttons.buttonSmallText,
        },
        text: {
          ...typography.text.h6,
        },
        outlined: {
          padding: '8px',
        },
        contained: {
          boxShadow: 'none',
        },
        outlinedPrimary: {
          border: `1px solid ${Color.PrimaryPurple}`,
          transition: 'padding 0s',

          '&:hover': {
            backgroundColor: Color.SecondaryLight,
          },
        },
        containedPrimary: {
          transition: 'padding 0s',

          '&:hover': {
            backgroundColor: Color.PrimaryDark,
          },
        },
        containedSecondary: {
          backgroundColor: Color.Purple6,
          color: Color.PrimaryPurple,
          '&:hover, &:active': {
            backgroundColor: Color.Purple5,
          },
        },
        sizeLarge: {
          ...typography.buttons.buttonMediumText,
          letterSpacing: 0.8,
          padding: '0 60px',
          height: 42,
        },
        sizeSmall: {
          ...typography.buttons.buttonSmallText,
          minWidth: 'unset',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          '&$textColorPrimary&$selected': {
            color: Color.BgWhite,
            background: Color.PrimaryPurple,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          height: 40,
          backgroundColor: 'none',
          lineHeight: '40px',
          '&::first-letter': {
            textTransform: 'capitalize',
            marginLeft: 16,
          },
        },
        // @ts-expect-error it works, poor types.
        root: {
          padding: 0,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          zIndex: 9999,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          padding: '12px 24px',
          '&.Mui-expanded': {
            margin: 0,
          },
          '&.MuiAccordion-rounded:first-of-type': {
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
          },
          '&.MuiAccordion-rounded:last-child': {
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
          },
          '&.MuiAccordion-rounded:last-child .MuiCollapse-entered': {
            borderBottom: 'none',
          },
          '&:first-of-type': {
            '&:before': {
              display: 'none !important',
            },
          },
          '&:before': {
            display: 'block !important',
            top: '-1px !important',
            left: 24,
            right: 24,
            height: '1px',
            content: "''",
            opacity: '1 !important',
            position: 'absolute',
            transition:
              'opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            backgroundColor: Color.Purple6,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '0px 20px 20px 0px',
        },
      },
    },
  },
})
