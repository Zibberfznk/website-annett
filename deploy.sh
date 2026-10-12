#!/usr/bin/env bash
# Upload the site to the lima-city webspace (host alias "limacity" in ~/.ssh/config)
set -euo pipefail
cd "$(dirname "$0")"
rsync -avz --delete \
  --exclude '.git' --exclude '.gitignore' --exclude '.DS_Store' \
  --exclude 'README.md' --exclude 'deploy.sh' \
  ./ limacity:kaplow-beratung/
