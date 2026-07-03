"use server";
import { apiClient } from "@/lib/api";
import { actionHandler } from "@/lib/api/actionHandler";
import type { ApiResponse, BackendError } from "@/lib/api/types";
import type { IContactMessagePayload, IMessageResponse } from "@/types";

export async function sendContactMessageAction(
  payload: IContactMessagePayload
): Promise<IMessageResponse | BackendError> {
  return actionHandler(async () => {
    const res = await apiClient.post<ApiResponse<IMessageResponse>>(
      "/message",
      payload,
      { skipAuth: true, cache: "no-store" }
    );
    return res.data;
  });
}
