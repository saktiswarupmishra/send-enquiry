@echo off
echo =========================================
echo Send Enquiry App - Installation Script
echo =========================================
echo.
echo Installing Frontend Dependencies...
cd frontend
call npm install
cd ..
echo.
echo Installing Backend Dependencies...
cd backend
call npm install
echo.
echo Pushing Prisma Schema to MySQL...
call npx prisma db push
cd ..
echo.
echo =========================================
echo Setup Complete!
echo You can now start the servers:
echo - Frontend: cd frontend ^& npm run dev
echo - Backend: cd backend ^& npm start
echo =========================================
pause
