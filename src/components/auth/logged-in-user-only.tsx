import React, {useContext, useState} from "react";
import {LoggedInUserContext} from "../providers/logged-in-user-provider";
import {User} from "../../infrastructure/backend/user";
import {Navigate} from "react-router-dom";
import {Paths} from "../../router/paths";

interface LoggedInUserOnlyProps {
  children: React.ReactNode;
}

export const LoggedInUserOnly = (props: LoggedInUserOnlyProps) => {
  const { loggedInUser } = useContext(LoggedInUserContext);
  const user: User | undefined | null = loggedInUser();

  if (!user) {
    return <Navigate to={Paths.toHome()}/>
  }

  return (
    <>
      {props.children}
    </>
  );
}
