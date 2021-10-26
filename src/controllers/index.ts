import { defineController } from "@/src/submodules/base"

export default defineController({
  path: '/',
  setup: (
    path,
    {
      express,
      prisma: { model }
    }
  ) => {
    express.get(path, async (_, res) => {
      const models = await model.findMany()
      res.send(models)
    })
  }
})
