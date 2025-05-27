"use server";

import { Filter } from "@/types";

// get all blogs

export const getAllBlogAction = async (filters?: Filter[]) => {
  try {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/blog`;
    if (filters && filters.length > 0) {
      const searchParams = new URLSearchParams();
      filters.forEach((filter) => {
        searchParams.append(filter.name, filter.value);
      });
      url = `${url}?${searchParams.toString()}`;
    }

    const res = await fetch(url);

    if (!res.ok) {
      const error = await res.json();
      console.error("Error fetching blog:", error);
      throw new Error(error.message);
    }

    const data = await res.json();
    if (data.error || data.success === false) {
      console.error("Error fetching blog:", data.error);
      throw new Error(data?.error || "Unknown error");
    }

    return data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
};

// get blog by id
export const getBlogByIdAction = async (id: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/blog/${id}`;
    const res = await fetch(url);

    if (!res.ok) {
      const error = await res.json();
      console.error("Error fetching blog by ID:", error);
      throw new Error(error.message);
    }

    const data = await res.json();
    if (data.error || data.success === false) {
      console.error("Error fetching blog by ID:", data.error);
      throw new Error(data?.error || "Unknown error");
    }

    return data;
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    throw error;
  }
};
