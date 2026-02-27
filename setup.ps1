# Sweet Dreams Website Builder - Setup Script (PowerShell)
# This script will install Node.js and project dependencies

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Sweet Dreams Website Builder Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js not found. Installing Node.js LTS..." -ForegroundColor Yellow
    Write-Host ""
    
    # Try to install via winget
    try {
        & winget install OpenJS.NodeJS
        if ($LASTEXITCODE -eq 0) {
            Write-Host ""
            Write-Host "✓ Node.js installed successfully" -ForegroundColor Green
            Write-Host "Please restart your terminal and run this script again" -ForegroundColor Yellow
            Pause
            exit 0
        }
    } catch {
        Write-Host "✗ Error installing Node.js" -ForegroundColor Red
    }
    
    Write-Host ""
    Write-Host "Please install Node.js manually:" -ForegroundColor Yellow
    Write-Host "  1. Visit https://nodejs.org/" -ForegroundColor Yellow
    Write-Host "  2. Download the LTS version" -ForegroundColor Yellow
    Write-Host "  3. Run the installer" -ForegroundColor Yellow
    Write-Host "  4. Restart your terminal" -ForegroundColor Yellow
    Write-Host "  5. Run this script again" -ForegroundColor Yellow
    Write-Host ""
    Pause
    exit 1
}

# Show versions
Write-Host "npm version: $(npm --version)" -ForegroundColor Cyan
Write-Host ""

# Install project dependencies
Write-Host "Installing project dependencies..." -ForegroundColor Cyan
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "✓ Setup complete!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "  1. Start dev server:" -ForegroundColor Yellow
    Write-Host "     npm run dev" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "  2. Open http://localhost:3000 in your browser" -ForegroundColor Yellow
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "✗ Error: npm install failed" -ForegroundColor Red
    Write-Host "Please check the error messages above" -ForegroundColor Red
    Write-Host ""
    Pause
    exit 1
}

Pause
