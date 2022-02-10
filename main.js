const button = document.querySelector('button')
const body = document.querySelector('body')

const buttonClick = () => {
    console.log('button clicked!!! ^-^');
    axios.get(`https://swapi.dev/api/planets/?search=alderaan`)
        .then((res) => {
            console.log(res.data.results[0]);
            // const residents = res.data.results[0].residents
            const { residents } = res.data.results[0]
            console.log(residents);
            for(let i = 0; i < residents.length; i++){
                axios.get(residents[i])
                    .then((res) => {
                        console.log(res.data);
                        console.log(res.data.name)
                        const resident = document.createElement('h2')
                        const residentName = document.createTextNode(res.data.name)
                        resident.appendChild(residentName)
                        body.appendChild(resident)
                    })
            }
            
        })
    // axios.catch(err => console.log(err))
}



button.addEventListener('click', buttonClick)