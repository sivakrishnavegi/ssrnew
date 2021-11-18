module.exports = {
 // tell webpack to run bable on every file
   // run babel on  every .js
   module : {
    rules :[
        {
            test : /\.js?$/,
            loader : 'babel-loader',
            exclude : /node_modules/,
            options : {
                presets : [
                    'react',
                    'stage-0',
                    [
                        'env', { targets : {
                            browsers : ['last 2 versions']
                        }}
                    ]
                ]
            }
        }
    ]
}

};