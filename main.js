//INITIAL ATTEMPT

// let residents = document.querySelector('button');

// const alderaan = () => {
//     axios.get('https://swapi.dev/api/planets/?search=alderaan')
//     .then(res => {
//         for(let i = 0; i < res.data.results.length; i++){
//             for(let j = 0; j < res.data.results[i].residents.length; j++){
//                 let alderaanResident = res.data.results[i].residents[j];
//                 axios.get(alderaanResident)
//                 .then(res => {
//                     const newH2 = document.createElement('h2');
//                     newH2.textContent = res.data.name;
//                     document.querySelector('body').appendChild(newH2);
//                 })
//             }
//         }
//     })
// }

// residents.addEventListener('click', alderaan);

let residents = document.querySelector('button');

const alderaan = () => {
    axios.get('https://swapi.dev/api/planets/2')
    .then(res => {
        for(let i = 0; i < res.data.residents.length; i++){
                let alderaanResident = res.data.residents[i];
                axios.get(alderaanResident)
                .then(res => {
                    const newH2 = document.createElement('h2');
                    newH2.textContent = res.data.name;
                    document.querySelector('body').appendChild(newH2);
                })
        }
    })
}

residents.addEventListener('click', alderaan);