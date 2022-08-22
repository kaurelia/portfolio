declare module "react-use-system-theme" {
  const useSystemTheme: <T extends "dark" | "light" | void = void>(
    defaultTheme?: T
  ) => T extends void ? "dark" | "light" | null : "dark" | "light";
  export default useSystemTheme;
}
