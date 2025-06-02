interface TelegramBackButton {
  isVisible: boolean;
  show: () => void;
  hide: () => void;
  onClick: (callback: () => void) => void;
  offClick: (callback: () => void) => void;
  // setParams отсутствует в официальной документации BackButton!
}

interface TelegramMainButton {
  setParams: (params: { text?: string }) => void;
  show: () => void;
  hide: () => void;
}

export interface TelegramWebApp {
  expand: () => void;
  ready: () => void;
  setHeaderColor?: (color: string) => void;
  requestFullscreen?: () => void;
  MainButton: TelegramMainButton;
  BackButton?: TelegramBackButton;
  onEvent?: (event: string, callback: () => void) => void;
  offEvent?: (event: string, callback: () => void) => void;
  initDataUnsafe?: {
    user?: {
      id: number;
      first_name?: string;
      last_name?: string;
      username?: string;
      language_code?: string;
    };
    [key: string]: unknown;
  };
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