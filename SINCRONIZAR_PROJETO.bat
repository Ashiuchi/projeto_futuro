@echo off
chcp 65001 > nul
title SINCRONIZADOR PROJETO FUTURO (1-CLIQUE)
color 0B

echo ====================================================================
echo         PROJETO FUTURO - SINCRONIZADOR INTELIGENTE
echo ====================================================================
echo.
echo [1/3] Verificando conexao e status do repositorio...
cd /d "%~dp0"

git status > nul 2>&1
if errorlevel 1 (
    echo [ERRO] Repositorio Git nao encontrado nesta pasta!
    pause
    exit /b
)

echo [2/3] Baixando novidades da nuvem (git pull)...
git pull origin main --rebase
echo.

echo [3/3] Salvando e enviando suas alteracoes (git push)...
git add .
git commit -m "sync: atualizacao automatica de estudos [%date% %time%]" > nul 2>&1
git push origin main

echo.
echo ====================================================================
echo    TUDO SINCRONIZADO COM SUCESSO!
echo    Suas notas, app e configuracoes estao prontos em qualquer PC.
echo ====================================================================
echo.
timeout /t 5
