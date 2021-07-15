module.exports = (api) => {
  let isProd = false;
  if (api && api.env) {
    isProd = api.env() === 'production';
  }
  let config = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['./'],
          cwd: 'babelrc',
          extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
          alias: {
            '@app': './src/app',
            '@configs': './src/core/configs',
            '@locales': './src/core/locales',
            '@contents': './src/contents',
            '@themes': './src/core/themes',
            '@utils': './src/core/utils',
            '@validators': './src/core/validators',
            '@core': './src/core',
            '@fonts': './src/assets/fonts',
            '@images': './src/assets/images',
            '@assets': './src/assets',
            '@components': './src/components',
            '@src': './src',
          },
        },
      ],
    ],
  };
  if (isProd) {
    config.plugins.push(['transform-remove-console']);
  }

  return config;
};
