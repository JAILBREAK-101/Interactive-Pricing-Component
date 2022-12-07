// My Javascript.
const container = document.querySelector('.container');
const button_submit = document.querySelector('#submit');
const selected_item = document.querySelector('.ratings-list');
let form = document.querySelector('form');

// Rating on the feedback page
let paragraph = document.querySelector('span.rating');

// feedback-page.
const feedback = document.querySelector('.feedback');

//  FOR WHEN WE CLICK ON ANY RATING.
function toggle(current_item) {
    selected_item.addEventListener('click', e => {
        const target_element = e.target.closest('li');
        if (!target_element) return;

        current_item.classList.remove('clicked');
        let user_rating = target_element.innerHTML;
        paragraph.innerText = user_rating;
    })
}

// Get the element (button we click on)
function get_target_element(event_object) {
    let target = event_object.target.closest('button')
    paragraph.innerText = target.innerText
}

selected_item.addEventListener('click', (e) => {
    get_target_element(e)
})


// FOR WHEN WE CLICK THE SUBMIT BUTTON, TO SUBMIT OUR REVIEW.
function submit(target_element) {
    selected_item.addEventListener('click', (e) => {
        get_target_element(e)
    })
    paragraph.innerText = target_element.innerText
}

// Show the Feedback display with our rating.
button_submit.addEventListener('click', (e) => {
    e.preventDefault();
    let target_element = e.target.closest('button.rating')
    console.log(target_element)
    container.style.display = 'none';
    // For styling
    feedback.style.display = 'flex';
})