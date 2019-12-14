document.addEventListener("DOMContentLoaded", () => {
    console.log("This works")
    const dogBar = document.getElementById('dog-bar');
    const fetchDogs = () => {
        fetch('http://localhost:3000/pups')
            .then(response => response.json())
            .then(data => {
                let dogsData = data
                dogBarData(dogsData);
        })

    }

    let dogBarData = (dogsData) => {
       for(element in dogsData) {
           console.log(dogsData[element].name)
           let span = document.createElement('span');
           span.innerHTML= `${dogsData[element].name}`;
           dogBar.appendChild(span);
           
       }
    }

    fetchDogs();
    
});