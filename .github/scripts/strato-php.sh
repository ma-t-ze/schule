#!/bin/sh
# Executed on STRATO via SSH stdin. The default `php` can be a CGI binary.
set -eu

for candidate in /opt/RZphp85/bin/php-cli /opt/RZphp84/bin/php-cli /opt/RZphp83/bin/php-cli /opt/RZphp82/bin/php-cli /opt/RZphp81/bin/php-cli /opt/RZphp80/bin/php-cli /opt/RZphp74/bin/php-cli php-cli php; do
    if "$candidate" -r 'exit(PHP_SAPI === "cli" && PHP_VERSION_ID >= 70400 && extension_loaded("pdo_mysql") ? 0 : 1);' >/dev/null 2>&1; then
        if [ "${1:-}" = '--check' ]; then
            printf 'PHP CLI with PDO-MySQL found: %s\n' "$candidate"
            exit 0
        fi
        exec "$candidate" "$@"
    fi
done

printf '%s\n' 'No compatible PHP CLI with PDO-MySQL found on STRATO (PHP >= 7.4 required).' >&2
exit 1
