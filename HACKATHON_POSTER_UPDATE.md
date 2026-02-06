# Обновление изображения постера хакатона

## Где используется изображение:

1. **Страница хакатона:** `/src/app/hackathon/page.tsx`
   - Строка 123: `/events/Caltech%20Longevity%20Hackathon.avif`

2. **Раздел Events:** `/src/app/events/page.tsx` и `/src/components/sections/events.tsx`
   - Используется изображение из `event.speakers[0]?.photo` для события с id "hackaton-2026"
   - В `src/data/events.ts` указано: `photo: "/events/Caltech Longevity Hackathon.avif"`

## Как обновить:

1. Замените файл `/public/events/Caltech Longevity Hackathon.avif` на новое изображение постера
2. Или сохраните новое изображение с тем же именем в папку `/public/events/`
3. Если используете другое имя файла, обновите пути в:
   - `src/data/events.ts` (строка 15)
   - `src/app/hackathon/page.tsx` (строка 123)

## Рекомендуемый формат:
- Формат: AVIF, JPG или PNG
- Размер: рекомендуется 1920x1080 или больше
- Название: `Caltech Longevity Hackathon.avif` (или соответствующий формат)
