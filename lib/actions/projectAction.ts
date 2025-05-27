"use server";

import { Filter } from "@/types";

export const getAllProjectsAction = async (filters?: Filter[]) => {
  try {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/project`;
    if (filters && filters.length > 0) {
      const searchParams = new URLSearchParams();
      filters.forEach((filter) => {
        searchParams.append(filter.name, filter.value);
      });
      url = `${url}?${searchParams.toString()}`;
    }

    const res = await fetch(url, {
      cache: "no-store",
      next: {
        revalidate: 0,
      },
    });

    if (!res.ok) {
      const error = await res.json();
      console.error("Error fetching projects:", error);
      throw new Error(error.message);
    }

    const data = await res.json();
    if (data.error || data.success === false) {
      console.error("Error fetching projects:", data.error);
      throw new Error(data?.error || "Unknown error");
    }

    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
export const getFeaturedProjectsAction = async () => {
  try {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/project/featured`;

    const res = await fetch(url, {
      cache: "no-store",
      next: {
        revalidate: 0,
      },
    });

    if (!res.ok) {
      const error = await res.json();
      console.error("Error fetching projects:", error);
      throw new Error(error.message);
    }

    const data = await res.json();
    if (data.error || data.success === false) {
      console.error("Error fetching projects:", data.error);
      throw new Error(data?.error || "Unknown error");
    }

    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

export const getProjectByIdAction = async (id: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/project/${id}`;

    const res = await fetch(url);

    if (!res.ok) {
      const error = await res.json();
      console.error("Error fetching project:", error);
      throw new Error(error.message);
    }

    const data = await res.json();
    if (data.error || data.success === false) {
      console.error("Error fetching project:", data.error);
      throw new Error(data?.error || "Unknown error");
    }

    return data;
  } catch (error) {
    console.error("Error fetching project:", error);
    throw error;
  }
};
