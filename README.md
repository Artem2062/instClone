# ****Галерея изображений / Image Gallery 🖼️****  
  
## ****Версия 1.0 / Version 1.0****  
  
\---  
  
## ****Русский 🇷🇺****  
  
### ****О проекте****  
  
\*\*Галерея изображений\*\* — это веб-приложение для публикации и просмотра изображений с функциональностью регистрации пользователей, авторизации и личных профилей.  
  
### ****🏗️ Архитектура проекта****  
  
Проект имеет \*\*уникальную архитектуру без выделенного сервера\*\*:  
  
\- \*\*Отсутствует backend-сервер\*\* — вся логика выполняется на стороне клиента  
\- \*\*Облачное JSON-хранилище\*\* — для хранения данных используется внешнее API  
\- \*\*Каждый компьютер является сервером\*\* — обработка данных происходит локально  
\- \*\*Синхронизация через JSON\*\* — данные хранятся в трех JSON-файлах в облаке  
  
### ****📋 Функциональность****  
  
\- ✅ Просмотр ленты с изображениями  
\- ✅ Регистрация новых пользователей  
\- ✅ Вход в существующий аккаунт  
\- ✅ Добавление новых постов с изображениями  
\- ✅ Личный профиль пользователя  
\- ✅ Индикатор прогресса прокрутки страницы  
  
### ****🔧 Технические детали****  
  
#### ****Используемые технологии:****  
\- HTML5  
\- CSS3  
\- JavaScript (Vanilla)  
\- Handlebars.js для шаблонизации  
\- XMLHttpRequest для работы с API  
  
### ⚠️ Важное предупреждение о неработоспособности

> ****🔴 В настоящее время проект НЕ РАБОТАЕТ по техническим причинам****

#### Причины неработоспособности:

1.  ****Недоступность облачного хранилища**** — API по адресу `https://studyprograms.informatics.ru/api/jsonstorage/` не отвечает
2.  ****Зависимость от внешнего сервиса**** — проект полностью зависит от стороннего API
3.  ****Отсутствие альтернативных источников данных**** — все три JSON-хранилища используют один и тот же недоступный сервер

#### Код содержит следующие неработающие запросы:

javascript

// Эти запросы не будут работать, так как API недоступно  
```bash
let xhr = new XMLHttpRequest();  
xhr.open('GET', 'https://studyprograms.informatics.ru/api/jsonstorage/?id=178d829c10f9998752f13ccbb645c37c', true);  
  
let xhrr = new XMLHttpRequest();  
xhrr.open('GET', 'https://studyprograms.informatics.ru/api/jsonstorage/?id=2429f73afa9b592236f2c5d499e84272', true);  
  
let xhrs = new XMLHttpRequest();  
xhrs.open('GET', 'https://studyprograms.informatics.ru/api/jsonstorage/?id=03e8a8630a1d84c9f83e13b7714e608d', true);
```
### 🔧 Как исправить (для разработчиков)

Для восстановления работоспособности проекта необходимо:

1.  ****Найти альтернативное JSON-хранилище**** или развернуть свое
2.  ****Заменить все URL**** в коде на новые рабочие адреса
3.  ****Инициализировать хранилища**** начальными данными


### 📁 Структура проекта

text

project/  
│  
├── index.html          # Главная страница (лента)  
├── index2.html         # Страница добавления поста  
├── index3.html         # Страница профиля  
├── register.html       # Страница регистрации  
├── enter.html          # Страница входа  
│  
├── css/  
│   └── style.css       # Стили проекта  
│  
├── js/  
│   └── script.js       # Основной скрипт (представленный выше код)  
│  
└── README.md           # Документация

### 🚀 Локальный запуск (без работающего API)

1.  Скачайте все файлы проекта
2.  Откройте любой HTML-файл в браузере
3.  ****Важно****: без работающего API функциональность будет ограничена:
4.  -   Не загрузятся посты
    -   Не сработает регистрация
    -   Не будет работать вход
    -   Профиль будет пустым

### 📝 Особенности кода

-   Используется `localStorage` для хранения состояния авторизации
-   Применяется Handlebars для генерации HTML-шаблонов
-   Реализован индикатор прогресса прокрутки
-   Проверка уникальности логина при регистрации
-   Валидация полей ввода

## English 🇬🇧

### About the Project

****Image Gallery**** is a web application for publishing and viewing images with user registration, authorization, and personal profiles functionality.

### 🏗️ Project Architecture

The project has a ****unique serverless architecture****:

-   ****No backend server**** — all logic runs on the client side
-   ****Cloud JSON storage**** — external API is used for data storage
-   ****Each computer is a server**** — data processing happens locally
-   ****JSON synchronization**** — data is stored in three JSON files in the cloud

### 📋 Functionality

-   ✅ Image feed viewing
-   ✅ New user registration
-   ✅ Existing account login
-   ✅ Adding new posts with images
-   ✅ Personal user profile
-   ✅ Page scroll progress indicator

### 🔧 Technical Details

#### Technologies Used:

-   HTML5
-   CSS3
-   JavaScript (Vanilla)
-   Handlebars.js for templating
-   XMLHttpRequest for API communication

### ⚠️ Important Notice About Non-functionality

> ****🔴 Currently, the project DOES NOT WORK due to technical reasons****

#### Reasons for Non-functionality:

1.  ****Cloud storage unavailable**** — API at `https://studyprograms.informatics.ru/api/jsonstorage/` is not responding
2.  ****Dependency on external service**** — project completely depends on a third-party API
3.  ****No alternative data sources**** — all three JSON storages use the same unavailable server

#### Code contains the following non-working requests:

javascript

// These requests will not work as the API is unavailable  
```bash
let xhr = new XMLHttpRequest();  
xhr.open('GET', 'https://studyprograms.informatics.ru/api/jsonstorage/?id=178d829c10f9998752f13ccbb645c37c', true);  
  
let xhrr = new XMLHttpRequest();  
xhrr.open('GET', 'https://studyprograms.informatics.ru/api/jsonstorage/?id=2429f73afa9b592236f2c5d499e84272', true);  
  
let xhrs = new XMLHttpRequest();  
xhrs.open('GET', 'https://studyprograms.informatics.ru/api/jsonstorage/?id=03e8a8630a1d84c9f83e13b7714e608d', true);
```
### 🔧 How to Fix (for Developers)

To restore project functionality, you need to:

1.  ****Find alternative JSON storage**** or deploy your own
2.  ****Replace all URLs**** in the code with new working addresses
3.  ****Initialize storages**** with initial data

### 📁 Project Structure

text

project/  
│  
├── index.html          # Main page (feed)  
├── index2.html         # Add post page  
├── index3.html         # Profile page  
├── register.html       # Registration page  
├── enter.html          # Login page  
│  
├── css/  
│   └── style.css       # Project styles  
│  
├── js/  
│   └── script.js       # Main script (code presented above)  
│  
└── README.md           # Documentation

### 🚀 Local Launch (without working API)

1.  Download all project files
2.  Open any HTML file in your browser
3.  ****Important****: without a working API, functionality will be limited:
4.  -   Posts won't load
    -   Registration won't work
    -   Login won't function
    -   Profile will be empty

### 📝 Code Features

-   Uses `localStorage` to store authorization state
-   Uses Handlebars for HTML template generation
-   Implements scroll progress indicator
-   Login uniqueness check during registration
-   Input field validation
