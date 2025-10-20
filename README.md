# Memhash - Premium Telegram Web App

Высококачественное веб-приложение для Telegram с современным дизайном и оптимальной производительностью.

## Особенности

### Современный UX/UI
- Адаптивный дизайн для всех размеров экранов
- Темная тема с поддержкой Telegram Theme API
- Плавные анимации 60 FPS
- Минималистичный интерфейс

### Технологии
- **Telegram WebApp API** - полная интеграция с Telegram
- **PWA** - Progressive Web App с оффлайн поддержкой
- **Service Worker** - кэширование и быстрая загрузка
- **CSS Variables** - динамическое управление темой
- **Haptic Feedback** - тактильная обратная связь

### Производительность
- Оптимизация шрифтов с `preconnect`
- Lazy loading для изображений
- RequestAnimationFrame для плавных анимаций
- Минимальное использование JavaScript
- Оптимизированные CSS transitions

## Структура проекта

```
├── index.html          # Главная страница (Memhash Mining)
├── gang.html           # Дополнительная страница (Gangsta Wars)
├── manifest.json       # PWA Manifest
├── sw.js              # Service Worker
└── README.md          # Документация
```

## Лучшие практики

### 1. Telegram Integration
```javascript
const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();
tg.enableClosingConfirmation();
```

### 2. Theme Support
Приложение автоматически адаптируется под тему Telegram:
```javascript
document.documentElement.style.setProperty('--tg-theme-bg-color', tg.themeParams.bg_color);
```

### 3. Haptic Feedback
Используйте тактильную обратную связь для улучшения UX:
```javascript
tg.HapticFeedback.impactOccurred('medium');
```

### 4. Performance
- Используйте CSS animations вместо JavaScript
- Применяйте `will-change` для оптимизации
- RequestAnimationFrame для анимаций

## Дизайн-система

### Цвета
```css
--accent-primary: #5B8CFF
--accent-success: #7CFFC0
--accent-warning: #FFF084
--accent-danger: #FF5E5E
--accent-mining: #A8FF94
```

### Градиенты
```css
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
--gradient-success: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)
--gradient-mining: linear-gradient(135deg, #A8FF94 0%, #7CFFC0 100%)
```

### Spacing System
```css
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px
```

### Typography
- **Primary Font**: Inter (400, 500, 600, 700)
- **Monospace Font**: JetBrains Mono (400, 500, 600)

## Развертывание

### GitHub Pages
1. Загрузите файлы в репозиторий
2. Включите GitHub Pages в настройках
3. Выберите ветку для публикации

### Telegram Bot
1. Создайте бота через @BotFather
2. Получите URL приложения
3. Настройте Web App:
```
/newapp
/setdomain - укажите ваш домен
/setdescription - добавьте описание
```

## Оптимизация

### Lighthouse Score Targets
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100
- PWA: ✓

### Core Web Vitals
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

## Браузерная поддержка

- Chrome/Edge: 90+
- Safari: 14+
- Firefox: 88+
- Telegram Desktop: все версии
- Telegram Mobile: iOS 14+, Android 6+

## Безопасность

- CSP (Content Security Policy) ready
- HTTPS обязателен для продакшна
- Валидация Telegram initData
- XSS защита

## Roadmap

- [ ] Добавить темную/светлую тему переключатель
- [ ] Интеграция с TON Wallet
- [ ] Push уведомления
- [ ] Мультиязычность (i18n)
- [ ] Анимированные переходы между страницами
- [ ] WebGL визуализация

## Ресурсы

- [Telegram WebApp Documentation](https://core.telegram.org/bots/webapps)
- [Telegram Mini Apps Guidelines](https://core.telegram.org/bots/webapps#design-guidelines)
- [PWA Documentation](https://web.dev/progressive-web-apps/)

## Лицензия

MIT License

## Автор

Создано с использованием лучших практик Telegram Web Apps 2025

---

**Качество**: Enterprise-grade
**Performance**: 60 FPS
**Mobile-first**: ✓
**PWA**: ✓
