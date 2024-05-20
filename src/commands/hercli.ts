import {confirm, intro, outro, select, spinner, text} from '@clack/prompts'
import {Args, Command, Flags} from '@oclif/core'

import {run as geminiRun} from '../hooks/gemini/index.js'
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

  async catch(error: Error) {
    outro('Something went wrong, maybe try again 😬!!!!')
    throw error
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Hercli)
    const s = spinner()
    let exit = false

    process.on('SIGINT', () => {
      console.log('Exiting...')
      exit = true // Set exit to true to break the loop
      s.stop() // Stop the spinner if running
      process.exit()
    })

    intro('Welcome to HERCLI-CLI 😎.')
    await select({
      initialValue: Value.CHATGPT as string,
      message: 'Pick your favorite project.',
      options: AI_MODULES,
    })

    do {
      const prompt = (await text({
        message: 'Hey, Can I have your prompt? Something like: Write a story about a vietnam.',
        validate(value) {
          if (!value) {
            return 'Prompt is required '
          }
        },
      })) as string
      console.log(prompt)

      s.start('running prompt...')
      await geminiRun(prompt)
      s.stop('done! ')

      // Check for exit command
      exit = prompt === '\\exit'

      if (!exit) {
        // Ask for another prompt if not exiting
        const continuePrompt = await confirm({
          message: 'Want another prompt?',
        })
        exit = !continuePrompt // Exit if user doesn't want to continue
      }
    } while (!exit)

    s.stop('done! 🎉')
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
