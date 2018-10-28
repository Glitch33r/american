-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Окт 28 2018 г., 16:34
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
  `description` longtext COLLATE utf8_unicode_ci,
  `off_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `article_table`
--

INSERT INTO `article_table` (`id`, `hp_id`, `title`, `sub_title`, `description`, `off_id`) VALUES
(1, 1, 'Team bonus', 'Experienced drivers - $ 1250.00 - $ 5000.00', 'A11 sign-on bonuses are relative to actual OTR Professional Experience. Sign-on bonus starts week #5. Amortized in equal monthly increments. Over 12 months.  Sign on bonus is pro-rated by mos. worked.', NULL),
(2, 1, 'Safety bonus', 'Each driver to receive an additional $ 0.015/ mile. If all of the above pre—requisites have been achieved.', 'Total Team mileage (48.000+) (practical dispatched mileage) Period of time: (60 days) <br/> No accidents;  No log Violations; No moving Violations; No out of service Violations; No cargo claims; No weight Violations; No damages to the equipment.', NULL),
(3, 1, 'Referall bonus', 'Any driver Who refers a new driver shall receive a bonus of $ 1, 200.00.', 'This bonus shall begin on the 5th week of the new driver tenure. This bonus is to be paid in $ 100.00/m0. increments up to $1200.00. Total after 12 consecutive months.', NULL),
(4, NULL, 'TEAM BONUS', 'Experienced drivers - $ 1250.00 - $ 5000.00', 'A11 sign-on bonuses are relative to actual OTR Professional Experience. Sign-on bonus starts week #5. Amortized in equal monthly increments. Over 12 months. Sign on bonus is pro-rated by mos. worked.', 1);

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
-- Структура таблицы `corporate_philosophy_table`
--

CREATE TABLE `corporate_philosophy_table` (
  `id` int(11) NOT NULL,
  `first_blc_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `first_blc_sub_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `first_blc_description` longtext COLLATE utf8_unicode_ci,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_at` datetime NOT NULL,
  `second_blc_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `second_blc_sub_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `second_blc_description` longtext COLLATE utf8_unicode_ci,
  `list_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `corporate_philosophy_table`
--

INSERT INTO `corporate_philosophy_table` (`id`, `first_blc_title`, `first_blc_sub_title`, `first_blc_description`, `image`, `updated_at`, `second_blc_title`, `second_blc_sub_title`, `second_blc_description`, `list_name`) VALUES
(1, 'We Are Family', 'Grand USA Transport — Intimacy, Family, to Ourselves, our Drivers and our Customers.', 'From inception, we have always maintained and projected ourselves as what we are at our core. Simply, a family owned business based on core principles, based on actions not words, honesty, integrity, values, ethics, morals and intimacy. We not only hold these traits true to ourselves as people but apply these traits to our corporate selves as well. We keep it real. We are proud that throughout our tenure as a company, we have maintained our base principles and have applied them to management and more importantly, our drivers.', NULL, '2018-10-28 16:28:45', 'OUR HISTORY.  GROWTH VIA VISION', 'It’s simple. You cannot know where you are going without having a point of origin as a reference. This philosophy is not only applicable to people, but to businesses as well.', 'Grand USA Transport was founded 7 years ago with 2 Trucks and 2 Drivers. The 2 Drivers are the 2 founding partners. Our 3rd visionary partnerjoined the company shortly after inception. Their simple belief was then as it remains now ”Follow your dreams, create their reality with no limitations”. The dream was to create a company that would experience constructive and exponential continuous growth. It is now mid 2018, and we are holding assets totaling 30 trucks. Our fleet consist of 2016-2019 Freightliner Cascadias and Volvos, with 10 additional 2019 Freightliners on order. We anticipate a fleet of 50 units within the next 8-12 months and 100 within the next 2 calendar years. Belief, drive and vision combine can make dreams reality. We have many more dreams and the best is yet to come. To becontinued. Always Forward.', 'OUR COMPANY PRINCIPLES — KEEP IT SIMPLE');

-- --------------------------------------------------------

--
-- Структура таблицы `equipment_table`
--

CREATE TABLE `equipment_table` (
  `id` int(11) NOT NULL,
  `first_blc_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `first_blc_sub_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `first_blc_description` longtext COLLATE utf8_unicode_ci,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_at` datetime NOT NULL,
  `second_blc_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `second_blc_sub_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `second_blc_description` longtext COLLATE utf8_unicode_ci,
  `list_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `paralax_blc_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `paralax_blc_sub_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `paralax_blc_description` longtext COLLATE utf8_unicode_ci,
  `listright_blc_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `listright_blc_sub_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `listright_blc_description` longtext COLLATE utf8_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `equipment_table`
--

INSERT INTO `equipment_table` (`id`, `first_blc_title`, `first_blc_sub_title`, `first_blc_description`, `image`, `updated_at`, `second_blc_title`, `second_blc_sub_title`, `second_blc_description`, `list_name`, `paralax_blc_title`, `paralax_blc_sub_title`, `paralax_blc_description`, `listright_blc_title`, `listright_blc_sub_title`, `listright_blc_description`) VALUES
(1, 'Trucks and Trailer Equipment', 'The Grand USA Transport fleet of trucks is comprised of both new and newer Freightliner Cascadia and Volvo tractors. The age of manufacturing of our equipment ranges between 2016 — 2019 models.', 'As of September 2018, we currently have an additional 10 units of Freightliner Cascadias on order. All of our units are complete with refrigerators, microwaves, bunk heaters and inverters. All of our units are complete with refrigerators, microwaves, and inverters. Each unit of our fleet both trucks and trailers are continuously maintained to the highest levels of quality and performance standards. All mechanical work on our trucks is performed in house, on premises within the confines of a state of the art 16,000 Square Foot facility, by the most professionally trained and certified group of preeminent mechanics that money can buy. All of our units are perpetually inspected and maintained to maximize safety, performance, reliability, and absolute efficiency. We would never settle for any less. Our customers and drivers expect this. We deliver this.', NULL, '2018-10-26 19:52:26', 'TRUCKS TRAILERS', 'Grand USA Transport LLC — Temperature Controlled Fleet, Always Cold. It’s all that we know.', 'We live & breathe ”Reefer” transportation that we do. We understand climate control. Designed for durability related to sustainment, and shelf life extension of the products contained within. We know that shipments of various goods deemed ”perishable” need to be handled meticulously, each differently, each with care. Grand USA Transport prides itself in the fact that not only do we comprehensively understand the specific needs of product that is perishable, we understand that tainted goods = worthless goods. Our units are maintained to the highest standard in the industry, which guarantees the accuracy of the interior reefer climate is accurate to protect the cargo within from pick up to delivery. Our reefer trailers are continuously monitored throughout the span of their respective transport. No matter the product or temperature required, chilled, frozen, fresh. We utilize trailers manufactured by Wabash & Utility. Our refrigeration units are manufactured by Carrier.', 'CUSTOMER REEFER RELATIONS', 'THAT’S ALL WE DO!', NULL, 'Our customers understand the nature of refrigerated transport. They also want, and demand as they should comprehensive expertise and focus from the transport delivering their products. We deliver confidence and comfort to our customers in the fact that we have mastered the science of climate control relative to their products, all with different scale and scope and each with very specific requirements regarding temperature control. Grand USA Transport will never claim that its’ expertise applies and extends to everything. The fact is and remains that we live in a world of Reefers, and that world we know COLD!', 'COLD IS COOL', 'Our deliveries are timely. We absolutely create through explicit time management of our fleet the most precise routing for your goods to arrive at their ultimate destination on time, every time, through the entirety of their journey.', 'Proper temperature control is always maintained and monitored within the confines of our 30 reefer trailers. Our reefer trailers are constantly monitored for any fluctuation during the tenure of the transit of your products giving to our customers the knowledge that their goods are safe every step of the way. At Grand USA Transport your product is protected from climate related damage from the moment it is picked up through the moment it is delivered. Fresh In — Fresh Cut. That is why we only rely on top of the line equipment to ensure the product stays fresh and intact throughout its’ journey.');

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
(1, 'admin', 'admin', 'admin@gmail.com', 'admin@gmail.com', 1, NULL, '$2y$13$0SlXKs6MOQRNI785DQTyReYxVs3/ubSwaZa4MOyvmPcKcTEvy27Fy', '2018-10-26 10:34:14', NULL, NULL, 'a:1:{i:0;s:16:\"ROLE_SUPER_ADMIN\";}');

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
(1, 'Driver’s Statement', '”Ensuring Our Future by Building Your Future” Grand USA Transport — A Relatively Simple and Firm Corporate Philosophy.', 'Since our humble beginnings 7 years ago, through the present, our corporate mindset has been and remains grounded in firm basic principles of dedication, belief, hard—work, diligence, tenacity, and no limitations. We hold ourselves accountable, as we expect to hold our drivers accountable, not only to our ethics, morals, principies, but to their own.', 'img01.jpg', '2018-10-16 18:31:03', 'Trucks and Trailer Equipment', 'The Grand USA Transport fleet of trucks is comprised of both new and newer Freightliner Cascadia and Volvo tractors. The age of manufacturing of our equipment ranges between 2016 — 2019 models.', 'As of September 2018, we currently have an additional 10 units of Freightliner Cascadias on order. All of our units are complete with refrigerators, microwaves, bunk heaters and inverters. All of our units are complete with refrigerators, microwaves, and inverters.', 'Our deliveries are timely', NULL, 'We absolutely create through explicit time management of our fleet the most precise routing for your goods to arrive at their ultimate destination on time, every time, through the entirety of theirjourney. Proper temperature control is always maintained and monitored within the confines of our 30 reefer trailers.', 'All Products, All Delivered:');

-- --------------------------------------------------------

--
-- Структура таблицы `list_table`
--

CREATE TABLE `list_table` (
  `id` int(11) NOT NULL,
  `hp_id` int(11) DEFAULT NULL,
  `title` longtext COLLATE utf8_unicode_ci,
  `cp_id` int(11) DEFAULT NULL,
  `eq_right_id` int(11) DEFAULT NULL,
  `maintitle` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `eq_left_id` int(11) DEFAULT NULL,
  `off_left_id` int(11) DEFAULT NULL,
  `off_right_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `list_table`
