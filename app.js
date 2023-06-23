function showContent(contentName) {
    let contentElements = document.getElementsByClassName("content-item");
    for (let i = 0; i < contentElements.length; i++) {
      contentElements[i].style.display = "none";
    }
    
    let selectedContent = document.getElementById(contentName);
    selectedContent.style.display = "block";
    
    let componentElements = document.getElementsByClassName("component");
    for (let j = 0; j < componentElements.length; j++) {
      componentElements[j].classList.remove("active");
    }
    
    let selectedComponent = document.getElementById(contentName + "-component");
    selectedComponent.classList.add("active");
  }