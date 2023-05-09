const commentText = document.getElementById('comment')
const ratingNum = document.getElementById('rating')
const commentTitle = document.getElementById('title')
const upvoteButton = document.querySelectorAll('.upvotes')
const downvoteButton = document.getElementById('downvotes')
const ul = document.querySelectorAll('ul.reply section')

const reviewPosting = async (event)=> {
    event.preventDefault();
    const title = commentTitle.value.trim()
    const text = commentText.value.trim()
    const rating = ratingNum.value
    const URL = document.URL
    console.log(text)
    console.log(rating)
    console.log(event)
    console.log(document.URL)
    console.log(ul[0].dataset.value)
    const games_id = URL.slice(-1)
    if (title && text && rating) {
        const response = await fetch ('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({title, text, rating, games_id}),
            headers: {'Content-Type': 'application/json'},
        });
        console.log(response)
        if (response.ok) {
            window.location.reload()
            // document.location.replace(`/games/${id}`)
            // alert('Success')
        } else {
            alert('Failed to post')
        }
    } else {
        alert('Please include a valid comment, title, and rating')
    }
}
document
    .querySelector('#reviewF')
    .addEventListener('submit', reviewPosting)

// const upvoteCount = 0
// const downvoteCount = 0
// const upvoting = async(event)=> {
//     // event.preventDefault()
//     console.log(event.target)
//     upvoteCount++
//     upvoteButton.value = upvoteCount
//     const up_votes = upvoteButton.value
//     if (up_votes) {
//         const response = await fetch ('/api/reviews', {
//             method: 'PUT',
//             body: JSON.stringify({up_votes}),
//             headers: {'Content-Type': 'application/json'}
//         })
//     }
// }
// function downvoting() {
//     downvoteButton.value = downvoteCount
// }
// upvoteButton.addEventListener('click', ()=>{
//     upvoting()
// })
// downvoteButton.addEventListener('click', ()=>{
//     downvoteCount++
//     downvoting()
// })