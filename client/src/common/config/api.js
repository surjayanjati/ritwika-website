export const apiConfig = {
  baseUrl:
    import.meta.env.VITE_API_BASE_URL ||
    (import.meta.env.DEV ? "http://localhost:5001/api" : "/api"),
};
