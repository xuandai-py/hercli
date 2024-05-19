import {intro, outro, select, spinner, text} from '@clack/prompts'
import {Args, Command, Flags} from '@oclif/core'

import {run} from '../hooks/gemini/index.js'
import {Hint, Label, Module, Status, Value} from '../types/index.js'

export default class Hercli extends Command {
  static override args = {
    file: Args.string({description: 'file to read'}),
  }

  static override description = 'describe the command here'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  static override flags = {
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
  }

  public async run(): Promise<void> {
    const s = spinner()

    const {args, flags} = await this.parse(Hercli)
    intro('Welcome to HERCLI-CLI 😎.')
    // cal project type
    console.log(projectType)
    const prompt = (await text({
      message: 'Hey, Can I have your prompt? Something like: Write a story about a vietnam.',
      validate(value) {
        if (!value) {
          return 'Prompt is required 👀'
        }
      },
    })) as string
    console.log(prompt);
    s.start('running...')
    await run(prompt)
    s.stop('done! 🎉')
    // outro('Something went wrong, maybe try again 😬!!!!')
    outro('Hope you got a good time 😎, see ya!!!')
  }
}
export const AI_MODULES: Module[] = [
  {
    hint: Hint.CHATGPT,
    label: Label.CHATGPT,
    status: Status.COMING_SOON,
    value: Value.CHATGPT,
  },
  {
    hint: Hint.GEMINI,
    label: Label.GEMINI,
    status: Status.LIVE,
    value: Value.GEMINI,
  },
]
const projectType = await select({
  initialValue: Value.CHATGPT,
  message: 'Pick your favorite project.',
  options: AI_MODULES,
})
