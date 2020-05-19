---
title: Мастер Букет 2
description: "Что нового у Мастер Букета: список, причины, процесс, результаты"
date: 2019-07-31
image: /images/preview/masterbuket-2.jpg
category: programming
tags: ["веб", "мастер букет"]
---

Сперва я расскажу про историю создания и развития сайта Мастер Букета до нынешнего времени:

> Давно я взялся за проект Мастер Букет, задача: сайт и начальная раскрутка соц. сетей. Сайт писал долго: не было контента, ломался ноутбук, переписывал заново, ждал заказчика с деталями... Спустя полтора месяца мы запустили сайт. Мне сайт нравился: я полюбил Гельветику, цвета, расположения элементов и то, что довел проект до релиза один.
>
> Сразу после запуска я начал писать обновление — адаптация, новый контент,
> данные в JSON. Это были первые и последние шаги в PHP. Я узнавал новое —
> добавлял на сайт. Обновление так и не вышло.

Новый, добрый Мастер Букет заменяет старый и злой. Что изменилось: я избавился
от зависимостей: Bootstrap и jQuery, изменил дизайн: новое положение
элементов, оптимизировал.

## Как избавлялся от мусора

Больше не будет jQuery. Он оказался тяжелее, чем чистый JavaScript.
Исправлять ошибки сложно, потому что опытные разработчики пишут на ванильном
JavaScript и советов не дадут. Много кода не понадобилось: вывод букетов из
файла JSON и пару фишек с прокручиванием и появлением.

Раньше много элементов привязывалось к двум библиотекам: WOW и Animate. Еще две
зависимости, чтоб элементы выезжали с анимацией. Это пишется и без библиотек.
_Кастомизации больше — веса меньше._

> Написано без Фреймворков. Важно помнить про чистый HTML и CSS. Нет
> Джаваскрипта — есть скорость.

![Размер зависимостей Мастер Букета: Animate, WOW, jQuery](/images/anim-wow-jq.jpg)

### Перенес все на CSS Grid

Сайт состоял из колонок Bootstrap. Когда я писал его, не знал о CSS Grid.
Запросто переписал. Больше колонок, строки, расстояние между модулями.
_Кастомизации больше — веса меньше._

## Как редизайнил

Я частично прочитал книгу "Модульные системы в графическом дизайне". Вдохновился
осмысленностью и аккуратностью, отказался от налезающих элементов. Верстка стала
компактнее: на мобилках стартовый экран стал короче, теперь в строку помещается
четыре букета вместо трех.

Элементы теперь «висят», больше нет прибитых картинок, видео или карт.
Расстояние снаружи и внутри сетки одинаковое.

## Как ускорял

Пришлось сильно сжать картинки, убрать видео и карту. От `.webp` картинок
отказался, потому что они еще больше разрастались, чем сжатые JPEG. Сайт
грузится быстрее: даже спиннер загрузки не понадобился. Во второй раз грузится
моментально, но я не добавлял поддержку PWA. Еще убрал эмоджи по запросу
клиентов и сделал простенькую 404 страницу, хотя на одностраничнике не нужна, — традиция.

![Результаты PageSpeed Insights по скорости](/images/masterbuket-speed.jpg)

Ссылка: [masterbuket.now.sh](https://masterbuket.now.sh)