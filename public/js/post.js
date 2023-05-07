const commentText = document.getElementById('#comment')
const ratingNum = document.getElementById('#rating')
const commentTitle = document.getElementById('#title')
const upvoteButton = document.getElementById('#upvotes')
const downvoteButton = document.getElementById('#downvotes')

const reviewPosting = async (event)=> {
    event.preventDefault();
    const title = commentTitle.value.trim()
    const text = commentText.value.trim()
    const rating = ratingNum.value
    if (title && text && rating) {
        const response = await fetch ('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({title, text, rating}),
            headers: {'Content-Type': 'application/json'},
        });
        if (response.ok) {
            document.location.replace('/')
        } else {
            alert('Failed to post')
        }
    } else {
        alert('Please include a valid comment, title, and rating')
    }
}
document
    .querySelector('reviewForm')
    .addEventListener('submit', reviewPosting)

const upvoteCount = 0
const downvoteCount = 0
function upvoting() {
    upvoteButton.value = upvoteCount
}
function downvoting() {
    downvoteButton.value = downvoteCount
}
upvoteButton.addEventListener('click', ()=>{
    upvoteCount++
    upvoting()
})
downvoteButton.addEventListener('click', ()=>{
    downvoteCount++
    downvoting()
})