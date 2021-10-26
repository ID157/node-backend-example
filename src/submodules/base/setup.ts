import { Module } from './module'

export const abstractSetup = <Context>(
  context: Context,
  modules: Module<Context>[]
): Context => {
  modules.forEach((module) => module.setup(context))
  return context
}
