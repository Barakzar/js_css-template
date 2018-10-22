new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then(
    (bla) => {
        console.log(bla);
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(bla * 2), 1000);
        });
    })
    .then((bl) => {
        console.log(bl);
        return new Promise((resolve, reject) => {
            setTimeout( () => resolve(bl * 2), 1000)
        });
        
    }).then((result) => console.log(result)
    
    )