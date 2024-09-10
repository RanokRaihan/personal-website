import { getLoggedInUser } from "@/lib/actions/admin.actions";

const AdminPage = async () => {
  const user = await getLoggedInUser();
  return (
    <div className="p-4">
      <p className="text-lg font-light">Welcome,</p>
      <h1 className="text-4xl font-bold text-emerald-500">{user?.name}</h1>
      <p className="text-lg py-4">
        This is your admin dashboard where you can manage all your projects and
        other staff! Sounds great, right?
      </p>
    </div>
  );
};

export default AdminPage;
