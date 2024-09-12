"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createAdminClient, createSessionClient } from "../appwrite";

export async function adminLogin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const { account } = await createAdminClient();

    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return;
  } catch (error: any) {
    console.log({ error });
    if (error?.code === 401) {
      return { error: "Invalid email or password" };
    } else {
      return { error: "An error occurred" };
    }
  }
}

export async function adminLogout() {
  const { account } = await createSessionClient();

  cookies().delete("appwrite-session");
  await account.deleteSession("current");

  return redirect("/login");
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}
