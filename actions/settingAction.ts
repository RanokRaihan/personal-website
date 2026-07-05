"use server";
import { apiClient } from "@/lib/api";
import { actionHandler } from "@/lib/api/actionHandler";
import type { ApiResponse, BackendError } from "@/lib/api/types";
import type { ISetting } from "@/types";

export async function getSiteSettings(): Promise<ISetting | BackendError> {
  return actionHandler(async () => {
    const res = await apiClient.get<ApiResponse<ISetting>>("/setting", {
      cache: "no-store",
      skipAuth: true,
    });
    return res.data;
  });
}
