// variables 

const postParent = document.getElementById('cardContainer')


// fetch card from api

const getCard = async () => {

    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');

    const data = await response.json();
    const posts = data.posts;
    // console.log(posts);
    return posts
    
}

// show data on display 

const displayCards = async() => {

    const posts = await getCard()

    // console.log(posts);
        posts.forEach(element => {
            console.log(element);

            const post = document.createElement('div')

            post.innerHTML = `
            <div class="flex flex-col gap-8 px-7 bg-[#F3F3F5] rounded-lg shadow md:flex-row min-h-[260px] max-w-[820px] ">
            <div class=" pt-10 ">
            <img class=" w-[72px] h-[72px] rounded-full" src="${element.image}" alt="">
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
                        <p>${element.view_count}</p>
                    </div>
                    <div class="flex gap-3">
                        <img src="assets/images/time.svg" alt="">
                        <p>${element.posted_time}</p>
                    </div>
                </div>

                <div>
                    <i class="fa-regular fa-envelope bg-[#10B981] text-white rounded-full px-2.5 py-2 text-xl"></i>
                </div>
                
            </div>
        </div>
    </div>

    `

    postParent.appendChild(post)
     });
}

displayCards()