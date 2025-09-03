import 'server-only';
import type { Locale } from '@/i18n.ts';

const dictionaries = {
    uz: () => import('@/locales/uz/common.json').then((module) => module.default),
    ru: () => import('@/locales/ru/common.json').then((module) => module.default),
    en: () => import('@/locales/en/common.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
    dictionaries[locale]();