--

INSERT INTO `list_table` (`id`, `hp_id`, `title`, `cp_id`, `eq_right_id`, `maintitle`, `eq_left_id`, `off_left_id`, `off_right_id`) VALUES
(1, 1, 'Dairy', NULL, NULL, NULL, NULL, NULL, NULL),
(2, 1, 'Produce', NULL, NULL, NULL, NULL, NULL, NULL),
(3, 1, 'Botanicals', NULL, NULL, NULL, NULL, NULL, NULL),
(4, 1, 'Seafood', NULL, NULL, NULL, NULL, NULL, NULL),
(5, 1, 'Meat', NULL, NULL, NULL, NULL, NULL, NULL),
(6, 1, 'Pharmaceuticals', NULL, NULL, NULL, NULL, NULL, NULL),
(7, NULL, 'When it comes to the world of refrigerated trucking, and transport, longshots are not worth the gamble. There is too much at stake, and not worth the risk. Precision is necessity. Science is golden!', NULL, NULL, 'Refrigerated trucking', 1, NULL, NULL),
(8, NULL, 'Proper temperature control', NULL, 1, NULL, NULL, NULL, NULL),
(9, NULL, 'Our deliveries are timely.', NULL, 1, NULL, NULL, NULL, NULL),
(10, NULL, 'Salary wired every Friday (required full docs submission)', NULL, NULL, NULL, NULL, 1, NULL),
(11, NULL, 'High weekly mileage (up to 6.500 per team)', NULL, NULL, NULL, NULL, 1, NULL),
(12, NULL, '1 year/ 1 week', NULL, NULL, NULL, NULL, NULL, 1),
(13, NULL, '2 years/ 10 day', NULL, NULL, NULL, NULL, NULL, 1),
(14, NULL, 'Go with your strengths', 1, NULL, NULL, NULL, NULL, NULL),
(15, NULL, 'Forward always in all ways', 1, NULL, NULL, NULL, NULL, NULL),
(16, NULL, 'Remember mistakes of past. Avoid them in future', 1, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `offers_table`
--

CREATE TABLE `offers_table` (
  `id` int(11) NOT NULL,
  `first_blc_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `first_blc_sub_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `first_blc_description` longtext COLLATE utf8_unicode_ci,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_at` datetime NOT NULL,
  `list_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `listright_blc_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `listright_blc_sub_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `listright_blc_description` longtext COLLATE utf8_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `offers_table`
--

INSERT INTO `offers_table` (`id`, `first_blc_title`, `first_blc_sub_title`, `first_blc_description`, `image`, `updated_at`, `list_name`, `listright_blc_title`, `listright_blc_sub_title`, `listright_blc_description`) VALUES
(1, 'Driver’s statement', '”Ensuring Our Future by Building Your Future”. Grand USA Transport — A Relatively Simple and Firm Corporate Philosophy.', 'Since our humble beginnings 7 years ago, through the present, our corporate mindset has been and remains grounded in firm basic principles of dedication, belief, hard—work, diligence, tenacity, and no limitations. We hold ourselves accountable, as we expect to hold our drivers accountable, not only to our ethics, morals, principies, but to their own. We pride ourselves in the belief that the road to achievement and success is never—ending. This road must be built on solid rock, not quicksand. Grand USA Transport provides that road to success by constantly analyzing and implementing the changes necessary so that our drivers and ourseives can realize their dreams, goals and aspirations, in parody to our own.', NULL, '2018-10-28 16:25:28', 'DRIVER PERKS', 'DRIVER VACATION', 'Grand USA Transport, LLC. Believes its’ vacation package to be among the most generous in the business.', 'All vacation request must be submitted minimum 3 weeks in advance for up to 2 week vacation, 1 month for 3-4 weeks vacation. Our vacation plan is as follows:');

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
(1, 'home', 'Home', 'Home', 'Home', NULL),
(2, 'corporate-philosophy', 'CORPORATE PHILOSOPHY', 'CORPORATE PHILOSOPHY', 'CORPORATE PHILOSOPHY', NULL),
(3, 'equipment', 'Equipment', 'Equipment', 'Equipment', NULL),
(4, 'contacts', 'CONTACTS', 'CONTACTS', 'CONTACTS', NULL),
(5, 'for-drivers', 'For Drivers', 'For Drivers', 'For Drivers', NULL);

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
  `updated_at` datetime NOT NULL,
  `image_520` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image_960` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `slider_table`
--

INSERT INTO `slider_table` (`id`, `hp_id`, `title`, `description`, `image`, `updated_at`, `image_520`, `image_960`) VALUES
(3, 1, 'Trucks and Trailer Equipment', 'Each unit of our fleet both trucks and trailers are continuously maintained to the highest levels of quality and performance standards. All mechanical work on our trucks is performed in house, on premises within the confines of a state of the art 16,000 Square Foot facility, by the most professionally trained and certified group of preeminent mechanics that money can buy.', 'slider001.jpg', '2018-10-16 00:00:00', NULL, NULL),
(4, 1, 'Relationship with <br> Our Drivers', 'We extend to our drivers both philosophically and pragmatically all that we hold true to ourselves as management. We offer an environment not only based on our own needs but more importantly their needs. Without them, there is no us.', 'slider002.jpg', '2018-10-16 19:07:17', NULL, NULL),
(5, 1, 'We Are Family', 'Our drivers are our foundation our rock, our boots on the ground, our infantry. They are the engine that facilitates the means to achieve all dreams, possibilities, growth and ultimately ourjointly held achieved realities.', 'slider003.jpg', '2018-10-16 20:30:37', NULL, NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `article_table`
--
ALTER TABLE `article_table`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_819EFD579D5F772F` (`hp_id`),
  ADD KEY `IDX_819EFD57D95F2A3C` (`off_id`);

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
-- Индексы таблицы `corporate_philosophy_table`
--
ALTER TABLE `corporate_philosophy_table`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `equipment_table`
--
ALTER TABLE `equipment_table`
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
  ADD KEY `IDX_2FBA1B459D5F772F` (`hp_id`),
  ADD KEY `IDX_2FBA1B45EA8F463E` (`cp_id`),
  ADD KEY `IDX_2FBA1B45CFD15CCB` (`eq_right_id`),
  ADD KEY `IDX_2FBA1B45C09A80C2` (`eq_left_id`),
  ADD KEY `IDX_2FBA1B45A82DAF1D` (`off_left_id`),
  ADD KEY `IDX_2FBA1B45D9D524A1` (`off_right_id`);

--
-- Индексы таблицы `offers_table`
--
ALTER TABLE `offers_table`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
-- AUTO_INCREMENT для таблицы `corporate_philosophy_table`
--
ALTER TABLE `corporate_philosophy_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `equipment_table`
--
ALTER TABLE `equipment_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT для таблицы `offers_table`
--
ALTER TABLE `offers_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `seo_table`
--
ALTER TABLE `seo_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
  ADD CONSTRAINT `FK_819EFD579D5F772F` FOREIGN KEY (`hp_id`) REFERENCES `home_table` (`id`),
  ADD CONSTRAINT `FK_819EFD57D95F2A3C` FOREIGN KEY (`off_id`) REFERENCES `offers_table` (`id`);

--
-- Ограничения внешнего ключа таблицы `list_table`
--
ALTER TABLE `list_table`
  ADD CONSTRAINT `FK_2FBA1B459D5F772F` FOREIGN KEY (`hp_id`) REFERENCES `home_table` (`id`),
  ADD CONSTRAINT `FK_2FBA1B45A82DAF1D` FOREIGN KEY (`off_left_id`) REFERENCES `offers_table` (`id`),
  ADD CONSTRAINT `FK_2FBA1B45C09A80C2` FOREIGN KEY (`eq_left_id`) REFERENCES `equipment_table` (`id`),
  ADD CONSTRAINT `FK_2FBA1B45CFD15CCB` FOREIGN KEY (`eq_right_id`) REFERENCES `equipment_table` (`id`),
  ADD CONSTRAINT `FK_2FBA1B45D9D524A1` FOREIGN KEY (`off_right_id`) REFERENCES `offers_table` (`id`),
  ADD CONSTRAINT `FK_2FBA1B45EA8F463E` FOREIGN KEY (`cp_id`) REFERENCES `corporate_philosophy_table` (`id`);

--
-- Ограничения внешнего ключа таблицы `slider_table`
--
ALTER TABLE `slider_table`
  ADD CONSTRAINT `FK_709DC3229D5F772F` FOREIGN KEY (`hp_id`) REFERENCES `home_table` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
