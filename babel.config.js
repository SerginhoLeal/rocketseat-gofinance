module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // 'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root:['./src'],
          extensions: ['.tsx', '.ts', '.js', '.json'],
          alias: {
            // '@hooks': './src/hooks',
            // '@utils': './src/utils',
            // '@types': './src/types',
            // '@common': './src/common',
            // '@assets': './src/assets',
            '@screens': './src/screens',
            // '@context': './src/context',
            // '@services': './src/services',
          }
        }
      ]
    ],
  };
};
