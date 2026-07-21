document.addEventListener("DOMContentLoaded", async () => {

    const container = document.querySelector(
        ".parkalia-parkalia-top-offers-container"
    );

    if (!container) return;

    try {

        //==============================
        // CARGAR HTML
        //==============================

        const html = await fetch(
            "/frontend/src/html/components/parkalia_top_offers.html"
        ).then(r => r.text());

        container.innerHTML = html;

        //==============================
        // REFERENCIAS
        //==============================

        const track = container.querySelector(
            ".parkalia-section-card-top-offer__track"
        );

        const btnNext = container.querySelector(
            ".parkalia-section-card-top-offer__arrow--right"
        );

        const btnPrev = container.querySelector(
            ".parkalia-section-card-top-offer__arrow--left"
        );

        //==============================
        // CARGAR JSON
        //==============================

        const offers = await fetch(
            "/frontend/src/data/parkalia_top_offers.json"
        ).then(r => r.json());

        //==============================
        // RENDER
        //==============================

        offers.forEach((offer) => {

            const article = document.createElement("article");

            article.className =
                `parkalia-section-card-top-offer__offer-card
                ${offer.featured
                    ? "parkalia-section-card-top-offer__offer-card--featured"
                    : ""
                }`;

            article.innerHTML = `

                <span class="parkalia-section-card-top-offer__offer-badge">

                    ${offer.badge}

                </span>

                <div class="parkalia-section-card-top-offer__offer-icon">

                    ${offer.icon}

                </div>

                <h3 class="parkalia-section-card-top-offer__offer-title">

                    ${offer.title}

                </h3>

                <p class="parkalia-section-card-top-offer__offer-description">

                    ${offer.description}

                </p>

                <ul class="parkalia-section-card-top-offer__offer-features">

                    ${offer.features.map(feature => `

                        <li class="parkalia-section-card-top-offer__offer-feature">

                            ✔ ${feature}

                        </li>

                    `).join("")}

                </ul>

                <div class="parkalia-section-card-top-offer__offer-footer">

                    <div class="parkalia-section-card-top-offer__prices">

                        <span class="parkalia-section-card-top-offer__old-price">

                            ${offer.oldPrice}

                        </span>

                        <h2 class="parkalia-section-card-top-offer__price">

                            ${offer.price}

                        </h2>

                    </div>

                    <a
                        class="
                            parkalia-btn
                            parkalia-btn--primary
                            parkalia-btn--expand
                            parkalia-section-card-top-offer__button
                        ">

                        <span class="parkalia-btn__text">

                            ${offer.button}

                        </span>

                        <img
                            src="/frontend/public/assets/icons/icon_next-white.svg"
                            class="parkalia-btn__icon"
                            alt=""
                        >

                    </a>

                </div>

            `;

            track.appendChild(article);

        });

        //==================================
        // SLIDER
        //==================================

        let currentIndex = 0;

        let cardsPerView = 4;

        function calculateCardsPerView(){

            if(window.innerWidth <= 480){

                cardsPerView = 1;

            }

            else if(window.innerWidth <= 768){

                cardsPerView = 2;

            }

            else if(window.innerWidth <= 992){

                cardsPerView = 3;

            }

            else{

                cardsPerView = 4;

            }

        }

        function updateSlider(){

            calculateCardsPerView();

            const card = track.querySelector(
                ".parkalia-section-card-top-offer__offer-card"
            );

            if(!card) return;

            const gap = 24;

            const cardWidth = card.offsetWidth + gap;

            track.style.transform =
                `translateX(-${currentIndex * cardWidth}px)`;

            btnPrev.style.visibility =
                currentIndex === 0
                ? "hidden"
                : "visible";

            btnNext.style.visibility =
                currentIndex >= offers.length - cardsPerView
                ? "hidden"
                : "visible";

        }

        btnNext.addEventListener("click",()=>{

            if(currentIndex < offers.length - cardsPerView){

                currentIndex++;

                updateSlider();

            }

        });

        btnPrev.addEventListener("click",()=>{

            if(currentIndex > 0){

                currentIndex--;

                updateSlider();

            }

        });

        window.addEventListener("resize",updateSlider);

        updateSlider();

    }

    catch(error){

        console.error(error);

    }

});