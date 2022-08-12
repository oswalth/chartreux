declare global {
  declare module '*.svg' {
    const ref: string
    export default ref
  }
}

export {}
