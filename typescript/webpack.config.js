module.exports = {

    mode: 'development',

    entry: './src/main.ts',
    output:{
        path:`${__dirname}/dist`,
        filename:'designpattern.js',
        //umd形式での出力
        library: "designpattern",
        libraryTarget: "umd"
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader'
        }
      ]
    },
    resolve: {
      extensions: [
        '.ts','.js'
      ]
    }
  };
  