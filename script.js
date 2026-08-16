var menuBar = document.getElementById("menubar");
var close = document.getElementById("close");
var sideNav = document.getElementById("sidenav");

if(menuBar && sideNav){
  menuBar.addEventListener("click", function () {
  sideNav.style.left = "0"
});

}
 
if(close && sideNav){
  close.addEventListener("click", function () {
  sideNav.style.left = "-50%";
});
}




var leftArrow = document.getElementById("leftArrow");
var rightArrow = document.getElementById("rightArrow");
var slider = document.getElementById("slider");
var viewport = document.getElementById("viewport")

var currentSlide = 0;

if(rightArrow && slider && viewport){
  rightArrow.addEventListener("click", function () {
  if (currentSlide < 2) {
    currentSlide += 1;
    slider.style.transform = `translateX(${currentSlide * -viewport.clientWidth}px)`;
  }
});
}

if(leftArrow && slider && viewport){
  leftArrow.addEventListener("click", function () {
  if (currentSlide > 0) {
    currentSlide -= 1;
    slider.style.transform = `translateX(${currentSlide * -viewport.clientWidth}px)`;
  }
});
}


  var mostwantedViewport = document.getElementById("mostwantedViewport");
  var mostwantedLeft = document.getElementById("mostwantedLeft");
  var mostwantedRight = document.getElementById("mostwantedRight");

  if(mostwantedRight && mostwantedViewport){
      mostwantedRight.addEventListener("click", function () {
        mostwantedViewport.scrollBy({
          left: 300,
          behavior: "smooth"
    });
  });
  }
  

  if(mostwantedLeft && mostwantedViewport){
    mostwantedLeft.addEventListener("click", function () {
      mostwantedViewport.scrollBy({
        left: -300,
        behavior: "smooth"
    });
  });
  }


var searchInput = document.getElementById("searchInput");
var products = document.querySelectorAll(".product-item");
var checkboxes = document.querySelectorAll(".filter-checkbox");
 
var productCount = document.getElementById("productCount");
var noResults = document.getElementById("noResults");
var clearFilters = document.getElementById("clearFilters");

var filterSection = document.getElementById("filterSection");
var openFilter = document.getElementById("openFilter");
var closeFilter = document.getElementById("closeFilter");

if(openFilter && filterSection){
  openFilter.addEventListener("click",function(){
  filterSection.classList.remove("hidden");

  filterSection.classList.add(
    "fixed",
    "inset-0",
    "z-50",
    "bg-white",
    "p-6",
    "overflow-y-auto"
  );
});

}

if(closeFilter && filterSection){
  closeFilter.addEventListener("click",function(){
  filterSection.classList.add("hidden");

  filterSection.classList.remove(
    "fixed",
    "inset-0",
    "z-50",
    "bg-white",
    "p-6",
    "overflow-y-auto"
  );
});

}

function filterProducts(){

  if(!searchInput || !productCount){
    return;
  }

  var searchValue = searchInput.value.toLowerCase().trim();

  var selectedOccasions = [];
  var selectedColors = [];
  var selectedArrivals = [];

  checkboxes.forEach (function(checkbox){
    if(checkbox.checked){
      var filterType = checkbox.dataset.filter;
      if(filterType === "occasion"){
        selectedOccasions.push(checkbox.value);
      }
      if(filterType === "color"){
        selectedColors.push(checkbox.value);
      }
      if(filterType === "arrival"){
        selectedArrivals.push(checkbox.value);
      }
    }
  });

  var visibleCount = 0;

  products.forEach(function (product){
    var productName = product.dataset.name.toLowerCase();
    var productOccasion = product.dataset.occasion;
    var productColor = product.dataset.color;
    var productArrival = product.dataset.arrival;

    var matchesSearch = productName.includes(searchValue);

    var matchesOccasion = selectedOccasions.length === 0 || selectedOccasions.includes(productOccasion);
    var matchesColor = selectedColors.length === 0 || selectedColors.includes(productColor);
    var matchesArrival = selectedArrivals.length === 0 || selectedArrivals.includes(productArrival);

    var shouldShow = matchesSearch && matchesOccasion && matchesColor && matchesArrival;

    if(shouldShow){
      product.classList.remove("hidden");
      visibleCount++;
    }
    else{
      product.classList.add("hidden");
    }
  });

  productCount.textContent = `${visibleCount} Products`;
if(noResults){
  if(visibleCount === 0){
    noResults.classList.remove("hidden");
  }
  else{
    noResults.classList.add("hidden");
  }
}
}
  
if(searchInput){
  searchInput.addEventListener(
  "input",
  filterProducts
);
}


checkboxes.forEach(function(checkbox){
  checkbox.addEventListener(
    "change",
    filterProducts
  );
});

if(clearFilters){
  clearFilters.addEventListener("click",function(){
  checkboxes.forEach(function(checkbox){
    checkbox.checked = false;
  });

  if(searchInput){
    searchInput.value = "";
  }
  filterProducts();
});
}


if(products.length > 0){
  filterProducts();
}


var contactForm = document.getElementById("contactForm");
var successMessage = document.getElementById("successMessage");

if(contactForm && successMessage){
  contactForm.addEventListener("submit", function(event){
    event.preventDefault();
    successMessage.classList.remove("hidden");
    contactForm.reset();
  });
}

var offerBar = document.getElementById("offerBar");
var closeOffer = document.getElementById("closeOffer");

if(offerBar && closeOffer){
  closeOffer.addEventListener("click",function(){
    offerBar.style.display = "none";
  });
}