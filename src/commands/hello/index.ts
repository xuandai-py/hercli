import {Args, Command, Flags} from '@oclif/core'

export default class Hello extends Command {
  static args = {
    person: Args.string({description: 'Person to say hello to', required: true}),
  }

  static description = 'Say hello'

  static examples = [
    `<%= config.bin %> <%= command.id %> friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  // static flags = {
  //   from: Flags.string({char: 'f', description: 'Who is saying hello', required: true}),
  // }

  static override flags = {
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Hello)

    this.log(`hello ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`)

    /**
     * const {args, flags} = await this.parse(Hercli)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /home/xd/Desktop/cli/hercli/src/commands/hercli.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
     */
  }
}
