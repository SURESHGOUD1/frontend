@echo off
mkdir app
mkdir components\Header
mkdir components\FeatureCard
mkdir components\DownloadCta
mkdir styles
mkdir data
mkdir public

type nul > app\layout.tsx
type nul > app\page.tsx
type nul > app\favicon.ico

type nul > components\Header\Header.tsx
type nul > components\Header\Header.module.css

type nul > components\FeatureCard\FeatureCard.tsx
type nul > components\FeatureCard\FeatureCard.module.css

type nul > components\DownloadCta\DownloadCta.tsx
type nul > components\DownloadCta\DownloadCta.module.css

type nul > styles\globals.css
type nul > styles\theme.module.css

type nul > data\features.ts
type nul > public\og-image.png

type nul > next.config.js
type nul > tsconfig.json
type nul > README.md

echo ✅ Folder structure and files created successfully!
pause
