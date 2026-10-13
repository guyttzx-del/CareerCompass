export type GoogleUser = {
  sub: string;
  name: string;
  email: string;
  picture?: string;
};

export type GoogleCredentialResponse = {
  credential?: string;
};

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: { client_id: string; callback: (response: GoogleCredentialResponse) => void; auto_select?: boolean }) => void;
          renderButton: (element: HTMLElement, options: { theme: string; size: string; text: string; width: number }) => void;
        };
      };
    };
  }
}

export function decodeGoogleCredential(credential: string): GoogleUser | null {
  try {
    const payload = credential.split(".")[1];
    if (!payload) return null;

    const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
    const decoded = decodeURIComponent(
      atob(padded)
        .split("")
        .map((character) => `%${character.charCodeAt(0).toString(16).padStart(2, "0")}`)
        .join(""),
    );
    const data = JSON.parse(decoded) as Partial<GoogleUser>;

    if (!data.sub || !data.email || !data.name) return null;
    return { sub: data.sub, email: data.email, name: data.name, picture: data.picture };
  } catch {
    return null;
  }
}
