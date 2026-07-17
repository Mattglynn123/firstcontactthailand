#!/usr/bin/env sh
set -eu

repo_root=$(CDPATH= cd -- "$(dirname -- "$0")/../.." && pwd)
node_bin="$repo_root/.server-tools/node/bin"

if [ ! -x "$node_bin/node" ]; then
  echo "Server Node runtime is missing at $node_bin" >&2
  echo "Run the documented server bootstrap before using this command." >&2
  exit 1
fi

PATH="$node_bin:$PATH"
export PATH

exec "$@"
