import canUseDOM from "@/utils/canUseDOM";

export const getServerSideURL = () => {
  let url = process.env.NEXT_PUBLIC_SERVER_URL;

  if (!url && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `http://localhost:3000`;
  }

  if (!url) {
    url = "http://localhost:3000";
  }

  return url;
};

export const getClientSideURL = () => {
  if (canUseDOM) {
    const protocol = window.location.protocol;
    const domain = window.location.hostname;
    const port = window.location.port;

    return `${protocol}//${domain}${port ? `:${port}` : ""}`;
  }

  return "";
};
