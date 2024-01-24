const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
]


function printArray(array){

    const container = document.getElementById("container")

    array.forEach((post)=>{
        const postElement = document.createElement("div")
        postElement.classList.add("post")

        const profileImgSrc = post.author.image ? post.author.image : "https: placehold.it/60x60"

        const initials = post.author.name.split( " " ).map(word => word[0]).join("")

        const profilePic = post.author.image ? `
        <img class="profile-pic" src="${profileImgSrc}" 
        alt="${post.author.name}">
        ` : `
        <div class="profile-pic-default">
        <span>${initials}</span>
        </div>`

        const date = new Date(post.created)
        const formattedDate = date.toLocaleDateString("it-IT")

        const postHtml = `
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    ${profilePic}
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${post.author.name}</div>
                    <div class="post-meta__time">${formattedDate}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${post.content}</div>
        ${post.media ? `<div class="post__image"><img src="${post.media}" alt=""></div>` : ''}
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button js-like-button"  data-postid="${post.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
                </div>
            </div> 
        </div>            
    `
        

        postElement.innerHTML = postHtml
        container.appendChild(postElement)
    })
}


printArray(posts)



// const likedClass = 'like-button--liked'

// document.addEventListener("click", function (event) {
//     const target = event.target

//     if (target.classList.contains('js-like-button')) {
//         event.preventDefault()

//         const postId = target.getAttribute('data-postid')
//         const post = posts.find(post => post.id.toString() === postId)

//         if (post) {
//             const isLiked = target.classList.contains(likedClass)

//             if (isLiked) {
//                 post.likes = post.likes - 1
//             } else {
//                 post.likes = post.likes + 1
//             }

//             const likeCounter = document.getElementById(`like-counter-${postId}`)
//             likeCounter.textContent = post.likes

//             target.classList.toggle(likedClass)
//         }
//     }
// })


/* correzione fatta in classe

likeButtons.forEach((element, index)=>{
    element.addEventListener("click", function(e){
        e.preventDefault()
        element.classList.toggle("like-button--liked")

        if (element.classList.contains("like-button--liked")){
            posts[index].likes++

            counterButtons[index].innerHTML = posts[index].likes
            console.log(posts[index])
        } else {
            posts[index].likes--
            counterButtons[index].innerHTML = posts[index],likes
        }
    })
})

*/