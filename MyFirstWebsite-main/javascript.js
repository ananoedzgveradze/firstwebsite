// BurgerBar 

let navigation = document.getElementById ('navBarLinks');
let toggleButton = document.getElementById ('toggleBurger');
let upLine = document.getElementById ('burger1');
let middleLine = document.getElementById ('burger2');
let downLine = document.getElementById ('burger3');

toggleButton.addEventListener('click', function () {
    navigation.classList.toggle('activeNavigation');
    upLine.classList.toggle('up');
    middleLine.classList.toggle('middle');
    downLine.classList.toggle('down');
})

// Section1 - Slider

let data = [
  {
      id:1,
      imageUrl:'https://images.hdqwalls.com/wallpapers/labrador-retriever-hd-5u.jpg',
      title:'Labrador Retriever',
      url:'https://www.akc.org/dog-breeds/labrador-retriever/',
  },

  {
    id:2,
    imageUrl:'https://images.unsplash.com/photo-1510621785963-8c1744b6a8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZW5nbGlzaCUyMGJ1bGxkb2d8ZW58MHx8MHx8&w=1000&q=80',
    title:'Bulldog',
    url:'https://www.akc.org/dog-breeds/bulldog/',
},

{
    id:3,
    imageUrl:'https://images.unsplash.com/photo-1612774412771-005ed8e861d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29sZGVuJTIwcmV0cmlldmVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    title:'Golden Retriever',
    url:'https://www.akc.org/dog-breeds/golden-retriever/',
},

{
    id:4,
    imageUrl:'https://images3.alphacoders.com/978/978403.jpg',
    title:'Beagle',
    url:'https://www.akc.org/dog-breeds/beagle/',
},

{
    id:5,
    imageUrl:'https://wallpapercave.com/wp/wp4669099.jpg',
    title:'German Spitz',
    url:'https://www.akc.org/dog-breeds/german-spitz/',
},

{
    id:6,
    imageUrl:'https://wallpaperaccess.com/full/2601781.jpg',
    title:'Cocker Spaniel',
    url:'https://www.akc.org/dog-breeds/cocker-spaniel/',
},

{
    id:7,
    imageUrl:'https://www.akc.org/wp-content/uploads/2017/11/Siberian-Husky-standing-outdoors-in-the-winter.jpg',
    title:'Siberian Husky',
    url:'https://www.akc.org/dog-breeds/siberian-husky/',
},

{
    id:8,
    imageUrl:'https://media-be.chewy.com/wp-content/uploads/2021/06/02102805/Doberman-Pinscher_Featured-Image.jpg',
    title:'Doberman',
    url:'https://www.akc.org/dog-breeds/doberman-pinscher/',
},

{
    id:9,
    imageUrl:'https://c4.wallpaperflare.com/wallpaper/449/475/770/collie-wallpaper-preview.jpg',
    title:'Rough Collie',
    url:'https://www.akc.org/dog-breeds/collie/',
},

{
    id:10,
    imageUrl:'https://coolthemestores.com/wp-content/uploads/2021/08/jack-russell-terrier-wallpaper-background.jpg',
    title:'Jack Russell Terrier',
    url:'https://www.akc.org/dog-breeds/russell-terrier/',
},
];

let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let sliderContent = document.getElementById('slider-content');
let dotsList = document.getElementsByClassName ('dot');


let sliderIndex = 0;

function createATag(item) {
    let aTag = document.createElement('a');
    aTag.setAttribute('href', item.url);
    aTag.classList.add('slide');

    return aTag;
}

function createImgTag(item) {
    let ImgTag = document.createElement('img');
    ImgTag.setAttribute('src', item.imageUrl);
    ImgTag.setAttribute('alt', item.title);
    ImgTag.classList.add('image-slider');
  
    return ImgTag;
}    
function createDots (item) {
    let dots = document.createElement('div');
    dots.classList.add('dots');

    data.forEach(element => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id', element.id - 1);
        
        dot.onclick = function (event) {
            let id = event.target.getAttribute ('data-id');
            sliderIndex = id;
            setSlide();
        }

        dots.appendChild(dot);
    });
    return dots;
}



function createH2Tag(item) {
    let H2TagTitle = document.createElement('h2');
    H2TagTitle.classList.add('slider-title');
    H2TagTitle.append(item.title);

    return H2TagTitle;
    
}



