interface AppConfig {
  apiUrl: string;
}

export const settings = JSON.parse(localStorage.getItem('settings')!) as {
  theme: string;
  locale: string;
};

export const theme = settings.theme.toLowerCase();

const cfg = (window as unknown as { __APP_CONFIG__: AppConfig }).__APP_CONFIG__;
export const API_URL = cfg.apiUrl;

export const MODAL_ROOT = document.getElementById('modal-root')!;

export function mountModal(el: HTMLElement): void {
  MODAL_ROOT.appendChild(el);
}

export const isMobile = (navigator as unknown as { userAgentData: { mobile: boolean } })
  .userAgentData.mobile;

export const debugFlag = import.meta.env.VITE_DEBUG.toLowerCase() === 'true';

export const origin = new URL(window.location.hash.slice(1)).origin;

export const snapshot = structuredClone({ settings, onSave: () => {} });
