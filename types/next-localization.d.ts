declare module 'next-localization-type' {
    interface I18nType {
        locale(lang?: string): string;
        set(lang: string): void;
        t(key: string, params?: Record<string, unknown>, lang?: string): string;
    }
}
