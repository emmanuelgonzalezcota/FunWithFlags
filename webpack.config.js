
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module:{
        rules:[ //Aqui voy a caragar todos los loader que necesito para que webpack trabaje como quiera
            {
                test: /\.html$/, // expresion regular ---> busca todos los archivos que terminen en .html
                use : [
                    {
                        loader: "html-loader", //Este va a traducir todo el html para que webpack lo entienda
                        options: {minimize:true}
                    }
                ]
                //test ---> que tengo que buscar
                //use ----> de lo que encontre que loader voy a aplicar
            },
            {
                test:/\.js$/, //Va a buscar todos los archivos JS en el proyecto
                exclude: /node_modules/, //Excluimos la carpeta de node_modules en la busqueda
                use: [
                    {
                        loader:"babel-loader"
                    }
                ]
            },
            {
                test:/\.scss$/, //Va a buscar todos los archivos sass en el proyecto
                use: [ //los loader si importa
                    "style-loader", //Procesa estilos en line
                    "css-loader", //Procesa estilos en archivos css
                    "sass-loader" //Procesa estilos en archivos css(sass)
                ]
            },
            {
                test:/\.(png|jpg|svg|gif|jpeg)$/, //Va a buscar todos los archivos de imagen
                use: [
                    'file-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html", //Que archivo de html va a ser el base para mi proyecto
            filename:"./index.html"// Que unico archivo de html se va a generar
        }),
        new MiniCssExtractPlugin({ // Es opcional
            filename: "[name].css",
            chunkFilename:"[id].css" // Se Utiliza solo en el caso si hay muchas lineas de css
        })
    ]

}