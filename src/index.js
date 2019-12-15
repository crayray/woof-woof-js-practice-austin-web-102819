document.addEventListener("DOMContentLoaded", () => {
    console.log("This works")
    const dogBar = document.getElementById('dog-bar');
    const dogInfo= document.getElementById('dog-info');
    const fetchDogs = () => {
        fetch('http://localhost:3000/pups')
            .then(response => response.json())
            .then(data => {
                let dogsData = data
                dogBarData(dogsData);
                return dogsData
        })

    }

    let dogBarData = (dogsData) => {
        let span;
       for(element in dogsData) {
           console.log(dogsData[element].name)
           let dogDiv = document.createElement('div');
           let dogPic = document.createElement('img');
           let dogName = document.createElement('h2');
           let dogButton = document.createElement('button');
           dogButton.innerHTML = "Good Dog!";
           dogName.innerText = `${dogsData[element].name}`
           dogPic.src = `${dogsData[element].image}`;
           span = document.createElement('span');
           span.innerHTML= `${dogsData[element].name}`;
           dogDiv.appendChild(dogPic);
           dogDiv.appendChild(dogName);
           dogDiv.appendChild(dogButton);
           dogBar.appendChild(span);
           span.addEventListener("click", () =>  {
            dogInfo.appendChild(dogDiv);

            dogButton.addEventListener("click", () => {
                // alert("did something");
                if (dogButton.innerHTML === "Good Dog!") {
                    console.log("hi, good boy")
                    dogButton.innerHTML = "Bad Dog!";
                } else {
                    dogButton.innerHTML = "Good Dog!";
                }
            })
            
           });
       }
        // console.log(span);
    
           
       }
    

    // const dogDetails = () => {
    //     console.log(dogsData[element])
    //     let dogDiv = document.createElement('div');
    //     let dogPic = document.createElement('img');
    //     dogPic.src = `${dogsData[element].image}`;
    //     dogDiv.appendChild(dogPic);
    //     dogInfo.appendChild(dogDiv);
    //     console.log(dogPic);
        
    //    }

  
    fetchDogs();
    
});