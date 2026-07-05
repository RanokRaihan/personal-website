"use server";
import { apiClient } from "@/lib/api";
import { actionHandler } from "@/lib/api/actionHandler";
import type { ApiResponse, BackendError } from "@/lib/api/types";
import type { ITestimonial, ITestimonialPayload } from "@/types";

export async function getFeaturedTestimonials(): Promise<
  ITestimonial[] | BackendError
> {
  return actionHandler(async () => {
    const res = await apiClient.get<ApiResponse<ITestimonial[]>>(
      "/testimonial/featured",
      {
        params: { sortBy: "sortOrder", sortOrder: "asc", limit: 12 },
        cache: "no-store",
        skipAuth: true,
      }
    );
    return res.data;
  });
}

export async function submitTestimonialAction(
  payload: ITestimonialPayload
): Promise<ITestimonial | BackendError> {
  return actionHandler(async () => {
    const res = await apiClient.post<ApiResponse<ITestimonial>>(
      "/testimonial",
      payload,
      { skipAuth: true, cache: "no-store" }
    );
    return res.data;
  });
}
