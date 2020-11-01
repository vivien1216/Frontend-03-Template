/*
 * @Author: vivien
 * @Date: 2020-10-18 22:42:10
 * @Last Modified by: vivien
 * @LastEditTime: 2020-10-28 22:47:07
 */
module.exports = {
    entry: './animation.js',
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