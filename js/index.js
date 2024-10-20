async function getData() {
    const result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
    const products = await result.json();
    const arrTitles = ["Pancakes", "Waffles", "Sweet Tartal"]
    //const sliced = products.slice(0,3)
    //console.log(sliced)
    //console.log(products)
    products.meals.forEach(element => {
        if(element.idMeal == "52768" || element.idMeal == "52893" || element.idMeal == "53049"){
            const img = document.createRange().createContextualFragment(`
                
                <div class="box">
                    <img src="${element.strMealThumb}">
                    <div>   
                    <button class="btn botoncito">${arrTitles[element.idMeal == "52768" ? 0 :  element.idMeal == "52893"  ? 2 : 1]}</button>
                    <p>Lorem ipsum dolor sit amet consectetur. Viverra euismod sagittis quam suspendisse. Eu ut egestas consectetur in rutrum amet sed lorem ipsum.</p>
                    </div>
                </div>
                
                `)
                const card = document.querySelector('.features-row');
                card.append(img);
        }
    });
}

getData()