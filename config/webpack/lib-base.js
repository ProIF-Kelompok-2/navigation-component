/**
 * Base Webpack configuration for ReactJS libraries. It is further extended for
 * development and production use in the "lib-development" and "lib-production"
 * configs.
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const webpack = require('webpack')

/**
 * Creates a new Webpack config object.
 *
 * @param {Object} ops Configuration params. This allows to conveniently set
 *  the options that should be customized for specific libraries.
 *
 * @param {String} ops.babelEnv BABEL_ENV to be used by Babel during the build.
 *
 * @param {String} ops.context Base URL for resolution of relative config paths.
 *
 * @param {String} ops.cssLocalIdent Template for CSS classname
 *  generation by css-loader (it will be passed into the "localIdentName" param
 *  of the loader). It should match the corresponding setting in the Babel
 *  config.
 *
 * @param {String} ops.entry Entry point of the library.
 *
 * @param {String} ops.library Name of the library.
 *
 * @param {String} ops.outputPath Output path.
 *
 * @return {Object} Webpack config.
 */
module.exports = function configFactory (ops) {
  return {
    optimization: {
      minimize: false
    },
    watch: true,
    context: ops.context,
    entry: ops.entry,
    externals: [
      /@babel\/runtime/,
      'lodash',
      'moment',
      'prop-types',
      'react',
      'react-css-super-themr',
      /react-dom/,
      'react-helmet',
      /react-hot-loader/,
      'react-redux',
      'react-router-dom',
      'redux',
      'redux-actions',
      'redux-devtools',
      'redux-devtools-dock-monitor',
      'redux-devtools-log-monitor',
      'redux-promise',
      'shortid',
      'topcoder-react-utils',
      'url-parse'
    ],
    mode: ops.mode,
    output: {
      filename: 'index.js',

      // Workaround to fix umd build, restore webpack v3 behaviour
      // https://github.com/webpack/webpack/issues/6677
      // https://github.com/webpack/webpack/issues/6642
      globalObject: "typeof self !== 'undefined' ? self : this",

      library: ops.library,
      path: ops.outputPath,
      libraryTarget: 'umd'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          BABEL_ENV: JSON.stringify(ops.babelEnv),
          NODE_ENV: JSON.stringify(ops.babelEnv)
        }
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css'
      })
    ],
    module: {
      rules: [{
        /* Handles fonts imports in url(..) instructions in CSS. Effectively,
         * with such configuration it just rewrites those URLs to point to
         * the original location of the fonts assets in
         * the library being build. */
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        include: [
          /src[/\\]assets[/\\]fonts/
        ],
        loader: 'url-loader'
      },
      {
        test: /\.(svg)$/,
        include: [
          /src[/\\]assets[/\\]images/
        ],
        loader: 'url-loader'
      },
      {
        /* Loads JS and JSX moudles, and inlines SVG assets. */
        test: /\.(jsx?)$/,
        exclude: [
          /node_modules/,
          /src[/\\]assets[/\\]fonts/
        ],
        loader: 'babel-loader',
        options: {
          babelrc: false,
          envName: ops.babelEnv,
          presets: ['topcoder-react-utils/config/babel/webpack']
        }
      },
      {
        oneOf: [
          {
            test: /\.module\.(css|sass|scss)$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true
                }
              },
              'sass-loader'
            ]
          },
          {
            test: /\.(css|sass|scss)$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
          }
        ]
      }
      ]
    },
    resolve: {
      alias: {
        /* Aliases to JS an JSX files are handled by Babel. */
        assets: path.resolve(ops.context, 'src/assets'),
        components: path.resolve(ops.context, 'src/components'),
        fonts: path.resolve(ops.context, 'src/assets/fonts'),
        styles: path.resolve(ops.context, 'src/assets/sass')
      },
      extensions: ['.js', '.scss'],
      symlinks: false
    }
  }
}