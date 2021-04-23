

const router = (route) => {
    switch(route){
        case '#/':
            return console.log('home..!')
        case '#/posts':
            return console.log('posts..!')
        case '#/products':
            return console.log('products..!')
        default:
            return console.log('404..!')
    }
}

export {router};

