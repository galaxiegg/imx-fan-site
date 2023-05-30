export class BackendPaths {
  public static toRegister(): string {
    return import.meta.env.VITE_BACKEND_BASE_URL + "auth/registration/";
  }

  public static toLogin(): string {
    return import.meta.env.VITE_BACKEND_BASE_URL + "auth/login/";
  }

  public static toUser(): string {
    return import.meta.env.VITE_BACKEND_BASE_URL + "auth/user/";
  }

  public static toLogout(): string {
    return import.meta.env.VITE_BACKEND_BASE_URL + "auth/logout/";
  }

  public static toProjects(): string {
    return import.meta.env.VITE_BACKEND_BASE_URL + "projects/";
  }

  public static toFollowedProjects() : string {
    return import.meta.env.VITE_BACKEND_BASE_URL + "auth/followed-projects/";
  }

  public static toFollowProject() : string {
    return import.meta.env.VITE_BACKEND_BASE_URL + "auth/follow-project/";
  }

  public static toUnfollowProject() : string {
    return import.meta.env.VITE_BACKEND_BASE_URL + "auth/unfollow-project/";
  }
}
