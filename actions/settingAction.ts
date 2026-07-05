"use server";
import { apiClient } from "@/lib/api";
import { actionHandler } from "@/lib/api/actionHandler";
import type { ApiResponse } from "@/lib/api/types";
import { DEFAULT_SETTINGS } from "@/constants";
import type { ISetting } from "@/types";

export async function getSiteSettings(): Promise<ISetting> {
  const result = await actionHandler(async () => {
    const res = await apiClient.get<ApiResponse<ISetting>>("/setting", {
      cache: "no-store",
      skipAuth: true,
    });
    return res.data;
  });

  if (!("name" in result)) {
    return DEFAULT_SETTINGS;
  }

  return {
    ...DEFAULT_SETTINGS,
    ...result,
    socials: { ...DEFAULT_SETTINGS.socials, ...result.socials },
  };
}
