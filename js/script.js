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
            const imageSrc = this.querySelector("img").getAttribute("src");
            const imageAlt = this.querySelector("img").getAttribute("alt");
            const imageCaption = this.querySelector("img").getAttribute(`data-caption`);
            const imageTag = `<img src="${imageSrc}" alt="${imageAlt}" data-caption="${imageCaption}" loading="lazy"/>`
            document.querySelector(".modal-img").innerHTML = imageTag;
            document.querySelector(".modal-caption").innerHTML = imageAlt;
            document.querySelector(".overlay").classList.add("active");
            document.querySelector(".modal").classList.add("active");
        })
    })

}


document.querySelector(".overlay").addEventListener("click", function () {
    document.querySelector(".overlay").classList.remove("active");
    document.querySelector(".modal").classList.remove("active");
    document.querySelector(".upload-form").classList.remove("active");
});


document.querySelector(".close-btn").addEventListener("click", function () {
    document.querySelector(".overlay").classList.remove("active");
    document.querySelector(".modal").classList.remove("active");
    document.querySelector(".upload-form").classList.remove("active");
});


let imageBoxLength = document.querySelectorAll(".image-box").length;
// console.log(imageBoxLength);
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
    document.querySelector(".overlay").classList.add("active");
    document.querySelector(".upload-form").classList.add("active");
});


let buttons = document.querySelectorAll(".category-btn .btn");
document.querySelectorAll(".category-btn .btn").forEach(function(element){
    element.addEventListener("click",function(event){
        buttons.forEach(btns=>{
            btns.classList.remove("active");
        })
        element.classList.add("active");
    })
})