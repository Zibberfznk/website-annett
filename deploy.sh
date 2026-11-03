#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
rsync -avz --delete \
  --exclude '.git' --exclude '.gitignore' --exclude '.DS_Store' \
  --exclude 'README.md' --exclude 'deploy.sh' \
  ./ limacity:kaplow-beratung/
