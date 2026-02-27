@echo off
REM Sweet Dreams Website Builder - Setup Script
REM This script will install Node.js and project dependencies

echo.
echo ========================================
echo Sweet Dreams Website Builder Setup
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js not found. Installing Node.js LTS...
    echo.
    
    REM Try to install via winget
    winget install OpenJS.NodeJS
    
    if %errorlevel% neq 0 (
        echo.
        echo ERROR: Could not install Node.js automatically.
        echo Please install Node.js manually from https://nodejs.org/
        echo After installation, restart this terminal and run this script again.
        echo.
        pause
        exit /b 1
    )
    
    echo.
    echo Node.js installed. Restarting terminal...
    echo Please run this script again.
    pause
    exit /b 0
)

REM Check Node.js version
echo Node.js version:
node --version
echo npm version:
npm --version
echo.

REM Install project dependencies
echo Installing project dependencies...
call npm install

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo Setup complete!
    echo ========================================
    echo.
    echo Next steps:
    echo   1. Start dev server: npm run dev
    echo   2. Open http://localhost:3000 in your browser
    echo.
) else (
    echo.
    echo ERROR: npm install failed
    echo Please check the error messages above
    pause
    exit /b 1
)

pause
