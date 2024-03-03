// variables 

const postParent = document.getElementById('cardContainer')
const readTextParent = document.getElementById('readTextContainer')
const latestPostContainer = document.getElementById('latestPostContainer')
let count = 0

// fetch card from api

const getCard = async () => {

    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');

    const data = await response.json();
    const posts = data.posts;
    return posts
    
}

// show data on display 

const displayCards = async() => {

    const posts = await getCard()


        posts.forEach(element => {

            const post = document.createElement('div')
            // console.log(post);

            post.innerHTML = `
            <div class="flex flex-col gap-8 px-7 bg-[#F3F3F5] rounded-lg shadow md:flex-row min-h-[260px] max-w-[820px] ">
            <div class=" pt-10 ">
            <img class="h-14 w-16 rounded-full" src="${element.image}" alt="">
            </div>
        <div class="flex flex-col justify-between w-full p-4 leading-normal">
            <div class="flex items-center gap-4 text-[#12132DCC] pt-6 text-xl pb-4">
                <p id="catagory" class="pr-2">#${element.category}</p>
                <p id="Author">Author : ${element.author.name}</p>
            </div>
            <h2 class="mb-2 text-2xl font-bold text-[#12132D] ">${element.title}</h2>
            <p class="mb-3 font-normal text-[#12132D99] pt-4">${element.description}</p>
            <div class="flex justify-between w-full mt-4 border-t-2 border-dashed pt-4">
                <div class="flex gap-6 mt-4">
                    <div class="flex gap-3">
                        <img src="assets/images/massage.svg" alt="">
                        <p>${element.comment_count}</p>
                    </div>
                    <div class="flex gap-3">
                        <img src="assets/images/eye.svg" alt="">
                        <p id="view">${element.view_count}</p>
                    </div>
                    <div class="flex gap-3">
                        <img src="assets/images/time.svg" alt="">
                        <p>${element.posted_time}</p>
                    </div>
                </div>

                <div >
                    <i id="markAsRead" class="fa-regular fa-envelope bg-[#10B981] text-white rounded-full px-2.5 py-2 text-xl"></i>
                </div>
                
            </div>
        </div>
    </div>

    `
    postParent.appendChild(post)

     });
     const massages = document.querySelectorAll('#markAsRead')
     massages.forEach( (massage) => {

        massage.addEventListener('click',function (e) {
            const viewCounts = e.target.parentNode.parentNode.children[0].children[1].children[1].innerText
            displayReadItem(viewCounts)
     })
    })
}

displayCards()

// display read item 

const displayReadItem = (element) => {
    const read = document.createElement('div')


    read.innerHTML = `
    <div class="flex justify-between bg-white my-6 p-4 rounded-md">
                <h2 class="text-[#12132D] text-xl font-medium">Title</h2>
                <div class="flex gap-3">
                <img src="assets/images/eye.svg" alt="">
                    <h2 class="text-[#12132D99] text-xl">Mark as read <span>(${element})</span></h2>
                        
                </div>
            </div>
    `
    readTextParent.appendChild(read)

    const readCount = document.getElementById('readCount')
    count++
    readCount.innerText = count
}


// get latest post 

const getLatestPost = async () => {

    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')

    const data = await response.json()

    return data
}


const displayLatestPost = async () => {

    const data = await getLatestPost()

    data.forEach(element => {
        console.log(element);
        const latestPost = document.createElement('div');
        latestPost.innerHTML = `
        <div class="w-full max-w-sm bg-white rounded-lg shadow p-6 h-[530px]">
                            <div class="bg-[#12132D0D] rounded-[20px] mb-4">
                                <img class="p-8 rounded-t-lg" src="${element.cover_image}" alt="product image" />
                            </div>
                            <div class=" pb-5">
                                <div>
                                    <div class="flex gap-2">
                                        <img src="assets/images/date.svg" alt="" class="">
                                        <p class="text-[#12132D99] text-lg">${element.author.posted_date}</p>
                                    </div>
                                    <h5 class="text-xl font-semibold tracking-tight text-[#12132D] mt-4">${element.title}</h5>
                                </div>
                                
                                <p class="text-xs font-bold text-[#12132D99] my-4">${element.description}</p>
                                <div class="flex gap-5 items-center">
                                    <div >
                                        <img class="w-10 h-10 rounded-full" src="${element.profile_image}" alt="">
                                    </div>
                                    <div>
                                        <h2 class="text-[#12132D] font-semibold">${element.author.name}</h2>
                                        <p class="text-[#12132D99] font-medium">${element.author.designation}</p>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
        `

        latestPostContainer.appendChild(latestPost)
    });
}

displayLatestPost()