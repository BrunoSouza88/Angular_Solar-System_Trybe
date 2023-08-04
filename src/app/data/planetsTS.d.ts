declare module '*.png' {
  const value: string;
  export default value;
}

declare module 'planets' {
  const planets: { name: string; image: string }[];
  export default planets;
}
