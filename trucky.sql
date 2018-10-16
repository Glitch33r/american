-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Окт 16 2018 г., 20:30
-- Версия сервера: 5.6.38
-- Версия PHP: 7.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `trucky`
--

-- --------------------------------------------------------

--
-- Структура таблицы `article_table`
--

CREATE TABLE `article_table` (
  `id` int(11) NOT NULL,
  `hp_id` int(11) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sub_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `article_table`
--

INSERT INTO `article_table` (`id`, `hp_id`, `title`, `sub_title`, `description`) VALUES
(1, 1, 'Article 1', 'Article 1', 'Article 1'),
(2, 1, 'Article 2', 'Article 2', 'Article 2'),
(3, 1, 'Article 3', 'Article 3', 'Article 3');

-- --------------------------------------------------------

--
-- Структура таблицы `category_table`
--

CREATE TABLE `category_table` (
  `id` int(11) NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `contacts_table`
--

CREATE TABLE `contacts_table` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `subtitle` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `contact_form_table`
--

CREATE TABLE `contact_form_table` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `telephone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `body` longtext COLLATE utf8_unicode_ci,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `fos_user`
--

CREATE TABLE `fos_user` (
  `id` int(11) NOT NULL,
  `username` varchar(180) COLLATE utf8_unicode_ci NOT NULL,
  `username_canonical` varchar(180) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(180) COLLATE utf8_unicode_ci NOT NULL,
  `email_canonical` varchar(180) COLLATE utf8_unicode_ci NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `salt` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `confirmation_token` varchar(180) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password_requested_at` datetime DEFAULT NULL,
  `roles` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `fos_user`
--

INSERT INTO `fos_user` (`id`, `username`, `username_canonical`, `email`, `email_canonical`, `enabled`, `salt`, `password`, `last_login`, `confirmation_token`, `password_requested_at`, `roles`) VALUES
(1, 'admin', 'admin', 'admin@gmail.com', 'admin@gmail.com', 1, NULL, '$2y$13$0SlXKs6MOQRNI785DQTyReYxVs3/ubSwaZa4MOyvmPcKcTEvy27Fy', '2018-10-11 00:21:16', NULL, NULL, 'a:1:{i:0;s:16:\"ROLE_SUPER_ADMIN\";}');

-- --------------------------------------------------------

--
-- Структура таблицы `home_table`
--

CREATE TABLE `home_table` (
  `id` int(11) NOT NULL,
  `first_blc_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `first_blc_sub_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `first_blc_description` longtext COLLATE utf8_unicode_ci,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_at` datetime NOT NULL,
  `second_blc_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `second_blc_sub_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `second_blc_description` longtext COLLATE utf8_unicode_ci,
  `paralax_blc_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `paralax_blc_sub_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `paralax_blc_description` longtext COLLATE utf8_unicode_ci,
  `list_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `home_table`
--

INSERT INTO `home_table` (`id`, `first_blc_title`, `first_blc_sub_title`, `first_blc_description`, `image`, `updated_at`, `second_blc_title`, `second_blc_sub_title`, `second_blc_description`, `paralax_blc_title`, `paralax_blc_sub_title`, `paralax_blc_description`, `list_name`) VALUES
(1, 'First content block', 'First content block', 'First content block', NULL, '2018-10-16 18:31:03', 'Second content block', 'Second content block', 'Second content block', 'Paralax', 'Paralax', 'Paralax', 'List');

-- --------------------------------------------------------

--
-- Структура таблицы `list_table`
--

CREATE TABLE `list_table` (
  `id` int(11) NOT NULL,
  `hp_id` int(11) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `list_table`
--

INSERT INTO `list_table` (`id`, `hp_id`, `title`) VALUES
(1, 1, 'List 1'),
(2, 1, 'List 2'),
(3, 1, 'List 3'),
(4, 1, 'List 4'),
(5, 1, 'List 5'),
(6, 1, 'List 6');

-- --------------------------------------------------------

--
-- Структура таблицы `seo_table`
--

CREATE TABLE `seo_table` (
  `id` int(11) NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `h1` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `keywords` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `seo_table`
--

INSERT INTO `seo_table` (`id`, `slug`, `h1`, `title`, `description`, `keywords`) VALUES
(1, 'home', 'Home', 'Home', 'Home', 'Home'),
(2, 'about', 'About', 'About', 'About', 'About');

-- --------------------------------------------------------

--
-- Структура таблицы `service_table`
--

CREATE TABLE `service_table` (
  `id` int(11) NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `published` tinyint(1) NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `slider_table`
--

CREATE TABLE `slider_table` (
  `id` int(11) NOT NULL,
  `hp_id` int(11) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `slider_table`
--

INSERT INTO `slider_table` (`id`, `hp_id`, `title`, `description`, `image`, `updated_at`) VALUES
(3, 1, '1', '1', NULL, '2018-10-16 00:00:00'),
(4, 1, '2', '2', NULL, '2018-10-16 19:07:17'),
(5, 1, '3', '3', NULL, '2018-10-16 20:30:37');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `article_table`
--
ALTER TABLE `article_table`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_819EFD579D5F772F` (`hp_id`);

--
-- Индексы таблицы `category_table`
--
ALTER TABLE `category_table`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_1E1AC00F989D9B62` (`slug`);

--
-- Индексы таблицы `contacts_table`
--
ALTER TABLE `contacts_table`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `contact_form_table`
--
ALTER TABLE `contact_form_table`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `fos_user`
--
ALTER TABLE `fos_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_957A647992FC23A8` (`username_canonical`),
  ADD UNIQUE KEY `UNIQ_957A6479A0D96FBF` (`email_canonical`),
  ADD UNIQUE KEY `UNIQ_957A6479C05FB297` (`confirmation_token`);

--
-- Индексы таблицы `home_table`
--
ALTER TABLE `home_table`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `list_table`
--
ALTER TABLE `list_table`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_2FBA1B459D5F772F` (`hp_id`);

--
-- Индексы таблицы `seo_table`
--
ALTER TABLE `seo_table`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_701BB14989D9B62` (`slug`);

--
-- Индексы таблицы `service_table`
--
ALTER TABLE `service_table`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_5F5B62A1989D9B62` (`slug`);

--
-- Индексы таблицы `slider_table`
--
ALTER TABLE `slider_table`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_709DC3229D5F772F` (`hp_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `article_table`
--
ALTER TABLE `article_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `category_table`
--
ALTER TABLE `category_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `contacts_table`
--
ALTER TABLE `contacts_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `contact_form_table`
--
ALTER TABLE `contact_form_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `fos_user`
--
ALTER TABLE `fos_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `home_table`
--
ALTER TABLE `home_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `list_table`
--
ALTER TABLE `list_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `seo_table`
--
ALTER TABLE `seo_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `service_table`
--
ALTER TABLE `service_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `slider_table`
--
ALTER TABLE `slider_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `article_table`
--
ALTER TABLE `article_table`
  ADD CONSTRAINT `FK_819EFD579D5F772F` FOREIGN KEY (`hp_id`) REFERENCES `home_table` (`id`);

--
-- Ограничения внешнего ключа таблицы `list_table`
--
ALTER TABLE `list_table`
  ADD CONSTRAINT `FK_2FBA1B459D5F772F` FOREIGN KEY (`hp_id`) REFERENCES `home_table` (`id`);

--
-- Ограничения внешнего ключа таблицы `slider_table`
--
ALTER TABLE `slider_table`
  ADD CONSTRAINT `FK_709DC3229D5F772F` FOREIGN KEY (`hp_id`) REFERENCES `home_table` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
