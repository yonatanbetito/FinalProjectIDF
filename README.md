# FinalProjectIDF

פרויקט זה הוא מערכת לניהול פוסטים ומשתמשים, הכוללת צד שרת (Node.js) וצד לקוח (React + TypeScript + Vite).

## מבנה הפרויקט

## צד שרת עם שרת אקספרס 
backend/
  app.js
  package.json
  controller/
    post.controller.js
    user.controller.js
## גישה לדאטה בייס שכבת הדאטה
  DAL/
    post.dal.js
    user.dal.js
## קבצי דאטה ביס מקומיים שמשם השרת שולף נתונים
  DB/
    post.txt
    user.txt
## תקייה סטטית שמכילה תמונות ודברים שהמידל וואר שהוגדר יהיה לו גישה
  public/
    1.jpg
    2.jpg
##  הגדרת ראוטר לכל אנדפוינט עם חלוקה לפוסטים ומשתמשים
  routes/
    confing.routes.js
    post.route.js
    user.route.js
## הוספות דברים בין השלב של הקונטרול לבין העדכון בדאטה או להיפך לדוגמא זמן וכאלה
  services/
    post.service.js
    user.service.js

## צד לקוח הפרונט שמבוצע בריאקט עם עיקרון של spa
frontProject/
  eslint.config.js
  index.html
  package.json
  README.md
  tsconfig.app.json
  tsconfig.json
  tsconfig.node.json
  vite.config.ts

  public/
    1.png
    2.png
    ...
## תקייה עם קבצים ראשיים שינהלו את כל הראוטים
  src/
    App.css
    App.tsx
    index.css
    main.tsx
    vite-env.d.ts
    assets/
      react.svg
## קומפונטות לפי דפים כל קומפונטה מלווה עם הקובץ עיצוב שלה (לפי הצורך)
    compons/
      Addpost.css
      AddPost.tsx
      ...
## דפים ראשיים שיכילו את כל הקומפונטות במידת הצורך
    pages/
      Addpost.tsx
      Home.tsx
      Login.tsx
      Register.tsx
```

## יש בקובץ json את כל התלויות תחת כותרת dependencies

1. יש להוריד את הקוד ולהתקין את התלויות:
 אחרי שכל התיקיות ירדו יש להריץ את קובץ ולוודא שאין שגיאות שחוזרות
 לוודא ששתי הצדדים הורדו והופעלו שלב שלב :

### צד שרת

```
cd backend
npm install
```
cd backend
node app.js
```

### צד לקוח

```
cd frontProject
npm install
```
cd frontProject
npm run dev
```

## תיאור כללי יותר לקבצים המערכת

### backend

- **app.js**: קובץ ראשי שמפעיל את השרת ומגדיר את הראוטים.
- **controller/**: לוגיקת ניהול פוסטים ומשתמשים.
- **DAL/**: גישה לקבצי הנתונים (DB).
- **DB/**: קבצי טקסט המשמשים כבסיס נתונים.
- **public/**: תמונות לפוסטים.
- **routes/**: הגדרת ראוטים ל-API.
- **services/**: שירותים לפוסטים ומשתמשים.

### frontProject

- **src/**: קוד המקור של האפליקציה.
  - **compons/**: קומפוננטים עיקריים (פוסט, משתמש, הוספת פוסט וכו').
  - **pages/**: דפי מערכת (בית, הרשמה, התחברות, הוספת פוסט).
  - **assets/**: תמונות ואייקונים.
- **public/**: תמונות סטטיות.
- **index.html**: דף ראשי.
- **vite.config.ts**: קונפיגורציה ל-Vite.

## טכנולוגיות

- Node.js
- Express
- React
- TypeScript
- Vite

## הערות
לגבי הקבצי env 
- כל הנתונים נשמרים בקבצי טקסט (DB) ולא בבסיס נתונים אמיתי.
- התמונות מאוחסנות בתיקיית public.
- ניתן להרחיב את המערכת בקלות ולהוסיף פיצ'רים חדשים.