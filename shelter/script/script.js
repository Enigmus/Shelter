document.addEventListener("DOMContentLoaded", function () {
  const pets = [
    {
      id: 1,
      name: "Jennifer",
      img: "img/pets-jennifer.png",
      type: "Dog",
      breed: "Labrador",
      description:
        "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      age: "2 months",
      inoculations: ["none"],
      diseases: ["none"],
      parasites: ["none"],
    },
    {
      id: 2,
      name: "Sophia",
      img: "img/pets-sophia.png",
      type: "Dog",
      breed: "Shih tzu",
      description:
        "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      age: "1 month",
      inoculations: ["parvovirus"],
      diseases: ["none"],
      parasites: ["none"],
    },
    {
      id: 3,
      name: "Woody",
      img: "img/pets-woody.png",
      type: "Dog",
      breed: "Golden Retriever",
      description:
        "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      age: "3 years 6 months",
      inoculations: ["adenovirus", "distemper"],
      diseases: ["right back leg mobility reduced"],
      parasites: ["none"],
    },
    {
      id: 4,
      name: "Scarlett",
      img: "img/pets-scarlett.png",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description:
        "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      age: "3 months",
      inoculations: ["parainfluenza"],
      diseases: ["none"],
      parasites: ["none"],
    },
    {
      id: 5,
      name: "Katrine",
      img: "img/pets-katrine.png",
      type: "Cat",
      breed: "British Shorthair",
      description:
        "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      age: "6 months",
      inoculations: ["panleukopenia"],
      diseases: ["none"],
      parasites: ["none"],
    },
    {
      id: 6,
      name: "Timmy",
      img: "img/pets-timmy.png",
      type: "Cat",
      breed: "British Shorthair",
      description:
        "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      age: "2 years 3 months",
      inoculations: ["calicivirus", "viral rhinotracheitis"],
      diseases: ["kidney stones"],
      parasites: ["none"],
    },
    {
      id: 7,
      name: "Freddie",
      img: "img/pets-freddie.png",
      type: "Cat",
      breed: "British Shorthair",
      description:
        "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      age: "2 months",
      inoculations: ["rabies"],
      diseases: ["none"],
      parasites: ["none"],
    },
    {
      id: 8,
      name: "Charly",
      img: "img/pets-charly.png",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description:
        "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      age: "8 years",
      inoculations: ["bordetella bronchiseptica", "leptospirosis"],
      diseases: ["deafness", "blindness"],
      parasites: ["lice", "fleas"],
    },
  ];

  let sliderWrapp = document.querySelector(".slider__wrapp");

  if (sliderWrapp) {
    let historySlide = [];
    let generatedListSlide = [];
    let countClick = 0;
    let countVisibleSlide = 3;
    let sliderBtnNext = document.querySelector(".slider__nav-btn_next");
    let sliderBtnPrev = document.querySelector(".slider__nav-btn_prev");

    let sliderLine = sliderWrapp.children[0];
    let slideWidth;

    function generateCard(id) {
      let petData = pets.filter((pet) => pet.id === id);
      return `<!-- card ${petData[0].id}-->
    <div class="slide__pet-card pet-card">
      <div class="pet-card__img-wrap">
        <img src="${petData[0].img}" alt="${petData[0].name}" />
      </div>
      <h3 class="pet-card__title heading-3">${petData[0].name}</h3>
      <button
        class="pet-card__button button-lnk button-lnk_no-bg"
      >
        Learn more
      </button>
    </div>`;
    }

    function randomId(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateSlide(generatedListSlide) {
      while (generatedListSlide.length < 3) {
        let num = randomId(1, pets.length);
        if (!generatedListSlide.includes(num)) generatedListSlide.push(num);
      }

      let slide = document.createElement("div");
      slide.classList.add("slider__slide", "slide");
      generatedListSlide.forEach((el) => {
        slide.insertAdjacentHTML("beforeend", generateCard(el));
      });

      return slide;
    }

    const startSlider = (countCardInSlide) => {
      for (let i = 0; i < countCardInSlide; i++) {
        let slide = generateSlide(generatedListSlide);
        if (i === 1) slide.classList.add("active");
        sliderLine.append(slide);
      }

      console.log(document.getElementsByClassName("slide"));
    };

    const moveSlide = () => {
      let fistSlide = sliderWrapp.children[0];
      let lastSlide = sliderWrapp.children[sliderWrapp.children.length - 1];
    };

    const changeSlide = (direction) => {
      if (direction === "right") {
        countClick += 1;
        sliderWrapp.style.transform = `translateX(-${100}%)`;

        moveSlide();
      }
      if (direction === "left") {
        sliderWrapp.style.transform = `translateX(+${100}%)`;
      }
    };

    sliderBtnPrev.addEventListener("click", () => {
      changeSlide("left");
    });
    sliderBtnNext.addEventListener("click", () => {
      changeSlide("right");
    });
    startSlider(3);
  }
});