function setSlide() {
    sliderContent.innerHTML = '';
    let slideItem = createATag(data[sliderIndex]);
    let imgSliderItem = createImgTag(data[sliderIndex]);
    let tagTitle = createH2Tag(data[sliderIndex]);
    let dots = createDots()


    slideItem.appendChild(imgSliderItem);
    slideItem.appendChild(tagTitle);
    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);
     
    currentDotActive();

    console.log(slideItem);
}

function currentDotActive() {
    dotsList[sliderIndex].classList.add('active');
    
}




function arrowLeftClick() {
    if (sliderIndex <=0 ) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
    }
    sliderIndex --;
    setSlide();
    
}

function arrowRightClick() {
    //console.log(data.length)
    if (sliderIndex >= data.length - 1) {
        sliderIndex = 0;
        setSlide();
        return;
    }
    sliderIndex ++;
    setSlide();
    
};
    arrowLeft.addEventListener('click', arrowLeftClick);
    arrowRight.addEventListener('click',arrowRightClick);

    setInterval(() => {
        arrowRightClick();
    }, 2000);

setSlide();

// section3
// Ajax

function getUsers(page) {

    let request = new XMLHttpRequest();
    request.addEventListener('load', render);
    request.addEventListener('error', errorRender);
    
    
    request.open('GET', 'https://reqres.in/api/users?page=' + page);
    request.send();
    }
    
    let currentPage = 1;
    let totalPagesApi;
    
    
    function render() {
        let response = this.responseText;
        let responseData = JSON.parse(response);
    
        var fragment = document.createDocumentFragment();
        var fragment2 = document.createDocumentFragment();
        var itemI = 0;
        responseData.data.forEach(item => {
            let li = document.createElement('li');
            
    
            let pEmail = document.createElement('p');
            pEmail.textContent = item.email;
            pEmail.classList.add('email-block');
    
    
    
            let image = document.createElement('img')
            image.src = item.avatar;
            image.classList.add('image-block')
    
            li.appendChild(image)
            li.appendChild(pEmail);
            li.classList.add('liItem1');
            if(itemI > 2){
                fragment2.appendChild(li);
            }
            else{
           
           
            fragment.appendChild(li);
            }
            
            itemI = itemI +1 
        });
    
        document.getElementById('ul-list').innerHTML='';
        document.getElementById('ul-list2').innerHTML='';
        document.getElementById('ul-list').appendChild(fragment);
        document.getElementById('ul-list2').appendChild(fragment2);
    
        totalPagesApi = responseData.total_pages;
    
    }
    
  
    function errorRender() {
        let p = Document.createElement('p');
        p.textContent = 'Server Error';
    
        document.querySelector('#api-user-email').appendChild(p);
    }
    
    
    
    document.getElementById('prev').addEventListener('click',function () {
        if (currentPage == 1 ) {
            return;
        }
        currentPage -= 1;
        getUsers(currentPage);
    })
    
    document.getElementById('next').addEventListener('click', function () {
        if (currentPage == totalPagesApi) {
            return;
        }
    
        currentPage +=1;
        getUsers(currentPage);
    })
    
    getUsers(currentPage);



// accordion
let accordion = document.getElementsByClassName('container');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}


// contact form
document.getElementById ('registration').addEventListener('submit', function (event) {
    event.preventDefault();

    let errors = {};
    let form = event.target;


let firstName =document.getElementById('firstname').value;
    if (firstName.length < 4 || firstname == '' ) {
        errors.firstname = 'Name can not be empty and must be more than 4 symbols'
    }

let surName =document.getElementById('surname').value;
    if (surName.length < 6 || surname == '' ) {
        errors.surname = 'Surname can not be empty and must be more than 6 symbols'
    }


//checkbox

let agree = document.getElementById('checkagree').checked;
if (agree == false) 
{
    errors.agree = 'You must agree our terms and conditions';
}


console.log(errors);

form.querySelectorAll('.error-text').forEach(item => {
    item.innerHTML = '';
    
});

for (let item in errors) {
    console.log(item);
    let errorSpan = document.getElementById('error_' + item);

    if (errorSpan) {
        errorSpan.textContent = errors[item];
        
    }
}

if (Object.keys(errors).length == 0) {
    form.submit();
    
} 


});

//email validation

function validation() {
    let emailField = document.getElementById('myemail').value;
    let spanText = document.getElementById('emailtext');
    let emailStructure =  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/

    if (emailField.match(emailStructure)) {
        spanText.innerHTML = 'You Email is valid';
        spanText.style.color = 'green';
    
    
    } else {
        spanText.innerHTML = 'You Email is invalid';
        spanText.style.color = 'red';
    }
        
}

