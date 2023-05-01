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
}
