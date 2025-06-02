interface TelegramMainButton {
  setParams: (params: { text?: string }) => void;
  show: () => void;
  hide: () => void;
}

export interface TelegramWebApp {
  expand: () => void;
  ready: () => void;
  setHeaderColor: (color: string) => void; 
  requestFullscreen: () => void; // <--- добавьте эту строку
  MainButton: TelegramMainButton;
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