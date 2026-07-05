export * from "./blogType";
export * from "./certificationType";
export * from "./messageType";
export * from "./projectType";
export * from "./settingType";
export * from "./skillType";
export * from "./testimonialType";
export * from "./userType";

export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;
