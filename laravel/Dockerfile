FROM php:8.1-fpm-buster

ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/

RUN apt-get update && apt-get install -y unzip \
    && apt-get -y autoremove \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \
    && chmod +x /usr/local/bin/install-php-extensions && sync \
    && install-php-extensions bcmath pcov pdo_mysql redis zip @composer \
    && usermod -u 1000 www-data

RUN cd /usr/local/etc/php/conf.d/ \
    && echo 'memory_limit = 256M' >> /usr/local/etc/php/conf.d/docker-php-ram-limit.ini

WORKDIR /var/www/laravel

RUN chown www-data:www-data /var/www

COPY --chown=www-data:www-data . .

USER www-data

EXPOSE 9000