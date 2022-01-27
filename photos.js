fetch('https://jsonplaceholder.typicode.com/photos')
    .then(photo => photo.json())
    .then(photo => {
        const app = document.getElementById('app')
        const appFilter = photo.filter((element, index) => {
            if (index < 50) {
                return element
            }

        })
        appFilter.forEach(element => {
            const div = document.createElement('div')
            div.setAttribute('class', 'divWithImg')
            const img = document.createElement('img')
            img.setAttribute('class', 'photo')
            img.setAttribute('src', element.thumbnailUrl)
            const title = document.createElement('p')
            title.setAttribute('class', 'title')
            title.innerText = element.title
            div.appendChild(title)
            div.appendChild(img)
            app.appendChild(div)
        })
        // pobieram buttona i dodaje mu eventListenera na clicka po którym będzie się wyświetlać restza zdjęć
        const btn = document.getElementById('btn')
        btn.addEventListener('click', kliknij)
        const btnFilter = photo.filter((element, index) => {
            if (index > 50) {
                return element
            }
        })
        function kliknij() {
            btnFilter.forEach(element => {
                const divSecond = document.createElement('div')
                divSecond.setAttribute('class', 'divSecondImg')
                const imgSecond = document.createElement('img')
                imgSecond.setAttribute('class', 'secondPhoto')
                imgSecond.setAttribute('src', element.thumbnailUrl)
                const titleSecond = document.createElement('p')
                titleSecond.setAttribute('class', 'secondTitle')
                titleSecond.innerText = element.title
                divSecond.appendChild(titleSecond)
                divSecond.appendChild(imgSecond)
                app.appendChild(divSecond)
            })
        }

    })
    // .catch() - pokazuje errory 
    .catch(err => {
        const app = document.getElementById('app')
        app.innerHTML = ' nie udało się pobrać '
    })