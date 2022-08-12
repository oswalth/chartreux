import { CircularProgress, Grid } from '@mui/material'
import React, { FC } from 'react'

export const Loader: FC = () => (
  <Grid
    container
    alignContent="center"
    justifyContent="center"
    style={{ height: 400 }}
  >
    <CircularProgress style={{ width: 70, height: 70 }} />
  </Grid>
)
