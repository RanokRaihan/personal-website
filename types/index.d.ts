declare type Status = "draft" | "published";
declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
declare interface ProjectParams {
  title: string;
  description: string;
  thumbnail?: FormData;
  tags?: string;
  technologies: string;
  publishedAt?: Date;
  liveLink?: string;
  clientCode?: string;
  serverCode?: string;
  videoLink?: string;
  category: string;
  status: Status;
}
