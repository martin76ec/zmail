module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['@babel/plugin-proposal-export-namespace-from'],
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './src',
            '@atoms': './src/atoms',
            '@components': './src/components',
            '@fixtures': './src/fixtures',
            '@screens': './src/screens',
            '@themes': './src/themes',
            '@hooks': './src/hooks',
            '@types': './src/types'
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      ],
      [
        'react-native-reanimated/plugin',
        {
          relativeSourceLocation: true
        }
      ]
    ]
  }
}
