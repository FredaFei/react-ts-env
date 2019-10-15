// https://stackoverflow.com/questions/51100401/typescript-image-import/51163365
declare module "*.png" {
  const value: any;
  export = value;
}

