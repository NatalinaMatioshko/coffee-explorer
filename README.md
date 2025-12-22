# ☕ Coffee Explorer

> _Every bean tells a story_

Сучасний веб-додаток для любителів кави, створений з React, TypeScript та Tailwind CSS. Досліджуйте світ кави, зберігайте улюблені сорти та знаходьте ідеальну каву для себе.

[![Deploy](https://github.com/NatalinaMatioshko/coffee-explorer/actions/workflows/deploy.yml/badge.svg)](https://github.com/NatalinaMatioshko/coffee-explorer/actions/workflows/deploy.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

## 🌟 Особливості

- 🎨 **Сучасний дизайн** - Елегантний інтерфейс у кавових тонах
- 📱 **Повна адаптивність** - Ідеально працює на всіх пристроях
- ❤️ **Система обраного** - Зберігайте улюблені сорти кави (Zustand)
- 🔐 **Автентифікація** - Вхід та реєстрація користувачів
- 🎯 **React Router** - Швидка навігація без перезавантажень
- ⚡ **Оптимізована продуктивність** - Vite для швидкої збірки
- 🎭 **Плавні анімації** - Framer Motion для елегантних переходів
- 📦 **Керування станом** - Zustand для ефективного state management

## 🛠️ Технології

| Категорія            | Технологія                   |
| -------------------- | ---------------------------- |
| **Frontend**         | React 18.3, TypeScript 5.6   |
| **Стилізація**       | Tailwind CSS 3.4, Custom CSS |
| **Роутинг**          | React Router DOM 7.1         |
| **State Management** | Zustand 5.0                  |
| **Анімації**         | Framer Motion 11.15          |
| **Іконки**           | React Icons 5.4              |
| **Build Tool**       | Vite 6.0                     |
| **Deployment**       | GitHub Pages                 |

## 📦 Встановлення

### Вимоги

- Node.js >= 18.0.0
- npm або yarn

### Локальне середовище

Клонувати репозиторій
git clone https://github.com/NatalinaMatioshko/coffee-explorer.git

Перейти в директорію
cd coffee-explorer

Встановити залежності
npm install

Запустити dev сервер
npm run dev

text

Відкрийте [http://localhost:5173](http://localhost:5173) в браузері.

## 🚀 Команди

Розробка
npm run dev # Запуск dev сервера

Збірка
npm run build # Production build
npm run preview # Preview production build

Деплой
npm run deploy # Деплой на GitHub Pages

Lint
npm run lint # ESLint перевірка

text

## 📁 Структура проєкту

coffee-explorer/
├── public/ # Статичні файли
│ └── assets/ # Зображення, шрифти
├── src/
│ ├── components/ # React компоненти
│ │ ├── Header.tsx
│ │ ├── Menu.tsx
│ │ ├── MobileMenu.tsx
│ │ ├── Logo.tsx
│ │ └── ...
│ ├── pages/ # Сторінки додатку
│ │ ├── Home.tsx
│ │ ├── MenuPage.tsx
│ │ ├── BeansPage.tsx
│ │ └── ...
│ ├── store/ # Zustand stores
│ │ ├── useAuthStore.ts
│ │ └── useFavoritesStore.ts
│ ├── hooks/ # Custom React hooks
│ ├── App.tsx # Головний компонент
│ ├── main.tsx # Entry point
│ └── index.css # Глобальні стилі
├── tailwind.config.js # Tailwind конфігурація
├── tsconfig.json # TypeScript конфігурація
└── vite.config.ts # Vite конфігурація

text

## 🎨 Дизайн

### Кольорова палітра

- **Основний темний**: `#4f2d20`
- **Світлий фон**: `#f9f3e9`
- **Акцент**: `#ecc29c`
- **Темний коричневий**: `#5f2109`

### Типографія

- **Основний шрифт**: System fonts
- **Розміри**: Адаптивні (sm, base, lg, xl)

## 📱 Сторінки

- **Головна** (`/`) - Hero секція з анімаціями
- **Меню** (`/menu`) - Каталог напоїв
- **Зерна** (`/beans`) - Каталог кавових зерен
- **Курси** (`/courses`) - Навчальні програми
- **Контакти** (`/contacts`) - Контактна інформація
- **Обране** (`/favorites`) - Збережені позиції

## 🔄 Останні оновлення

- ✅ Виправлено стилі мобільного меню ([952c3ee](https://github.com/NatalinaMatioshko/coffee-explorer/commit/952c3eedb595f966d8b4424cc8f413108fccd887))
- ✅ Покращено поведінку header ([2874237](https://github.com/NatalinaMatioshko/coffee-explorer/commit/2874237a8106d10b239b47e80a5c0efa9aaac852))
- ✅ Додано функціонал обраного з Zustand ([43cf8e5](https://github.com/NatalinaMatioshko/coffee-explorer/commit/43cf8e57242c84e807b938e63097501c40b6502c))
- ✅ Заміна Link на NavLink з анімаціями ([7752950](https://github.com/NatalinaMatioshko/coffee-explorer/commit/7752950bb6adf8ffb5fd0db5a2507999d04bdd68))

## 🤝 Внесок

Вітаються будь-які пропозиції та покращення!

1. Fork проєкт
2. Створіть feature гілку (`git checkout -b feature/AmazingFeature`)
3. Commit зміни (`git commit -m 'Add some AmazingFeature'`)
4. Push в гілку (`git push origin feature/AmazingFeature`)
5. Відкрийте Pull Request

## 📝 Ліцензія

Цей проєкт є відкритим для використання.

## 👤 Автор

**Natalia Matioshko**

- GitHub: [@NatalinaMatioshko](https://github.com/NatalinaMatioshko)
- Email: 165213062+NatalinaMatioshko@users.noreply.github.com

## 🙏 Подяки

- Іконки від [React Icons](https://react-icons.github.io/react-icons/)
- Анімації від [Framer Motion](https://www.framer.com/motion/)
- UI компоненти побудовані з [Tailwind CSS](https://tailwindcss.com/)

---

⭐
