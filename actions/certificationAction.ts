"use server";
import { actionHandler } from "@/lib/api/actionHandler";
import { apiClient } from "@/lib/api";
import type { ApiResponse, BackendError } from "@/lib/api/types";
import type { ICertification } from "@/types";

export async function getAllCertifications(): Promise<
  ICertification[] | BackendError
> {
  return actionHandler(async () => {
    const res = await apiClient.get<ApiResponse<ICertification[]>>(
      "/certification",
      {
        cache: "no-store",
        skipAuth: true,
      }
    );
    return res.data;
  });
}
