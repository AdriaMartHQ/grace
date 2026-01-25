#!/usr/bin/env bash
set -euo pipefail

SRC_DIR="${1:-$HOME/Downloads/turkey-travel}"
DEPLOY_DIR="${2:-$HOME/Documents/GitHub/grace}"

if [ ! -d "$SRC_DIR" ]; then
  echo "❌ Source dir not found: $SRC_DIR"
  echo "用法：./deploy.sh [源码目录] [发布目录]"
  exit 1
fi

if [ ! -d "$DEPLOY_DIR/.git" ]; then
  echo "❌ Deploy dir is not a git repo: $DEPLOY_DIR"
  exit 1
fi

echo "✅ Source: $SRC_DIR"
echo "✅ Deploy: $DEPLOY_DIR"
echo

echo "==> Build in source repo..."
cd "$SRC_DIR"

# 有 package-lock.json 才用 npm ci，否则 npm install
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

npm run build

if [ ! -d "dist" ]; then
  echo "❌ Build failed: dist/ not found"
  exit 1
fi

echo
echo "==> Deploy dist/ to GitHub Pages repo..."
cd "$DEPLOY_DIR"

# 保护 CNAME，不动它
# 清理旧发布内容（按你现在的发布结构）
rm -rf assets index.html index.css

# 覆盖新内容
cp -R "$SRC_DIR/dist/"* .

# 如果 dist 里没有 index.css，但 index.html 引用了它，就自动补一个占位，避免 404
if grep -q 'href="./index.css"' index.html 2>/dev/null; then
  if [ ! -f index.css ]; then
    cat > index.css <<'CSS'
/* placeholder - will be replaced later */
CSS
  fi
fi

# 绝对不要把 .github/workflows 推上去（避免 workflow scope 问题）
rm -rf .github

# 提交推送
git add -A

if git diff --cached --quiet; then
  echo "✅ No changes to deploy."
  exit 0
fi

MSG="Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$MSG"
git push origin main

echo
echo "✅ Done. Your site should update soon:"
echo "   https://gracetravel.com.tr/"
