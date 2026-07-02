"use server";
import { actionHandler } from "@/lib/api/actionHandler";
import { apiClient } from "@/lib/api";
import type { ApiResponse, BackendError } from "@/lib/api/types";
import type { ISkill } from "@/types";

export async function getAllSkills(): Promise<ISkill[] | BackendError> {
  return actionHandler(async () => {
    const res = await apiClient.get<ApiResponse<ISkill[]>>("/skill", {
      cache: "no-store",
      skipAuth: true,
    });
    return res.data;
  });
}
