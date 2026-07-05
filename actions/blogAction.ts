"use server";
import { actionHandler } from "@/lib/api/actionHandler";
import { apiClient } from "@/lib/api";
import type { ApiResponse, BackendError } from "@/lib/api/types";
import type { IBlog } from "@/types";

export interface BlogListParams {
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}

export interface BlogListMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export interface BlogListResult {
  blogs: IBlog[];
  meta: BlogListMeta;
}

export async function getAllBlogsAction(
  params: BlogListParams = {},
): Promise<BlogListResult | BackendError> {
  return actionHandler(async () => {
    const res = await apiClient.get<
      ApiResponse<IBlog[]> & { meta: BlogListMeta }
    >("/blog", {
      params: { ...params },
      cache: "no-store",
      skipAuth: true,
    });
    return { blogs: res.data, meta: res.meta };
  });
}

export async function getBlogBySlugAction(
  slug: string,
): Promise<IBlog | BackendError> {
  return actionHandler(async () => {
    const res = await apiClient.get<ApiResponse<IBlog>>(`/blog/${slug}`, {
      cache: "no-store",
      skipAuth: true,
    });
    return res.data;
  });
}
