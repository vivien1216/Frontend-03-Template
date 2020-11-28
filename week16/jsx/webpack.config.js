/*
 * @Author: vivien
 * @Date: 2020-10-18 22:42:10
 * @Last Modified by: vivien
 * @LastEditTime: 2020-11-07 20:56:25
 */
module.exports = {
    entry: './main.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [['@babel/plugin-transform-react-jsx', {pragma: 'createElement'}]]
                    }
                }
            }
        ]
    },
    mode: 'development'
}