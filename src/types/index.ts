export enum Status {
  COMING_SOON = 'Comming soon',
  LIVE = 'Live',
}

export enum Label {
  CHATGPT = 'ChatGPT',
  GEMINI = 'Gemini',
}

export enum Value {
  CHATGPT = 'chatGPT',
  GEMINI = 'gemini',
}

export enum Hint {
  CHATGPT = 'from OpenAI',
  GEMINI = 'from Gemini',
}

export type Module = {
  hint: Hint
  label: Label
  status: Status
  value: Value
}
