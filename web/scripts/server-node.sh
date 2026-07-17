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

# IONOS limits SSH processes to 768 MB of virtual memory. These flags keep V8
# below that ceiling while preserving enough heap for this static Astro build.
: "${NODE_OPTIONS:=--jitless --max-old-space-size=256 --v8-pool-size=1}"
export NODE_OPTIONS

exec "$@"
