import {
  Avatar,
  Button,
  Link,
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import AuthProviders from "./AuthProviders";
import { getSession, signOut, useSession } from "next-auth/react";

const AuthSection = () => {
  const { status, data } = useSession();
  const [sessionData, setSessionData] = useState(null);
  const fetchCurrentSession = async () => {
    const session = await getSession();
    setSessionData(session);
  };
  useEffect(() => {
    if (status === "authenticated") {
      fetchCurrentSession();
    }
  }, [status]);

  return (
    <NavbarContent justify="end">
      {status === "authenticated" ? (
        <>
          <NavbarItem>
            <div>
              {sessionData?.user?.image && (
                <>
                  <Popover showArrow placement="bottom">
                    <PopoverTrigger>
                      <Avatar
                        className="cursor-pointer"
                        src={sessionData?.user.image}
                      />
                    </PopoverTrigger>
                    <PopoverContent className="p-1">
                      <div className="p-4">
                        <p className="text-gray-600 mb-5">
                          {sessionData?.user?.email}
                        </p>
                        <Button
                          onClick={() => signOut()}
                          as={Link}
                          color="primary"
                          href="#"
                          variant="flat"
                        >
                          Sign Out
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </>
              )}
            </div>
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
