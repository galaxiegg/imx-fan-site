import React, {Context, createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {BackendPaths} from "../../router/backend-paths";
import {User} from "../../infrastructure/backend/user";

interface LoggedInUserState {
  loggedInUser: () => User | undefined | null,
  login: (user: string, password: string) => void,
  logout: () => void,
}

export const LoggedInUserContext: Context<LoggedInUserState> =
  createContext<LoggedInUserState>({} as LoggedInUserState);

interface LoggedInUserProviderProps {
  children: React.ReactNode;
}

export const LoggedInUserProvider = (props: LoggedInUserProviderProps) => {
  const LOCAL_STORAGE_USER: string = "user";
  const [fetchedUser, setFetchedUser] = useState<User | undefined | null>(undefined);

  useEffect(() => {
    (
      async () => {
        await fetchData();
      }
    )()
  }, []);

  const fetchData = async () => {
    try {
      const {data} = await axios.get(BackendPaths.toUser())
      localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(data));
      setFetchedUser(data);
    } catch (e: any) {
      localStorage.removeItem(LOCAL_STORAGE_USER);
      setFetchedUser(null);
    }
  };

  const loggedInUser = (): User | undefined | null => {
    let rawStoredUser: any | undefined = localStorage.getItem(LOCAL_STORAGE_USER);
    let storedUser: User | undefined = rawStoredUser !== "undefined" ? JSON.parse(rawStoredUser) : undefined
    return !fetchedUser ? storedUser : fetchedUser;
  }

  const login = async (email: string, password: string) => {
    const config = {
      headers: {'content-type': 'application/x-www-form-urlencoded'}
    };
    await axios.post(
      BackendPaths.toLogin(),
      {
        email: email,
        password: password
      },
      config);
    await fetchData();
  }

  const logout = async () => {
    await axios.post(BackendPaths.toLogout());
  }

  const value: LoggedInUserState = {
    loggedInUser,
    login,
    logout
  };

  return <LoggedInUserContext.Provider value={value}>{props.children}</LoggedInUserContext.Provider>;
};
