import { Button, Link, NavbarContent, NavbarItem } from "@nextui-org/react";
import React from "react";
import AuthProviders from "./AuthProviders";
import { signOut, useSession } from "next-auth/react";

const AuthSection = () => {
  const { status, data } = useSession();

  return (
    <NavbarContent justify="end">
      {status === "authenticated" ? (
        <>
          <NavbarItem>
            <Button
              onClick={() => signOut()}
              as={Link}
              color="primary"
              href="#"
              variant="flat"
            >
              Sign Out
            </Button>
          </NavbarItem>
        </>
      ) : (
        <>
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Sign Up</Link>
          </NavbarItem>
          <AuthProviders />
        </>
      )}
    </NavbarContent>
  );
};

export default AuthSection;
