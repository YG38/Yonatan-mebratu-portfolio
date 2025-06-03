/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

// Environment Variables
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_DESCRIPTION: string;
  readonly VITE_APP_AUTHOR: string;
  readonly VITE_APP_EMAIL: string;
  readonly VITE_APP_GITHUB_URL: string;
  readonly VITE_APP_LINKEDIN_URL: string;
  readonly VITE_APP_TWITTER_URL: string;
}

// Google Analytics
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// This file is a module
export {};
