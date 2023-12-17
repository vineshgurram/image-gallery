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
    onClickShowImage()
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

