"use client";

import { adminLogout } from "@/lib/actions/admin.actions";
import { Button } from "./ui/button";

const Logout = () => {
  const handleLogOut = async () => {
    await adminLogout();
  };
  return (
    <>
      <Button
        size={"sm"}
        variant="destructive"
        onClick={handleLogOut}
        className="mx-4"
      >
        Logout
      </Button>
    </>
  );
};

export default Logout;
