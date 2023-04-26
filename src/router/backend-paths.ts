export class BackendPaths {
  public static toProjects(): string {
    return import.meta.env.VITE_BACKEND_BASE_URL + "projects/";
  }
}
