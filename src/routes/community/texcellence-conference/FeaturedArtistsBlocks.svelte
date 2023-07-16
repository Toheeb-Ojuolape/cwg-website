<script>
    let artists = [
        {
            image: `/images/yet-to-be-confirmed-2.jpg`,
            name: `Muson Center's Band`,
            role: `Guest Artist`
        },
        {
            image: `/images/yet-to-be-confirmed-2.jpg`,
            name: `Arya Starr`,
            role: `Guest Artist`
        },
        {
            image: `/images/yet-to-be-confirmed-2.jpg`,
            name: `Tiwa Savage`,
            role: `Guest Artist`
        },
        {
            image: `/images/yet-to-be-confirmed-2.jpg`,
            name: `Timi Dakolo`,
            role: `Guest Artist`
        },
        {
            image: `/images/yet-to-be-confirmed-2.jpg`,
            name: `Adekunle Gold`,
            role: `Guest Artist`
        },
        {
            image: `/images/yet-to-be-confirmed-2.jpg`,
            name: `Rema`,
            role: `Guest Artist`
        },
    ]
</script>

{#each artists as artist}
    <div class="featured-artist-block flex bg-whitish-blue dark:bg-dark-highlight">
        <div class="artist-img-wrapper w-[120px] lg:w-[212px] h-[142px] lg:h-[234px] relative">
            <img src={artist.image} alt="artist" class="artist-img bg-img">
        </div>
        <div class="aritist-details-block relative flex-1">
            <div class="artist-details">
                <div class="artist-name">{artist.name}</div>
                <div class="artist-role">{artist.role}</div>
            </div>
        </div>
    </div>
{/each}

<style>
    .artist-img-wrapper {
        border-bottom: 1px solid var(--color-midnight-blue);
    }
    .aritist-details-block {
        border-bottom: 1px solid var(--color-greyish-blue);
    }
    .artist-name {
        font-size: 22px;
    }
    .artist-details {
        position: absolute;
        bottom: 25px;
        left: 25px;
    }

    @media(min-width: 1024px) {
        .artist-name {
            font-size: 22px;
        }
    }

    @media(max-width: 640px) {
        .artist-name {
            font-size: 20px;
        }
        .artist-role {
            font-size: 13px;
        }
    }
</style>