---
templateKey: "blog-page"
path: /blog/all
title: How to Use VS Code If You Are a Writer
description: Want to concentrate on writing text in VS Code? Use this minimalistic setup. No extensions needed.
date: 2019-07-11
hero: /img/minimalistic-vscode.jpg
categories: advices
tags: ["Текст", "ВС Код", "Настройка"]
---

Every second developer uses Visual Studio Code (according to Stack Overflow's 2019 [survey results](https://insights.stackoverflow.com/survey/2019#development-environments-and-tools)). I've moved to VS Code from Sublime Text one year ago and love it — high functionality: live server for web apps, debug, source control, built-in terminal, — minimalistic design, monthly updates an much more. The problem appears when I need to write plain text, like this, for the blog. Here are some tricks to make VS Code better for writing.

VS Code has a lot of excess elements, which interfere with focus. That's because I decided to set up the editor for writing text. Very useful is to set up VS Code through JSON: separate rule for every element. It makes the process of transformation easier.

Changes that I did is disable some options and hiding elements

- Hide the activity bar. I do this in all of the apps in which can
- Hide the side bar
- Hide the status bar
- Edit window title
- Hide tabs. Still can access them by `Ctrl + Tab` on Windows and `⌘ + ⌥ + Tab` on macOS
- Did a lot of changes in editor section (turned off different highlights, removed line numbers, disabled mini-map etс.)
- Work with fonts. I didn't change monospace to sans-serif, but I increase size and weight

Apply this changes to settings. Settings icon at the left-bottom corner → 'Settings' → `{}` icon at the right-top corner. Save your main settings (maybe, you want revent in the future) and replace them by this code:

```javascript
{
  // Window
  "window.menuBarVisibility": "toggle", // Hide menu bar.
  // Can be accessible by press Alt key
  "window.title": "${dirty}${activeEditorShort} ⚡ >_<", // Change Window Title
  "window.zoomLevel": 0, // Default zoom level

  // Editor
  "editor.cursorSmoothCaretAnimation": true, // Smoth cursor mooving animation
  "editor.fontFamily": "'Fira Code',\
  Consolas, 'Courier New', monospace", // My font setup. You can paste your own.
  // Fira Code <3
  "editor.fontLigatures": true, // Enable ligatures.
  // Works only if your font support them
  "editor.fontWeight": "500", // Font weight. I love using semi-bold
  "editor.fontSize": 16, // Font size. Set to 16 to better visibility of text
  "editor.lineNumbers": "off", // Remove line numbers
  "editor.wordWrap": "on", // Enable Word wrapping for no gorizontall scrolling
  "editor.minimap.enabled": false, // Remove minimap
  "editor.renderWhitespace": "none", // Remove whitespace characters
  "editor.renderIndentGuides": false, // Remove indent guides
  "editor.renderLineHighlight": "none", // Remove line height
  "editor.overviewRulerBorder": false, // Remove border on scrollbar
  // (try to enable and disable and look at scrollbar. You can see changes)
  "editor.hideCursorInOverviewRuler": true, // Hide cursor position on scrollbar
  "editor.folding": false, // Remove folding feature
  // (try to enable and hover left side of editor by cursor. You can see buttons for folding)
  "editor.occurrencesHighlight": false, // Remove highlights occurrences
  // (works when you select a word)
  "editor.glyphMargin": false, // Remove the space for glyphs like `edit` and
  // `debug` at the left side of editor.

  // Workbench
  "workbench.sideBar.location": "left", // Default side bar position
  "workbench.tree.renderIndentGuides": "none", // Remove indent guides
  "workbench.editor.showTabs": false, // Remove tabs
  // (only showing one active in full-width)
  "workbench.activityBar.visible": false, // Remove activity bar
  // (bar with big icons at the left)
  // (you can acces them via Command palette
  // or you can access to default icons by hot keys)
  "workbench.editor.showIcons": false, // Remove icon from tab title
  "workbench.statusBar.visible": false, // Remove status bar
  // (panel at the bottom)
  "workbench.colorTheme": "Material Theme Palenight", // My color theme.
  // You can paste your own
  // by downloading from extensions marketplace and enabling
  "workbench.iconTheme": "material-icon-theme", // My icon theme.
  // You can paste your own
  // by downloading from extensions marketplace and enabling
  "workbench.colorCustomizations": { // Custom accent color settings
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
  "breadcrumbs.enabled": false, // Remove breadcrumbs

  // Languages
  "markdown.preview.fontFamily": "Inter, Helvetica Neue, Helvetica, sans-serif",
  // Change default font for markdown preview. Inter <3

  // Explorer
  "explorer.openEditors.visible": 0 // Remove open editors from explorer.
  // You can access them by `Ctrl + Tab` in Windows and `⌘ + ⌥ + Tab` in macOS.
}
```

![Result](/img/vscode-transform.png "Result")

You can access to a lot of functions through Command Palette `Ctrl + Shif + P`
