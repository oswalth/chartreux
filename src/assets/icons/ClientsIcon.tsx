import { SvgIcon, SvgIconProps } from '@mui/material'
import React, { FC } from 'react'

export const ClientsIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 8C12.7091 8 14.5 6.20914 14.5 4C14.5 1.79086 12.7091 0 10.5 0C8.29086 0 6.5 1.79086 6.5 4C6.5 6.20914 8.29086 8 10.5 8ZM19 14.9208C19 15.6524 18.8095 16.3531 18.4611 17H19V21H2V17H2.53892C2.19053 16.3531 2 15.6524 2 14.9208C2 11.6508 5.80558 9 10.5 9C15.1944 9 19 11.6508 19 14.9208Z"
    />
  </SvgIcon>
)
