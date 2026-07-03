"use server";
import { actionHandler } from "@/lib/api/actionHandler";
import { apiClient } from "@/lib/api";
import type { ApiResponse, BackendError } from "@/lib/api/types";
import type { IProject } from "@/types";

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
