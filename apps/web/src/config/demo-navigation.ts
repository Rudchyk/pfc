export const globalErrorDemoPath = '/demo/global-error';

export const demoNavigation = [
  {
    href: '/demo/404',
    label: '404',
    description: 'Справжня сторінка для неіснуючого маршруту.',
  },
  {
    href: '/demo/error',
    label: 'Error',
    description: 'Обробка помилки маршруту та повторна спроба.',
  },
  {
    href: globalErrorDemoPath,
    label: 'Global Error',
    description: 'Незалежна обробка помилки кореневого layout.',
  },
  {
    href: '/demo/loading',
    label: 'Loader та Skeleton',
    description: 'Завантаження маршруту із демонстраційною затримкою.',
  },
  {
    href: '/demo/global-loading',
    label: 'Global Loader',
    description: 'Паралельні операції та завершення з помилкою.',
  },
  {
    href: '/demo/notifications',
    label: 'Сповіщення',
    description: 'Чотири типи сповіщень і черга повідомлень.',
  },
  {
    href: '/demo/layout',
    label: 'Layout',
    description: 'Розташування footer на короткій та довгій сторінці.',
  },
  {
    href: '/demo/theme',
    label: 'Тема',
    description: 'Світла, темна та системна тема, кольори й типографіка.',
  },
] as const;
