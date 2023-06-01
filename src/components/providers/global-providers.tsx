import {FollowedProjectsProvider} from "./followed-projects-provider";
import {LoggedInUserProvider} from "./logged-in-user-provider";

interface GlobalProvidersProps {
  children: React.ReactNode;
}

const GlobalProviders: React.FC<GlobalProvidersProps> = (props: GlobalProvidersProps) => {
  return (
    <FollowedProjectsProvider>
      <LoggedInUserProvider>
        {props.children}
      </LoggedInUserProvider>
    </FollowedProjectsProvider>
  );
};

export default GlobalProviders;
