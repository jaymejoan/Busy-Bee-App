module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
          alias: {
            "@assets": "./src/assets",
            "@buttons": "./src/components/buttons",
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@styles": "./src/styles",
          },
        },
      ],
    ],
  };
};
