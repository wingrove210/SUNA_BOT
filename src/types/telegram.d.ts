interface TelegramMainButton {
  setParams: (params: { text?: string }) => void;
  show: () => void;
  hide: () => void;
}

export interface TelegramWebApp {
  expand: () => void;
  ready: () => void;
  setHeaderColor?: (color: string) => void;
  MainButton: TelegramMainButton;
  onEvent?: (event: string, callback: () => void) => void;
  offEvent?: (event: string, callback: () => void) => void;
  requestFullscreen?: () => void;
}

declare global {
  interface Window {
    Telegram?: {
      WebApp?: TelegramWebApp;
      [key: string]: unknown;
    };
  }
}

export {};