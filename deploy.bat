@echo off
chcp 65001 >nul
echo 🚀 بدء عملية النشر...
echo Starting deployment process...

REM التحقق من وجود Node.js
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js غير مثبت. يرجى تثبيت Node.js أولاً.
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM التحقق من وجود npm
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm غير مثبت. يرجى تثبيت npm أولاً.
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo ✅ Node.js و npm مثبتان
echo ✅ Node.js and npm are installed

REM تثبيت التبعيات
echo 📦 تثبيت التبعيات...
echo 📦 Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo ❌ فشل في تثبيت التبعيات
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ تم تثبيت التبعيات بنجاح
echo ✅ Dependencies installed successfully

REM بناء المشروع
echo 🔨 بناء المشروع...
echo 🔨 Building project...
npm run build

if %errorlevel% neq 0 (
    echo ❌ فشل في بناء المشروع
    echo ❌ Failed to build project
    pause
    exit /b 1
)

echo ✅ تم بناء المشروع بنجاح
echo ✅ Project built successfully

REM فحص حجم الملفات المبنية
echo 📊 حجم الملفات المبنية:
echo 📊 Built files size:
dir build /s

echo.
echo 🎉 تم النشر بنجاح!
echo 🎉 Deployment completed successfully!
echo.
echo 📁 الملفات المبنية موجودة في مجلد 'build'
echo 📁 Built files are in the 'build' folder
echo.
echo 🌐 لرفع الموقع على الإنترنت، يمكنك استخدام:
echo 🌐 To deploy online, you can use:
echo    - Netlify
echo    - Vercel
echo    - GitHub Pages
echo    - Firebase Hosting
echo.
echo 📞 للدعم: +964 787 380 5425
echo 📧 البريد الإلكتروني: info@sotakamanah.com
echo.
echo 🇮🇶 صوتك أمانة، مستقبلك بيدك
echo 🇮🇶 Sotakamanah, your future is in your hands
pause 