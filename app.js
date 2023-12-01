
const accordions = document.querySelectorAll('#accordion');

accordions.forEach(function (accordion) {



    const accordionBtn = accordion.querySelector('#accordion-button')

    const minusState = accordion.querySelector('img[alt="minus-icon"]')

    const plusState = accordion.querySelector('img[alt = "plus-icon"]')





    const accordionCollapse = () => {

        accordionBtn.ariaExpanded = "false"

        accordion.classList.add('collapse')

        minusState.classList.add('hidden')

        plusState.classList.remove('hidden')

    }



    const accordionExpand = () => {


       

        minusState.classList.remove('hidden')

        plusState.classList.add('hidden')



        accordions.forEach(function (a) {

            a.classList.add('collapse')

            const minusState = a.querySelector('img[alt="minus-icon"]')

            const plusState = a.querySelector('img[alt = "plus-icon"]')

            const accordionBtn = a.querySelector('#accordion-button')

            accordionBtn.ariaExpanded = "false"

            plusState.classList.remove('hidden')

            minusState.classList.add('hidden')


        })
        
        accordionBtn.ariaExpanded = "true"

        accordion.classList.remove('collapse')

        plusState.classList.add('hidden')

        minusState.classList.remove('hidden')

    }



    const handleAccordionCollapseAndExpanded = () => {
        const isExpanded = accordionBtn.getAttribute('aria-expanded') === "true"

        if (isExpanded) {


            accordionCollapse()


        }


        else accordionExpand()


    }





    accordionBtn.addEventListener('click', handleAccordionCollapseAndExpanded)
})