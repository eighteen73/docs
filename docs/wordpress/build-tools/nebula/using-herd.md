---
sidebar_position: 3
sidebar_label: Laravel Herd
---

# Using Laravel Herd

If your development environment uses Herd, most Nebula websites should work fine without any special configuration because Herd will apply its built-in Bedrock driver.

However if you're working on a multisite or want a couple of other additional niceties you can add our Nebula driver to your local Herd installation.

## Driver Installation

Save the following as `~/Library/Application Support/Herd/config/valet/Drivers/NebulaValetDriver.php` and restart Herd. You can verify its working by looking at the site's information in Herd; you wll see a reference to Nebula and the website's WordPress version.


```php
<?php

namespace Valet\Drivers\Custom;

use Symfony\Component\Process\ExecutableFinder;
use Symfony\Component\Process\Process;
use Valet\Drivers\Specific\BedrockValetDriver;

class NebulaValetDriver extends BedrockValetDriver
{
    public function serves(string $sitePath, string $siteName, string $uri): bool
    {
        // Quickest answer
        if (file_exists($sitePath.'/web/app/mu-plugins/nebula-autoloader.php')) {
            return true;
        }

        // Must be a Composer project
        if (! file_exists($sitePath.'/composer.json')) {
            return false;
        }

        // Simple string match for a mention of nebula or nebula-tools (decoding JSON is unnecessarily expensive)
        $composer = file_get_contents($sitePath.'/composer.json');

        return str_contains($composer, 'eighteen73/nebula');
    }

    public function isStaticFile(string $sitePath, string $siteName, string $uri)/* : string|false */
    {
        $uri = $this->rewriteMultisite($sitePath, $uri);

        return parent::isStaticFile($sitePath, $siteName, $uri);
    }

    public function frontControllerPath(string $sitePath, string $siteName, string $uri): ?string
    {
        $uri = $this->rewriteMultisite($sitePath, $uri);

        return parent::frontControllerPath($sitePath, $siteName, $uri);
    }

    public function siteInformation(string $sitePath, string $phpBinary): array
    {
        $wpCli = $this->wpCliPath($sitePath);

        $process = new Process([
            $phpBinary,
            $wpCli,
            'core',
            'version',
            '--path='.$sitePath.'/web/wp',
        ]);
        $process->run();
        if ($process->isSuccessful()) {
            $version = trim($process->getOutput());
        }

        return [
            'Overview' => [
                'Framework' => 'WordPress (using Nebula)',
                'Version' => $version ?? 'Unknown',
                'Multisite' => $this->isMultisite($sitePath) ? 'Yes' : 'No',
            ],
        ];
    }

    protected function rewriteMultisite(string $sitePath, string $uri): string
    {
        if (! $this->isMultisite($sitePath)) {
            return $uri;
        }

        if (preg_match('#^(/[^/]+)?(?!/wp-json)(/wp-.*)#', $uri, $matches) || preg_match('#^(/[^/]+)?(/.*\.php)#', $uri, $matches)) {
            return '/wp'.$matches[2];
        }

        return $uri;
    }

    protected function isMultisite(string $sitePath): string
    {
        $application = file_get_contents($sitePath.'/config/application.php');

        return (bool) preg_match('/define\(\s*(["\'])MULTISITE\1\s*,\s*true\s*\)/mi', $application);
    }

    protected function wpCliPath(string $sitePath): ?string
    {
        $executableFinder = new ExecutableFinder;
        $wp_path = $executableFinder->find('wp');
        if (! $wp_path) {
            foreach (["{$sitePath}/vendor/bin/wp", '/usr/local/bin/wp'] as $path) {
                if (file_exists($path)) {
                    $wp_path = $path;
                    break;
                }
            }
        }

        return $wp_path ?? null;
    }
}
```
