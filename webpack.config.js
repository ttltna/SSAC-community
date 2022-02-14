const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Dotenv = require("dotenv-webpack");


const JS_PATH = './src/js'
const TEMPLATE_PATH = './src/views'

module.exports = (env, argv) => {
    // devServer
    // devtool: 'eval-cheap-source-map', 
    const mode = argv.mode
    if (mode === 'production') {
        return {
            mode: "production",
            devServer: {
                // contentBase:'./dist', // 서버 시작 시 static 파일 경로 지정
                port: 8891,
                hot: true
            },

            // webpack config
            entry: {
                main: `${JS_PATH}/index.js`,
                component: [`${JS_PATH}/Components/app.js`, `${JS_PATH}/Components/bpp.js`]
            },
            output: {
                filename: '[name].[chunkhash].bundle.js',
                path: path.resolve(__dirname, 'dist'),
                publicPath: '/'
            },
            resolve: {
                modules: ['node_modules'],
                extensions: ['.js', '.json', '.jsx', '.css'],
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env', {
                                        targets: {
                                            node: 'current', // 노드일 경우만
                                            //browsers: ["last 3 versions", "ie >= 11"] // 각 브라우저로도 가능
                                        },
                                        modules: false, //<== 이거 에러나는데 왜 아는거지?? 
                                        // useBuiltIns: 'usage' <== 이거 경고 나옴...
                                    }
                                ],
                                // '@babel/preset-react', // 리액트를 사용한다면
                                // '@babel/preset-typescript' // 타입스크립트를 사용한다면
                            ],
                            plugins: ['@babel/plugin-syntax-dynamic-import', "@babel/plugin-transform-runtime"]
                        },
                        include: [path.resolve(__dirname, JS_PATH)],
                        exclude: ['/node_modules'],
                    },
                    {
                        test: /\.scss$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true,
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true,
                                }
                            }],
                        exclude: ['/node_modules'],
                    }
                ]
            },
            plugins: [
                new Dotenv(),
                new CleanWebpackPlugin(),
                new MiniCssExtractPlugin({ filename: '[name].css' }),
                // new BundleAnalyzerPlugin()
            ],
            optimization: {
                runtimeChunk: 'single'
            }
        }

    } else {
        return {
            mode: "development",
            devServer: {
                // contentBase:'./dist', // 서버 시작 시 static 파일 경로 지정
                port: 8891,
                hot: true
            },

            // webpack config
            entry: {
                main: `${JS_PATH}/index.js`,
                component: [`${JS_PATH}/Components/app.js`, `${JS_PATH}/Components/bpp.js`],
                module: [`${JS_PATH}/new/board/evaluation.js`, `${JS_PATH}/new/board/general_forum.js`, `${JS_PATH}/new/board/recruit_project.js`,
                        `${JS_PATH}/new/common/_common.js`, `${JS_PATH}/new/common/_header.js`, `${JS_PATH}/new/common/_reset.js`,
                        `${JS_PATH}/new/guest/find_user.js`, `${JS_PATH}/new/guest/join.js`, `${JS_PATH}/new/guest/login.js`,
                        `${JS_PATH}/new/user/my_page.js`, `${JS_PATH}/new/util/main.js`,`${JS_PATH}/new/util/succeed.js`]
                                },
            output: {
                filename: '[name].[chunkhash].bundle.js',
                path: path.resolve(__dirname, 'dist'),
                publicPath: '/'
            },
            resolve: {
                modules: ['node_modules'],
                extensions: ['.js', '.json', '.jsx', '.css'],
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env', {
                                        targets: {
                                            node: 'current', // 노드일 경우만
                                            //browsers: ["last 3 versions", "ie >= 11"] // 각 브라우저로도 가능
                                        },
                                        modules: false, //<== 이거 에러나는데 왜 아는거지?? 
                                        // useBuiltIns: 'usage' <== 이거 경고 나옴...
                                    }
                                ],
                                // '@babel/preset-react', // 리액트를 사용한다면
                                // '@babel/preset-typescript' // 타입스크립트를 사용한다면
                            ],
                            plugins: ['@babel/plugin-syntax-dynamic-import', "@babel/plugin-transform-runtime"]
                        },
                        include: [path.resolve(__dirname, JS_PATH)],
                        exclude: ['/node_modules'],
                    },
                    {
                        test: /\.scss$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true,
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true,
                                }
                            }],
                        exclude: ['/node_modules'],
                    }
                ]
            },
            plugins: [
                new Dotenv(),
                new CleanWebpackPlugin(),
                new MiniCssExtractPlugin({ filename: '[name].css' }),
                new HtmlWebpackPlugin({  // Also generate a test.html
                    template: `${TEMPLATE_PATH}/index.html`,
                }),
                new HtmlWebpackPlugin({  // Also generate a test.html
                    filename: 'guest/login.html',
                    template: `${TEMPLATE_PATH}/guest/login.html`,
                }),            // new BundleAnalyzerPlugin()
                new HtmlWebpackPlugin({  // Also generate a test.html
                    filename: 'user/my_page.html',
                    template: `${TEMPLATE_PATH}/user/my_page.html`,
                }),
                new HtmlWebpackPlugin({
                    filename: 'guest/join.html',
                    template: `${TEMPLATE_PATH}/guest/join.html`,
                }),
                new HtmlWebpackPlugin({  // Also generate a test.html
                    filename: 'util/succeed.html',
                    template: `${TEMPLATE_PATH}/util/succeed.html`,
                }),
                new HtmlWebpackPlugin({
                    filename: 'guest/find_user.html',
                    template: `${TEMPLATE_PATH}/guest/find_user.html`,
                }),
                new HtmlWebpackPlugin({
                    filename: 'board/evaluation.html',
                    template: `${TEMPLATE_PATH}/board/evaluation.html`,
                }),
                new HtmlWebpackPlugin({
                    filename: 'board/general_forum.html',
                    template: `${TEMPLATE_PATH}/board/general_forum.html`,
                }),
                new HtmlWebpackPlugin({
                    filename: 'board/recruit_project.html',
                    template: `${TEMPLATE_PATH}/board/recruit_project.html`,
                })
                // new BundleAnalyzerPlugin()
            ],
            optimization: {
                runtimeChunk: 'single' // chunk 변경시 매번 새로고침하기 불편해서 적용
            }
        }
    }
}