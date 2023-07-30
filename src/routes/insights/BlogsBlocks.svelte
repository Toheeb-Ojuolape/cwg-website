<script>
    let blogItems = [
        {
            url: '/insights/single-view',
            img: '/images/blog-img-1.jpg',
            tags: ['Womens Day', 'Conference', 'Event'],
            title:'Choose to Challenge: Breaking New Frontiers in the New Normal',
            author: 'CWG',
            date: 'August 10, 2022',
            readingTime: '3 mins'
        },
        {
            url: '/insights/single-view',
            img: '/images/blog-img-2.jpg',
            tags: ['Data', 'Event', 'Analytics'],
            title:'Balance Sheet of The Future: Risk-Data-Analytics',
            author: 'CWG',
            date: 'August 10, 2022',
            readingTime: '3 mins'
        },
        {
            url: '/insights/single-view',
            img: '/images/blog-img-3.jpg',
            tags: ['Perspective', 'Leadership', 'Lesson'],
            title:'Lessons on Leadership',
            author: 'CWG',
            date: 'July 28, 2022',
            readingTime: '3 mins'
        },
        {
            url: '/insights/single-view',
            img: '/images/blog-img-4.jpg',
            tags: ['Perspective', 'Leadership', 'Thinking'],
            title:'The Outside-the-Box Leader',
            author: 'CWG',
            date: 'August 10, 2022',
            readingTime: '3 mins'
        },
        {
            url: '/insights/single-view',
            img: '/images/blog-img-5.jpg',
            tags: ['Partnership', 'Perspective', 'CWG', 'Banks'],
            title:'CWG, A Friend Of The Banks',
            author: 'CWG',
            date: 'August 10, 2022',
            readingTime: '3 mins'
        },
        {
            url: '/insights/single-view',
            img: '/images/blog-img-6.jpg',
            tags: ['Perspective', 'Trends', 'Services'],
            title:'Trends And Challenges In The Financial Services Sector',
            author: 'CWG',
            date: 'August 10, 2022',
            readingTime: '3 mins'
        },
        {
            url: '/insights/single-view',
            img: '/images/blog-img-7.jpg',
            tags: ['Perspective', 'Dubai', 'Expansion'],
            title:'On Expanding A Company, Lessons From Dubai',
            author: 'CWG',
            date: 'August 10, 2022',
            readingTime: '3 mins'
        },
        {
            url: '/insights/single-view',
            img: '/images/blog-img-8.jpg',
            tags: ['Perspective', 'Legal', 'Regulatory Tech'],
            title:'Legal Thoughts: Scaling through the Harsh Regulatory Environment',
            author: 'CWG',
            date: 'August 10, 2022',
            readingTime: '3 mins'
        },
        {
            url: '/insights/single-view',
            img: '/images/blog-img-8.jpg',
            tags: ['Perspective', 'Legal', 'Regulatory Tech'],
            title:'Legal Thoughts: Scaling through the Harsh Regulatory Environment',
            author: 'CWG',
            date: 'August 10, 2022',
            readingTime: '3 mins'
        },
    ]

    let isButtonVisible = blogItems.length > 8;

    function addShowClass() {
		const sharedElements = document.querySelectorAll('.blog-block');
		sharedElements.forEach((element) => {
			element.classList.add('show-blog-block');
		});

		isButtonVisible = false;
	}
</script>


<div class="blogs-blocks-wrapper grid sm:grid-cols-3 lg:grid-cols-4 gap-[30px] lg:gap-[50px]">
    {#each blogItems as blogItem}
        <a href="#!" class="blog-block">
            <div class="blog-block-img-wrapper relative">
                <img src={blogItem.img} alt="blog-img" class="bg-img">
            </div>
            <div class="blog-block-texts py-[20px] px-[12px]">
                <div class="blog-tags flex flex-wrap gap-[10px] text-[14px]">
                    {#each blogItem.tags as tag}
                        <span>{tag}</span>
                    {/each}
                </div>
                <h3 class="blog-block-title text-[24px] leading-8 mb-[20px] mt-[15px] text-greyish-blue">
                    {blogItem.title}
                </h3>
                <div class="text-[12px] text-bright-blue">
                    By {blogItem.author}  ∙  {blogItem.date}  ∙  {blogItem.readingTime}
                </div>
            </div>
        </a>
    {/each}          
</div>

{#if isButtonVisible}
	<button
		on:click={addShowClass}
		class="show-blog-trigger-wrapper flex gap-2 justify-center items-center text-bright-blue cursor-pointer text-[16px] my-10"
	>
		<span>View more </span>
		<img src="/images/bright-blue-caret.svg" alt="bright-blue-caret" />
	</button>
{/if}

<style>
    .blog-block-img-wrapper img  {
        transition: transform 1.2s;
    }
    .blog-block:hover .blog-block-img-wrapper img {
        transform: scale(1.05);
    }
    .blog-block-img-wrapper {
        width: 100%;
        padding-top: 65%;
    }

    .show-blog-trigger-wrapper {
        padding-bottom: 10px;
        border-bottom: 1px solid;
    }

    @media(max-width: 640px) {
        .blog-block-img-wrapper {
            padding-top: 0;
        }
        .blog-block-img-wrapper img.bg-img {
            position: relative;
        }
    }
</style>