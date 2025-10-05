## Стек

* **React 19 + TypeScript**
* **Vite** (dev/сборка/preview)
* **Redux Toolkit** (slice, selectors, middleware)
* **React Router v7** (роутинг, loaders/element)
* **SCSS Modules** (адаптивная вёрстка)
* **Radix UI** (UI-kit)
* **ESLint + Prettier** (единый стиль кода)

---

## Структура (FSD)

```
src/
├─ app/                        # Инициализация приложения
│  ├─ index.ts                 # Подключение провайдеров, экспорт app-слоёв
│  ├─ ui.tsx                   # Корневой App/layout
│  ├─ layout/                  # Каркас приложения (Header, Section, т.п.)
│  │  ├─ ui.tsx
│  │  ├─ styles.module.scss
│  │  └─ index.ts
│  └─ providers/
│     ├─ store/                # Конфигурация Redux Store
│     │  ├─ index.ts
│     │  └─ types.d.ts
│     └─ router/               # Конфиг маршрутизации
│        ├─ ui.tsx
│        └─ index.ts
│
├─ pages/
│  ├─ vitrine/                 # Главная (витрина игр)
│  │  ├─ ui.tsx
│  │  └─ index.ts
│  └─ admin/                   # Админ-панель
│     ├─ ui.tsx
│     └─ index.ts
│
├─ widgets/
│  ├─ providers-games/         # Список игр по провайдеру/фильтру
│  │  ├─ ui.tsx
│  │  ├─ styles.module.scss
│  │  └─ index.ts
│  └─ select-provider/         # Выбор провайдера
│     ├─ ui.tsx
│     └─ index.ts
│
├─ features/
│  └─ reset-provider-filter/   # Кнопка/фича: сброс фильтра
│     ├─ ui.tsx
│     ├─ styles.module.scss
│     └─ index.ts
│
├─ entities/
│  └─ game/
│     ├─ hooks/
│     │  └─ useLoadGames.ts    # Загрузка мок-данных в store
│     ├─ lib/
│     │  ├─ mock.json          # Mock данных игр
│     │  └─ index.ts
│     ├─ model/
│     │  ├─ slice.ts           # games slice: items, providerFilter
│     │  ├─ selectors.ts       # селекторы
│     │  ├─ middleware.ts      # синхронизация с localStorage
│     │  ├─ types.ts           # типы Game, GamesState
│     │  └─ index.ts
│     └─ ui/
│        ├─ games-card/        # Карточка игры
│        └─ games-card-contolled/ # Карточка с управляющими элементами (admin)
│           ├─ ui.tsx
│           ├─ styles.module.scss
│           └─ index.ts
│
├─ shared/
│  ├─ config/router.ts         # Общие маршруты/пути
│  ├─ lib/
│  │  └─ validators/           # Валидаторы (например, isUrl)
│  │     ├─ isUrl.ts
│  │     └─ index.ts
│  ├─ styles/                  # Глобальные стили/переменные
│  │  ├─ styles.scss
│  │  ├─ theme.scss
│  │  └─ variables/
│  │     ├─ colors.scss
│  │     ├─ fonts.scss
│  │     └─ sizes.scss
│  └─ ui/                      # Базовые UI-компоненты
│     ├─ header/
│     ├─ popover/
│     ├─ section/
│     ├─ select/
│     ├─ settings-button/
│     └─ switch/
│
├─ main.tsx                    # Входная точка Vite
└─ vite-env.d.ts
```

`public/assets/` содержит иконки/логотипы (`gamepad.svg`, `grid.svg`, `logo.png`) 

---

## Состояние и данные

### Типы (`entities/game/model/types.ts`)

```ts
export type Game = {
  id: number;
  title: string;
  provider: string;
  image?: string;
  isActive: boolean;  // видимость на витрине
};

export type GamesState = {
  items: Game[];
  providerFilter: string | null;
};
```

### Slice (`entities/game/model/slice.ts`)

* `setAll(Game[])` — загрузка массива игр (из `mock.json`).
* `toggleActive(id: number)` — переключение `isActive` для игры.
* `setProviderFilter(string | null)` — установка фильтра по провайдеру.

### Селекторы (`entities/game/model/selectors.ts`)

* `selectAllGames(state)` — все игры.
* `selectProviders(state)` — список уникальных провайдеров.
* `selectFilteredGames(state)` — активные игры, отфильтрованные по `providerFilter`.

### Загрузка моков (`entities/game/hooks/useLoadGames.ts`)

Хук читает `lib/mock.json` и диспатчит `setAll`. Вызывается через `loader` маршрута.

---

## Маршрутизация

* `/` — **Витрина** (страница `pages/vitrine`):

  * Секция выбора провайдера (`widgets/select-provider`)
  * Секция списка игр (`widgets/providers-games`)
  * Карточки игр (`entities/game/ui/games-card`)
  * Показываются **только `isActive: true`** + фильтр по провайдеру

* `/admin` — **Админ-панель** (страница `pages/admin`):

  * Таблица/список игр с возможностью переключения статуса
  * Используются контролируемые карточки (`entities/game/ui/games-card-contolled`)
  * Состояние обновляется через Redux (`toggleActive`)

---

## Функционал (TL;DR)

* Витрина:

  * карточки игр (название, провайдер, изображение);
  * фильтр по провайдеру (select) + кнопка «Сбросить»;
  * адаптивная сетка.
* Админка:

  * список/таблица со всеми играми;
  * переключение `isActive` (сразу влияет на витрину).
* Данные:

  * из `entities/game/lib/mock.json` (mock JSON);
  * изображения — в `public/assets/...`.

---

## Запуск

```bash
# Установка
yarn install

# Dev
yarn dev
# откроется http://localhost:5173

# Продакшен
yarn build
yarn preview
```