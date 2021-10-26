import { Module } from './module'

export type AbstractDefineControllerProps<Context> = {
  path: string
  setup: (path: string, ctx: Context) => void
}

export const abstractDefineController = <Context>(props: AbstractDefineControllerProps<Context>): Module<Context> => {
  return {
    setup: props.setup.bind(null, props.path)
  }
}
