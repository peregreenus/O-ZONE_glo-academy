const getData = () => {
    return fetch('https://test-23adf-default-rtdb.firebaseio.com/goods.json')
        .then((responce) => {
            return responce.json();
        });
};


export default getData;