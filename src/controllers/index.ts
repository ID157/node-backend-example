import { defineController } from "@/src/submodules/base"

export default defineController({
  path: '/',
  setup: (
    path,
    {
      express,
      repositories: { user }
    }
  ) => {
    express.get(path, async (_, res) => {
      try {
        const newUser = await user.create({
          name: 'Tanaka'
        })
        await user.save(newUser)
        const users = await user.find()
        res.send(users)
      } catch(err) {
        console.error(err)
        res.send(err)
      }
    })
  }
})
