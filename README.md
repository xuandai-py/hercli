hercli
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/hercli.svg)](https://npmjs.org/package/hercli)
[![Downloads/week](https://img.shields.io/npm/dw/hercli.svg)](https://npmjs.org/package/hercli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g hercli
$ hercli COMMAND
running command...
$ hercli (--version)
hercli/0.0.0 linux-x64 node-v20.10.0
$ hercli --help [COMMAND]
USAGE
  $ hercli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`hercli hello PERSON`](#hercli-hello-person)
* [`hercli hello world`](#hercli-hello-world)
* [`hercli help [COMMAND]`](#hercli-help-command)
* [`hercli plugins`](#hercli-plugins)
* [`hercli plugins add PLUGIN`](#hercli-plugins-add-plugin)
* [`hercli plugins:inspect PLUGIN...`](#hercli-pluginsinspect-plugin)
* [`hercli plugins install PLUGIN`](#hercli-plugins-install-plugin)
* [`hercli plugins link PATH`](#hercli-plugins-link-path)
* [`hercli plugins remove [PLUGIN]`](#hercli-plugins-remove-plugin)
* [`hercli plugins reset`](#hercli-plugins-reset)
* [`hercli plugins uninstall [PLUGIN]`](#hercli-plugins-uninstall-plugin)
* [`hercli plugins unlink [PLUGIN]`](#hercli-plugins-unlink-plugin)
* [`hercli plugins update`](#hercli-plugins-update)

## `hercli hello PERSON`

Say hello

```
USAGE
  $ hercli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ hercli hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/xuandai-py/hercli/blob/v0.0.0/src/commands/hello/index.ts)_

## `hercli hello world`

Say hello world

```
USAGE
  $ hercli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ hercli hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/xuandai-py/hercli/blob/v0.0.0/src/commands/hello/world.ts)_

## `hercli help [COMMAND]`

Display help for hercli.

```
USAGE
  $ hercli help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for hercli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.22/src/commands/help.ts)_

## `hercli plugins`

List installed plugins.

```
USAGE
  $ hercli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ hercli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/index.ts)_

## `hercli plugins add PLUGIN`

Installs a plugin into hercli.

```
USAGE
  $ hercli plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into hercli.

  Uses bundled npm executable to install plugins into /home/xd/.local/share/hercli

  Installation of a user-installed plugin will override a core plugin.

  Use the HERCLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the HERCLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ hercli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ hercli plugins add myplugin

  Install a plugin from a github url.

    $ hercli plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ hercli plugins add someuser/someplugin
```

## `hercli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ hercli plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ hercli plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/inspect.ts)_

## `hercli plugins install PLUGIN`

Installs a plugin into hercli.

```
USAGE
  $ hercli plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into hercli.

  Uses bundled npm executable to install plugins into /home/xd/.local/share/hercli

  Installation of a user-installed plugin will override a core plugin.

  Use the HERCLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the HERCLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ hercli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ hercli plugins install myplugin

  Install a plugin from a github url.

    $ hercli plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ hercli plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/install.ts)_

## `hercli plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ hercli plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ hercli plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/link.ts)_

## `hercli plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ hercli plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ hercli plugins unlink
  $ hercli plugins remove

EXAMPLES
  $ hercli plugins remove myplugin
```

## `hercli plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ hercli plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/reset.ts)_

## `hercli plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ hercli plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ hercli plugins unlink
  $ hercli plugins remove

EXAMPLES
  $ hercli plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/uninstall.ts)_

## `hercli plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ hercli plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ hercli plugins unlink
  $ hercli plugins remove

EXAMPLES
  $ hercli plugins unlink myplugin
```

## `hercli plugins update`

Update installed plugins.

```
USAGE
  $ hercli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/update.ts)_
<!-- commandsstop -->
