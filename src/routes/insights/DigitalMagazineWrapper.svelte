<script>
    let magazineCovers = [
        {
            img: '/images/digital-magazine.jpg',
            title: 'Forward looking: An Evolution of our history',
            date: 'January/December 2022'
        },
        {
            img: '/images/digital-magazine.jpg',
            title: 'Forward looking: An Evolution of our history',
            date: 'January/December 2022'
        },
        {
            img: '/images/digital-magazine.jpg',
            title: 'Forward looking: An Evolution of our history',
            date: 'January/December 2022'
        },
        {
            img: '/images/digital-magazine.jpg',
            title: 'Forward looking: An Evolution of our history',
            date: 'January/December 2022'
        },
    ]
</script>

<div class="magazine-wrapper grid sm:grid-cols-2 lg:grid-cols-4 gap-[30px] lg:gap-[50px]">
    {#each magazineCovers as magazineCover}
        <a href="/insights/" class="magazine-block bg-whitish-blue dark:bg-dark-highlight hover-scale">
            <div class="magazine-img-wrapper">
                <img src={magazineCover.img} alt="magazine cover" class="magazine-cover">
            </div>
            <div class="magazine-cover-details py-[15px] px-[20px]">
                <b class="text-midnight-blue dark:text-white">{magazineCover.title}</b>
                <span class="text-greyish-blue">{magazineCover.date}</span>
            </div>
        </a>
    {/each}
</div>