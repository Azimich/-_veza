import videojs from "video.js";

export const initTabssizes = () => {
    
    document.querySelectorAll('.typesizes__menu-link').forEach((elem) => {
        elem.addEventListener('click', function(e) {
            e.preventDefault();
            const id = e.target.getAttribute('href').replace('#','');
            document.querySelectorAll('.typesizes__menu-link').forEach(
                (element) => element.classList.remove('active'));

            document.querySelectorAll('.tab__cont').forEach(
                (el) => el.classList.add('hide'));

            elem.classList.add('active');
            document.getElementById(id).classList.remove('hide');
        });
    });

    //video.js
    const videoJs = document.querySelector('.video-js')
    if (videoJs) {
        videojs(videoJs)
    }

    //Accordion-fans
    const sizeTableContainer = document.querySelector('.typesizes__table__container');
    const sizeTableButton = document.querySelector('.typesizes__table-button');

    if (sizeTableButton, sizeTableButton) {
        sizeTableButton.addEventListener('click', ()=> {
            sizeTableContainer.classList.toggle('active')
            sizeTableButton.classList.toggle('active')
        });
    }


    if (buttonTechnical) {
        const buttonTechnical = document.querySelector('.typesizes__technical-button');
        const technicalTopBox = document.querySelector('.typesizes__technical__top-box');
        const technicalSvg = document.querySelector('.svg__technical-button');
    
        buttonTechnical.addEventListener('click', ()=> {
            technicalTopBox.classList.toggle('active');
            technicalSvg.classList.toggle('active')
        });
    }

    if (buttonTechnicalVran) {    
        buttonTechnicalVran.addEventListener('click', ()=> {
            typesizesBox.classList.toggle('active');
            svgVran.classList.toggle('active')
        });
    }
     
}