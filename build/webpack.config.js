let path = require("path")
let HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry:{
        app: path.join(__dirname, "./../", "src/index.tsx") 
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:"[name].js"
    },
    module:{
        rules:[{
            test:/\.ts(x?)$/,
            use: [{
                loader: "awesome-typescript-loader"
            }]
        },{
            test:/\.scss$/,
            include:[path.join(__dirname, "./../", "src")],
            use:[
                'style-loader',
                {
                    loader: '@teamsupercell/typings-for-css-modules-loader',
                    options: {
                        formatter: "prettier"
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[local]_[hash:base64:5]',
                        },
                        sourceMap: true,
                        importLoaders: 2,
                        localsConvention: 'camelCase'
                    }
                },
                {
                    loader: "sass-loader",
                    options: {
                        sassOptions(){
                            return{
                                includePaths:[path.join(__dirname, "./../", "src/assets/css")]
                            }
                        }
                    }
                }
               
            ]
        }
    ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'build/tpl/index.html'
        })
    ]
}