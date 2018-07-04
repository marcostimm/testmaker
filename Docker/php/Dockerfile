FROM php:fpm
RUN apt-get update && apt-get install -y libmcrypt-dev git zlib1g-dev libmemcached-dev libpq-dev curl \
    && pecl install mcrypt-1.0.1 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-enable mcrypt

# PHP PDo
RUN docker-php-ext-install pdo pdo_mysql

# Basic Lumen packages
RUN docker-php-ext-install \
        mbstring \
        zip

# Install Memcached for php 7
RUN curl -L -o /tmp/memcached.tar.gz "https://github.com/php-memcached-dev/php-memcached/archive/php7.tar.gz" \
    && mkdir -p /usr/src/php/ext/memcached \
    && tar -C /usr/src/php/ext/memcached -zxvf /tmp/memcached.tar.gz --strip 1 \
    && docker-php-ext-configure memcached \
    && docker-php-ext-install memcached \
    && rm /tmp/memcached.tar.gz

# Install Composer
RUN curl --silent --show-error https://getcomposer.org/installer | php

# Laravel
RUN composer global require "laravel/installer"

# Download all dependencices
WORKDIR /var/www/html/web/app
RUN php composer.phar install
