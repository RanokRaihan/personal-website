import LoginForm from "@/components/forms/LoginForm";
import { getLoggedInUser } from "@/lib/actions/admin.actions";
import Image from "next/image";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const user = await getLoggedInUser();
  console.log({ user });
  if (user) {
    redirect("/admin");
  }
  return (
    <main className="bg-emerald-100/25 dark:bg-slate-900">
      <section className="container mx-auto flex flex-col items-center justify-center min-h-screen  ">
        <div className="relative bg-white border border-gray-100 dark:bg-slate-950/50 dark:border-slate-800 px-2 lg:px-10 py-10 w-full max-w-[500px] rounded-2xl ">
          <div className="flex flex-col items-center justify-center mb-10 mt-5">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Welcome!
            </h2>
            <p className="text-slate-400">Please login to continue</p>
          </div>
          <Image
            src="/assets/images/admin.svg"
            width={300}
            height={300}
            alt="Login"
            className="size-20 absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <LoginForm />
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
