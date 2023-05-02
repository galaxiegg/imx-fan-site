import React, {useEffect, useState} from 'react';
import Layout from "../../components/common/layouts/layout";
import {User} from "../../infrastructure/backend/user";
import axios from "axios";
import {BackendPaths} from "../../router/backend-paths";
import {InfoPanel, InfoPanelData} from "../../components/common/panels/info-panel";
import {useNavigate} from "react-router-dom";
import {Paths} from "../../router/paths";
import {BasePanel} from "../../components/common/panels/base-panel";
import {FollowedProject} from "../../infrastructure/backend/followed-project";
import {XCircleIcon} from "@heroicons/react/24/outline";

export function UserAccount() {
  const [user, setUser] = useState<User>();
  const [followedProjects, setFollowedProjects] = useState<FollowedProject[]>([]);

  const fetchFollwedProjects = async () => {
    try {
      const { data } = await axios.get(BackendPaths.toFollowedProjects())
      setFollowedProjects(data)
    } catch (e: any) {
      setFollowedProjects([]);
    }
  };

  useEffect(() => {
    (
      async () => {
        await fetchFollwedProjects();

        try {
          const { data } = await axios.get(BackendPaths.toUser())
          setUser(data);
        } catch (e: any) {
          setUser(undefined);
        }
      }
    )()
  }, [])

  const unfollow = async (id: number) => {
    await axios.post(BackendPaths.toUnfollowProject(), {
      project: id,
    });
    await fetchFollwedProjects();
  }

  let userData: InfoPanelData[]
  if (user) {
    userData = [
      { label: "Name", value: user.first_name + " " + user.last_name },
      { label: "Email", value: user.email }
    ]
  } else {
    userData = [];
  }

  return (
    <Layout>
      <div className="flex flex-col md:flex-row md:h-screen px-10 py-8">
        <div className="w-full md:w-1/2 md:pr-4">
          <InfoPanel title="Account Details" panelData={userData} editLink={Paths.toUserAccountEdit()} />
        </div>
        <div className="w-full md:w-1/2 md:pt-0">
          <BasePanel>
            <h2 className="text-xl font-bold mb-4">Projects you're following</h2>
            {followedProjects.map((project: FollowedProject, index: number) => (
              <div key={`followed-project-${index}`} className="flex justify-between border rounded-md p-1 hover:border-purple-500 border-transparent border-b">
                <p  className="text-xs">{project.project.name}</p>
                <a onClick={() => unfollow(project.project.id)}>
                  <XCircleIcon className="w-5 h-5"/>
                </a>
              </div>
            ))}
          </BasePanel>
        </div>
      </div>
    </Layout>
  );
}
