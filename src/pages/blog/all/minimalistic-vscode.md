---
title: Как использовать ВС Код, если ты писатель
description: Минималистичный ВС Код для писателей. Переходим с Sublime Text. Расширения не нужны
date: 2019-07-11
hero: /img/preview/minimalistic-vscode.jpg
categories: advices
tags: ["текст", "вс код", "настройка"]
---

Каждый второй разработчик использует Visual Studio Code (из результатов [опроса](https://insights.stackoverflow.com/survey/2019#development-environments-and-tools) Стэковерфлоу). Я перешел на ВС Код с Саблайм Текста год назад и теперь влюблен в новый редактор — высокая функциональность: лайв запуск сайтов, дебаг, гит, терминал, — минималистичный дизайн, ежемесячные обновления и много другого. Проблема появляется, когда мне надо написать простой текст, как этот, для блога. Здесь пригодятся некоторые фишки, для настройки.

В ВС Коде много лишних элементов — они полезны для разработки, но писателя они отвлекают. Поэтому я решил настроить его. Очень удобно настраивать через JSON: отдельное правило для каждого элемента и все легко копируется и вставляется. Чтоб не переключаться между настройками, я установил отдельную инсайдерскую версию, которая работает также стабильно и записал в нее новые правила.

Изменения, которые я внес, отключают функции и прячут элементы:

1. Скрыл верхнюю панель с кнопками. Я делаю это везде, где могу.
2. Скрыл боковую панель с большими кнопками.
3. Скрыл нижнюю статусную панель.
4. Отредактировал название окна, чтоб не захламлять. Оставил только имя файла и свои символы.
5. Спрятал вкладки. Они все равно доступны по сочетаниям `'Ctrl + Tab'` в Виндоус и `'⌘ + ⌥ + Tab'` в Маке.
6. Внес изменения в редактор: отключил лишние подсвечивания, убрал номера строк, отключил мини-карту и т. д.
7. Поработал со шрифтом: не стал убирать моноширинный, но изменил размер.

Применять настройки можно в соответствующем меню: иконка настроек в левом нижнем углу → иконка `'{}'` в правом верхнем углу. Сохраните свои нынешние настройки, может быть, вы захотите вернуться, и вставьте эти:

```javascript
{
  // Окно
  "window.menuBarVisibility": "toggle", // Скрываю меню бар.
  // Доступен по нажатию Alt.
  "window.title": "${dirty}${activeEditorShort} ⚡ >_<", // Изменяю название окна

  // Редактор
  "editor.cursorSmoothCaretAnimation": true, // Включаю плавную анимацию движения курсора
  "editor.fontFamily": "'Fira Code',\
  Consolas, 'Courier New', monospace", // Моя настройка шрифтов. Можно вставить свою.
  // Fira Code <3
  "editor.fontLigatures": true, // Включаю лигатуры.
  // Работает только, если ваш шрифт поддерживает их.
  "editor.fontWeight": "500", // Меняю ширину шрифта.
  // Люблю жирные, но для большого текста неудобно, поэтому полужирный.
  "editor.fontSize": 16, // Меняю размер шрифта.
  // Поставил на 16, чтоб побольше.
  "editor.lineNumbers": "off", // Убираю нумерацию строк.
  "editor.wordWrap": "on", // Включаю перенос слов.
  "editor.minimap.enabled": false, // Убираю мини-карту.
  "editor.renderWhitespace": "none", // Убираю символы,
  // которые отображаются вместо пробелов.
  "editor.renderIndentGuides": false, // Убираю линию,
  // которая помогает определять вложенность в коде.
  "editor.renderLineHighlight": "none", // Убираю подсветку линий.
  "editor.overviewRulerBorder": false, // Убираю рамку у скроллбара.
  // Попробуйте включить и отключить и посмотрите на спроллбар справа.
  "editor.hideCursorInOverviewRuler": true, // Прячу отображение курсора на скроллбаре.
  "editor.folding": false, // Убираю функцию вложенности.
  // Если функция включена — слева можно навести мышкой и увидить иконки.
  "editor.occurrencesHighlight": false, // Убираю другую подсветку.
  // Все равно работает при выборе слов.
  "editor.glyphMargin": false, // Убираю место под иконки редактирования и дебага.

  // Воркбенч
  "workbench.tree.renderIndentGuides": "none", // Убираю линию,
  // которая помогает определять вложенность в папках.
  "workbench.editor.showTabs": false, // Отключаю вкладки.
  // Отображается только активная на всю ширину.
  "workbench.activityBar.visible": false, // Убираю панель с большими иконками слева.
  // Можно получать доступ к вкладкам по сочетаниям клавиш (смотреть в настройках).
  "workbench.editor.showIcons": false, // Убираю иконки из вкладок.
  "workbench.statusBar.visible": false, // Убираю нижнюю панель.
  "workbench.colorTheme": "Material Theme Palenight", // Ставлю кастомную тему.
  // Устанавливается из магазина расширений.
  "workbench.iconTheme": "material-icon-theme", // Ставлю кастомную тему иконок.
  // Устанавливается из магазина расширений.
  "workbench.colorCustomizations": { // Ставлю кастомный цвет акцента.
    "activityBarBadge.background": "#FFA000",
    "list.activeSelectionForeground": "#FFA000",
    "list.inactiveSelectionForeground": "#FFA000",
    "list.highlightForeground": "#FFA000",
    "scrollbarSlider.activeBackground": "#FFA00050",
    "editorSuggestWidget.highlightForeground": "#FFA000",
    "textLink.foreground": "#FFA000",
    "progressBar.background": "#FFA000",
    "pickerGroup.foreground": "#FFA000",
    "tab.activeBorder": "#FFA000",
    "notificationLink.foreground": "#FFA000",
    "editorWidget.resizeBorder": "#FFA000",
    "editorWidget.border": "#FFA000",
    "settings.modifiedItemIndicator": "#FFA000",
    "settings.headerForeground": "#FFA000",
    "panelTitle.activeBorder": "#FFA000",
    "breadcrumb.activeSelectionForeground": "#FFA000",
    "menu.selectionForeground": "#FFA000",
    "menubar.selectionForeground": "#FFA000"
  },

  // Breadcrumbs
  "breadcrumbs.enabled": false, // Убираю Breadcrubms.
  // Полоска над редактором со вложенностью.

  // Языки
  "markdown.preview.fontFamily": "Inter, Helvetica Neue, Helvetica, sans-serif",
  // Меняю шрифт превью маркдауна.
  // Inter <3

  // Эксплорер
  "explorer.openEditors.visible": 0 // Убираю список активных файлов.
}
```

![ВС Код: до моих настроек и после](/img/vscode-transform.png "ВС Код: до моих настроек и после")

Многие функции все еще можно получить из Коммандной строки ВС Кода, `Ctrl + Shif + P`
