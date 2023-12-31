# Поднятие проекта локально

## Заходим в папку проекта и переходим в develop ветку

```bash
cd ~/projects/pet-project
# название папки проекта может быть другим у тебя

git checkout develop
# если ветки develop еще нету, создаем
git checkout -b develop
```

## Устанавливаем зависимости с помощью yarn

Если yarn еще не установлен - `npm install --global yarn`

```
yarn
```

## Запускаем проект в режиме разработки

```
yarn dev
```

Он должен открыться в браузере на 4000 порту localhost'а ( [http://localhost:4000/](http://localhost:4000/) )

# Разработка "фич"

## Создаем ветку фичи

Перед этим не забываем обновить ветку develop

```bash
git checkout develop # если мы на другой ветке
git pull
git checkout -b feat/...
# например ветку в которой мы добавляем кнопку можно назвать feat/add-button
```

## Пишем код...

## После завершения фичи создаем PR (PR - pull request)

```bash
git add .
git commit -m "Бла бла бла" # коммит может быть не один естественно

# если пушим ветку первый раз, надо написать вот так
git push --set-upstream origin $(git branch --show-current)
# если нет
git push

# Можно установить gh чтобы создавать/смотреть пул реквесты прямо из консоли
# Но это не обязательно, можно просто через браузер - как удобно так и делаем

gh pr create --web # создаем PR
```

## Ждемс апрув

---

# Добавление новых компонентов

В папке `/components` создаем папку с названием компонента,
например `Card`. После добавляем корневой файл и стили. Должно получится как то так:

```
components/
  Card/
    index.tsx
    Card.module.css
```

Внутри `index.tsx` базовая структура компонента может выглядеть так:

```
import React from 'react';

import styles from './Card.module.css'

// Если пропсы есть
type Props = {
 // ...
};

const Card = (props: Props) => {
  // ...

  return <div className={styles['card']}>Card</div>;
};

export default Card;
```
