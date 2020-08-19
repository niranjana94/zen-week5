function xmlrequest(method, url) {
    return new Promise(function (resolve, reject) {

        var req = new XMLHttpRequest();
        req.open(method, url, true);


        req.onload = function () {
            if (req.status >= 200 && req.status < 300) {
                var data = JSON.parse(req.response);
                resolve(data);

            }
            else {
                reject({
                    status: this.status,
                    statusText: req.statusText
                });
            }
        };
        req.onerror = function () {
            reject({
                status: this.status,
                statusText: req.statusText
            });
        };
        req.send();

    });
};


xmlrequest('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json')
    .then(data => {
        //console.log(JSON.parse(data));
            var container = document.createElement('div');
            container.classList.add('container');
            container.style.objectFit='fill';
        data.forEach((item) => {
            
            var divcarddeck = document.createElement('div');
            divcarddeck.classList.add('card-deck');

            var divcard = document.createElement('div');
            divcard.classList.add('card');
            var image = document.createElement('img');
            image.classList.add('card-img-top');
            image.src = item['flag'];

            var divbody = document.createElement('div');
            divbody.classList.add('card-body');

            var header = document.createElement('h5');
            header.classList.add('card-title');
            header.innerText = item['name'];

            var para = document.createElement('p');
            para.classList.add('card-text');
            para.innerHTML = 'Capital:' + item['capital'] + '<br> Region:' + item['region'];
            para.innerHTML +='<br> Currency:' +item['currencies'].filter((a) => a.name).map((a) =>`${a.symbol} ${a.name} ${a.code}`).join(", ");       
            divbody.append(header, para);
            divcard.append(image, divbody);
            divcarddeck.append(divcard);
            container.append(divcarddeck);
            
        })
             document.body.append(container);
    })
    .catch(function (error) {
        console.log('Something went wrong', error);
    });



