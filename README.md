# Установка и настройка приложения Solana на Next.js

## Поднятие локальной ноды Solana

1. Установка Solana CLI:
    ```bash
    sh -c "$(curl -sSfL https://release.solana.com/v1.18.18/install)"
    ```

2. Запустить локальную ноду:
    ```bash
    solana-test-validator
    ```

3. Подключить Solana CLI к локальной ноде:
    ```bash
    solana config set --url localhost
    ```

## Сборка приложения

1. Установлены зависимостей:
    ```bash
    npm install
    ```

2. Собрать приложение:
    ```bash
    npm run build
    ```

3. Запустите приложение:
    ```bash
    npm run dev
    ```

## Пополнение кошелька через CLI

1. Сгенерировать новый кошелек:
    ```bash
    solana-keygen new --outfile ~/my-wallet.json
    ```

2. Установить переменную окружения для кошелька:
    ```bash
    export SOLANA_WALLET_PROVIDER=~/my-wallet.json
    ```

3. Пополните кошелек средствами:
    ```bash
    solana airdrop 100
    ```

## Подтверждение транзакции

1. Создание и отправка транзакции:
    ```bash
    solana transfer <recipient-address> 1 --from ~/my-wallet.json
    ```

2. Проверить статус транзакции:
    ```bash
    solana confirm <transaction-signature>
    ```
    Заменить `<transaction-signature>` на подпись транзакции, которую получили при ее создании.
