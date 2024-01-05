let imageBox = document.querySelectorAll(".image-box");


function allImages(array) {
    let allImageCategory = array.map(function (category, index) {
        return category.images.map((image) => {
            return `<div class="image-box"><img src="${image.src}" alt="${image.alt}" loading="lazy" data-caption="${image.caption}" /></div>`
        }).join("");
    }).join("");

    document.querySelector(".image-box-wrap").innerHTML = allImageCategory;
    onClickShowImage();
}


function imageCategory(category) {
    let findCategory = imageCategories.find((categoryElement) => {
        return categoryElement.categoryName === category
    });
    console.log(findCategory);

    let categoryArray;
    if (findCategory) {
        categoryArray = findCategory.images.map(function (image) {
            return `<div class="image-box"><img src="${image.src}" alt="${image.alt}" data-caption="${image.caption}" loading="lazy"/></div>`
        }).join("");
    }
    console.log(categoryArray);
    document.querySelector(".image-box-wrap").innerHTML = categoryArray;
    onClickShowImage();
}

let natureCategoryButton = document.querySelector(".nature-category-btn");

document.querySelector(".nature-category-btn").addEventListener("click", function () {
    imageCategory("Nature");
});

document.querySelector(".technology-category-btn").addEventListener("click", function () {
    imageCategory("Technology");
});

document.querySelector(".car-category-btn").addEventListener("click", function () {
    imageCategory("Cars");
});

document.querySelector(".all-category-btn").addEventListener("click", function () {
    allImages(imageCategories);
});

allImages(imageCategories);


function onClickShowImage() {
    document.querySelectorAll(".image-box").forEach(function (el) {
        return el.addEventListener("click", function () {
            var windHeight = window.outerHeight;
            var windWidth = window.outerWidth;
            // alert(windHeight)
            // alert(windWidth)
            const imageSrc = this.querySelector("img").getAttribute("src");
            const imageAlt = this.querySelector("img").getAttribute("alt");
            const imageCaption = this.querySelector("img").getAttribute(`data-caption`);
            const imageTag = `<img src="${imageSrc}" alt="${imageAlt}" data-caption="${imageCaption}" loading="lazy"/>`
            document.querySelector(".modal-img").innerHTML = imageTag;
            document.querySelector(".modal-img img").style.width= "70%";
            // document.querySelector(".modal-img img").style.height= `${windHeight*(70/100)}px`;
            // document.querySelector(".modal-caption").innerHTML = imageCaption;
            document.querySelector(".modal-caption").innerHTML = imageAlt;
            document.querySelector(".overlay").classList.add("active");
            document.querySelector(".modal").classList.add("active");
        })
    })

}


document.querySelector(".close-btn,.overlay").addEventListener("click", function () {
    document.querySelector(".overlay").classList.remove("active");
    document.querySelector(".modal").classList.remove("active");
});

let imageBoxLength = document.querySelectorAll(".image-box").length;
console.log(imageBoxLength);
document.querySelector("#form").addEventListener("submit", function (event) {
    event.preventDefault();
    uploadImage()
})

// uploadImage()

function uploadImage() {
    let url = document.querySelector("#url").value;
    let alt = document.querySelector("#alt").value;
    let category = document.querySelector("#category").value;
    // let category = "Technology";
    category = category[0].toUpperCase() + category.slice(1);
    let imageObj = {
        src: url,
        alt: alt,
        caption: alt
    }
    console.log(imageObj)
    console.log(category);

    imageCategories.forEach(function (el) {
        return (el.categoryName == category)
            ? el.images.push(imageObj)
            : ''
    })
    console.log(imageCategories)
    allImages(imageCategories);
}


document.querySelector(".upload-img").addEventListener("click", function () {
    document.querySelector(".overlay-1").classList.add("active");
    document.querySelector(".upload-form").classList.add("active");
})

document.querySelector(".overlay-1").addEventListener("click", function () {
    this.classList.remove("active");
    document.querySelector(".upload-form").classList.remove("active");
})

var windHeight = window.outerHeight;
var windWidth = window.outerWidth;
alert(windHeight)
alert(windWidth)


// let imageGrid = imageCategories.filter(function(category){
//     return category.images.filter(function(image,i){
//         return image < 1 ? `<img src="${image.src}" alt="${image.alt}" data-caption="${image.caption}" loading="lazy"/>`: ""
//     })
// });

// console.log(imageGrid)

// let imageGrid = imageCategories.map(function(category) {
//     if(category.images && category.images.length > 0){
//         return `<img src="${category.images[0].src}" alt="${category.images[0].alt} loading="lazy">`
//     }
//     else{
//         return ""
//     }
// }).join("");
// document.querySelector(".all-category .grid").innerHTML = imageGrid;