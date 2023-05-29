import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  outDir: 'dist',
  entries: [
    {
      input: 'src/index',
    }
  ]
})