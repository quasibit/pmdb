declare module "jest-next-dynamic";

declare module "*.css" {
  export const content: { [className: string]: string };
  export default content;
}

declare module "*.scss" {
  export const content: { [className: string]: string };
  export default content;
}

declare module "*.svg" {
  const content: any;
  export default content;
}
