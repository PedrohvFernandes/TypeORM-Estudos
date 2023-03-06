// Se fosse no front-end poderia tambem usar o babel, mas é aconselhável que faça projetos usando o vite junto com next ou somente o vite ou somente next ou next com babel, turbopack que é diferente de webpack etc. Ja existe o vite para node https://www.npmjs.com/package/vite-node. O vite ele ja possui todo essa configuação de webpacks e transcompiladores(Ex: babel), buildando mais rapido possivel, mais performace etc
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    // para usar o Jest com ts
    '@babel/preset-typescript'
  ],
  // Plugins que serão usados para o build, que seria tipo algumas das configs que fizemos no tsconfig.json para buildar
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }], // Para usar o @Controller, @Entity, etc https://stackoverflow.com/questions/52262084/syntax-error-support-for-the-experimental-syntax-decorators-legacy-isnt-cur
    ['@babel/plugin-proposal-class-properties', { loose: true }], // Decorators nas classes https://stackoverflow.com/questions/53015862/metadata-retention-with-typescript-babel-7-decorators
    ['remove-comments'], // Para remover os comentários do código https://www.npmjs.com/package/babel-plugin-remove-comments
    [
      'module-resolver',
      {
        alias: {
          '@infra': './src/Infra',
          '@test': './src/test',
          '@database': './src/Infra/database/typeorm'
        }
      }
    ] // Para fazer com que os mapping path sejam passados para o build de forma que o node consiga encontrar os arquivos
  ],
  // Ele vai ignorar esses arquivos para o build.
  ignore: [
    'node_modules',
    'dist',
    'build',
    'public',
    'src/test',
    'src/**/*.test.ts',
    'src/**/*.spec.ts'
  ]
}
