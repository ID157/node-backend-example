import { Module } from './module'
import { abstractDefineController, AbstractDefineControllerProps } from "./defineController"
import { abstractSetup } from './setup'
import { Context } from "@/src/config"

type DefineControllerProps = AbstractDefineControllerProps<Context>
const defineController = (props: DefineControllerProps) => abstractDefineController<Context>(props)
const setup = (ctx: Context, modules: Module<Context>[]) => abstractSetup(ctx, modules)

export {
  defineController,
  setup,
  Module,
  Context
}
