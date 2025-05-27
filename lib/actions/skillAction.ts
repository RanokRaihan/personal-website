"use server";

export async function getAllSkillsAction() {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/skill`;

    const res = await fetch(url);
    console.log(res);

    const data = await res.json();
    if (data.error || data.success === false) {
      console.error("Error fetching skills:", data.error);
      throw new Error(data?.error || "Unknown error");
    }
    return data;
  } catch (error) {
    console.error("Error fetching skills:", error);
    throw error;
  }
}
