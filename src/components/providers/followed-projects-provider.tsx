import React, {Context, createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {FollowedProject} from "../../infrastructure/backend/followed-project";
import {BackendPaths} from "../../router/backend-paths";

interface FollowedProjectsState {
  followedProjects: FollowedProject[],
  isFollowing: (id: number) => boolean,
  follow: (id: number) => void,
  unfollow: (id: number) => void,
}

export const FollowedProjectsContext: Context<FollowedProjectsState> =
  createContext<FollowedProjectsState>({} as FollowedProjectsState);

interface FollowedProjectsProviderProps {
  children: React.ReactNode;
}

export const FollowedProjectsProvider = (props: FollowedProjectsProviderProps) => {
  const [followedProjects, setFollowedProjects] = useState<FollowedProject[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(BackendPaths.toFollowedProjects());
      setFollowedProjects(response.data);
    } catch (error) {
      console.error('Error fetching followed projects:', error);
    }
  };

  const isFollowing = (id: number): boolean => {
    if (!followedProjects) {
      return false;
    }
    return followedProjects.some((project: FollowedProject) => project.project.id === id)
  }

  const follow = async (id: number) => {
    await axios.post(BackendPaths.toFollowProject(), {
      project: id,
    });
    await fetchData();
  }

  const unfollow = async (id: number) => {
    await axios.post(BackendPaths.toUnfollowProject(), {
      project: id,
    });
    await fetchData();
  }

  const value: FollowedProjectsState = {
    followedProjects,
    isFollowing,
    follow,
    unfollow
  };

  return <FollowedProjectsContext.Provider value={value}>{props.children}</FollowedProjectsContext.Provider>;
};
