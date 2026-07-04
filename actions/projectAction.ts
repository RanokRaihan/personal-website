"use server";
import { actionHandler } from "@/lib/api/actionHandler";
import { apiClient } from "@/lib/api";
import type { ApiResponse, BackendError } from "@/lib/api/types";
import type { IProject } from "@/types";

export interface ProjectListParams {
  search?: string;
  category?: string;
  type?: string;
  complexity?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}

export interface ProjectListMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export interface ProjectListResult {
  projects: IProject[];
  meta: ProjectListMeta;
}

export async function getFeaturedProjectsAction(): Promise<
  IProject[] | BackendError
> {
  return actionHandler(async () => {
    const res = await apiClient.get<ApiResponse<IProject[]>>("/project", {
      params: { isFeaturedOnHome: true },
      cache: "no-store",
      skipAuth: true,
    });
    return res.data;
  });
}

export async function getAllProjectsAction(
  params: ProjectListParams = {},
): Promise<ProjectListResult | BackendError> {
  return actionHandler(async () => {
    const res = await apiClient.get<
      ApiResponse<IProject[]> & { meta: ProjectListMeta }
    >("/project", {
      params: { ...params },
      cache: "no-store",
      skipAuth: true,
    });
    return { projects: res.data, meta: res.meta };
  });
}

export async function getProjectBySlugAction(
  slug: string,
): Promise<IProject | BackendError> {
  return actionHandler(async () => {
    const res = await apiClient.get<ApiResponse<IProject>>(
      `/project/slug/${slug}`,
      { cache: "no-store", skipAuth: true },
    );
    return res.data;
  });
}
