const getEnvVar = (key: string) => {
    if (import.meta.env[key] === undefined) {
        throw new Error(`Env variable ${key} is required`);
    }
    return import.meta.env[key] || "";
};

export const API_URL = getEnvVar("VITE_REACT_APP_API_KEY");
