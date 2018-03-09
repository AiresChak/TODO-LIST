/**
 * Created by lenovo on 2018/1/10.
 */

    let path = require('path');
    let webpack = require('webpack');
    let HtmlWebpackPlugin = require('html-webpack-plugin');

    const ROOT_PATH = path.resolve(__dirname);
    const APP_PATH = path.resolve(ROOT_PATH,'app');
    const BUILD_PATH = path.resolve(ROOT_PATH,'build');

    let env = process.env.NODE_ENV;

    module.exports = {
        entry:{
            app:path.resolve(APP_PATH,'index.jsx')
        },
        output:{
            path:BUILD_PATH,
            filename:'bundle.js'
        },
        devtool:'dev-source-map',
        devServer:{
            historyApiFallback:true,
            hot:true,
            inline:true,
            progress:true
        },
        module:{
            rules:[
                {
                    test:/\.jsx?$/,
                    use:[
                        {loader:'babel-loader'}
                    ],
                    include:APP_PATH
                },
                {
                    test:/\.css?$/,
                    use:['style-loader','css-loader'],
                    include:APP_PATH
                },
                {
                    test:/\.(jpe?g|svg|png)?$/,
                    use:['url-loader','img-loader'],
                    include:APP_PATH
                },
                {
                    test: /\.json?$/,
                    use:[
                        {loader:'json-loader'}
                    ],
                    include:APP_PATH
                }
            ]
        },
        plugins:[
            new HtmlWebpackPlugin({
                title:'微云'
            })
        ],
        resolve:{
            extensions:['.js','.jsx','.css']
        }

    };