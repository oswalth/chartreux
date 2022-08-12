import { Variant } from '@mui/material/styles/createTypography'
import { CSSOthersObject } from '@mui/styled-engine'

export interface Typography {
  text: Partial<Record<Variant, CSSOthersObject>>
  buttons: {
    buttonLargeText: CSSOthersObject
    buttonMediumText: CSSOthersObject
    buttonSmallText: CSSOthersObject
  }
  healthIndicators: {
    hint: CSSOthersObject
    percent: CSSOthersObject
  }
  picker: {
    default: CSSOthersObject
  }
}

export const PROXIMA_NOVA_ALT_FONT = ['ProximaNova Alt', 'sans-serif'].join(
  ', ',
)

export const PROXIMA_NOVA = ['ProximaNova', 'sans-serif'].join(', ')

export const typography: Typography = {
  text: {
    h1: {
      fontWeight: 600,
      fontSize: '40px',
      lineHeight: 'auto',
    },
    h2: {
      fontWeight: 600,
      fontSize: '32px',
      lineHeight: '40px',
    },
    h3: {
      fontWeight: 600,
      fontSize: '24px !important',
      lineHeight: '32px !important',
    },
    h4: {
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '30px',
    },
    h5: {
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '22px',
    },
    h6: {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: 'auto',
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: '15px',
      lineHeight: '20px',
    },
    subtitle2: {
      fontFamily: PROXIMA_NOVA_ALT_FONT,
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '20px',
    },
    body1: {
      fontFamily: PROXIMA_NOVA_ALT_FONT,
      fontWeight: 400,
      fontSize: '15px',
      lineHeight: '20px',
    },
    body2: {
      fontFamily: PROXIMA_NOVA_ALT_FONT,
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '18px',
    },
    caption: {
      fontFamily: PROXIMA_NOVA_ALT_FONT,
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '14px',
    },
  },
  buttons: {
    buttonLargeText: {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: 'auto',
    },
    buttonMediumText: {
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: 'auto',
    },
    buttonSmallText: {
      fontFamily: PROXIMA_NOVA_ALT_FONT,
      fontWeight: 400,
      fontSize: '13px',
      lineHeight: '16px',
    },
  },
  healthIndicators: {
    hint: {
      fontFamily: PROXIMA_NOVA,
      fontWeight: 600,
      lineHeight: '14px',
      fontSize: '14px',
    },
    percent: {
      fontFamily: PROXIMA_NOVA,
      fontWeight: 600,
      lineHeight: '14px',
      fontSize: '10px',
    },
  },
  picker: {
    default: {
      fontWeight: 400,
      fontSize: '15px',
      lineHeight: '20px',
    },
  },
}
