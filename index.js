const fruits = [
    {title:'apple',amount:1},
    {title:'banana',amount:2},
    {title:'orange',amount:1},
    {title:'plum',amount:5},
    {title:'cherry',amount:10},
    {title:'mango',amount:25},
    {title:'melon',amount:3},
    {title:'avocado',amount:1},
    {title:'apricot',amount:4}]

const container = document.getElementById('container')

const filters = {
    searchText:''
}

const create = (fruits,filters) => {

    const filteredFruits = fruits.filter(function(fruit) {
        return fruit.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#container').innerHTML = ''

    filteredFruits.map((data) => {
       
        const element = document.createElement('div')
        
       
        
        element.innerHTML=
        
        data.title.replace(new RegExp(filters.searchText, "gi"), (match) => `<mark>${match}</mark>`);
      
        container.appendChild(element)
    
    })
    
   
    
}

create(fruits,filters)


document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    create(fruits, filters)
})
