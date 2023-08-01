<script>
	import { title } from "process";
  import { ArrowLeftCircle, ArrowRightCircle, Icon } from "svelte-hero-icons";

    let mediaDetails = [
        {
            image: '/images/cwg-30-img.jpg',
            title: 'CWG @ 30',
            pics: 100
        },
        {
            image: '/images/staff.jpg',
            title: 'Staff',
            pics: 37
        },
        {
            image: '/images/management.jpg',
            title: 'Management',
            pics: 20
        },
        {
            image: '/images/board-of-directors.jpg',
            title: 'Board of Directors',
            pics: 17
        },
        {
            image: '/images/buildings.jpg',
            title: 'Buildings',
            pics: 100
        },
        {
            image: '/images/cwg-brand-kit.jpg',
            title: 'CWG Brand Kit',
            pics: 34
        },
        {
            image: '/images/gallery-logos.jpg',
            title: 'Logos',
            pics: 10
        },
        {
            image: '/images/csr.jpg',
            title: 'CSR',
            pics: 100
        },
    ]

    let currentIndex = 0;
    let sliderImages = [
      {
        image: '/images/working-woman-2.jpg',
      },
      {
        image: '/images/working-team.jpg',
      },
      {
        image: '/images/youth-bootcamp.jpg',
      },
      {
        image: '/images/working-staff.jpg',
      },
      {
        image: '/images/transportation.jpg',
      },
    ];

    let showModal = true;
    let selectedAlbumTitle = '';

    const openModal = (/** @type {string} */ albumTitle) => {
      selectedAlbumTitle = albumTitle;
      showModal = true;
    };
    const closeModal = () => {
      showModal = false;
    };

  //   /**
	//  * @param {number} index
	//  */
  //  function goToSlide(index) {
  //     currentIndex = index;
  //   }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % sliderImages.length;
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    }
</script>

{#each mediaDetails as mediaDetail}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="gallery-media-block hover-scale bg-pewter-blue text-white cursor-pointer" on:click={() => openModal(mediaDetail.title)}>
        <div class="gallery-media-img relative">
            <img src={mediaDetail.image} alt="media" class="bg-img">
        </div>
        <div class="gallery-media-details p-[20px]">
            <div class="flex justify-between mb-[25px]">
                <span class="text-[18px]">{mediaDetail.title}</span>
                <span class="text-[14px]">{mediaDetail.pics}pcs</span>
            </div>
            <button class="view-all-wrapper text-[14px] flex gap-[7px] px-[5px] pb-[5px]">
                <span>View all</span>
                <img src="/images/zoom-out.svg" alt="zoom-out">
            </button>
        </div>
    </div>
{/each}

{#if showModal}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="modal">
        <div class="slider">
            {#each sliderImages as sliderImage, i (sliderImage.image)}
              <div class="relative">
                {#if i === currentIndex}
                 <div class="slider-img-wrapper">
                    <img src={sliderImage.image} alt="Slide" class="slider-img" />
                 </div>
                  <div class="indicators">
                    {#each sliderImages as _, j}
                      <!-- svelte-ignore a11y-click-events-have-key-events -->
                      <div class="indicator {j === currentIndex ? 'active' : ''}" on:click={() => currentIndex = j}></div>
                    {/each}
                  </div>
                {/if}
              </div>
            {/each}
            <div class="album-title bg-midnight-blue p-5">{selectedAlbumTitle}</div>
            
            <button on:click={prevSlide} disabled={currentIndex === 0} class="slider-btn prev-btn">
              <Icon src={ArrowLeftCircle} solid={true} class="h-10 w-[44px] fill-pewter-blue relative" />
            </button>
            <button on:click={nextSlide} disabled={currentIndex === sliderImages.length - 1} class="slider-btn next-btn">
              <Icon src={ArrowRightCircle} solid={true} class="h-10 w-[44px] fill-pewter-blue relative" />
            </button>
        </div>

        <div class="modal-overlay" on:click={closeModal}></div>
    </div>
{/if}


<style>
    .gallery-media-img {
        padding-bottom: 103%;
    }
    .view-all-wrapper {
        border-bottom: 1px solid white;
    }

    .slider {
      width: 80%;
      overflow: hidden;
      position: relative;
      z-index: 10;
    }
    .slider-img-wrapper {
        width: 100%;
        height: auto;
        position: relative;
    }
    .slider img.slider-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }  
    .album-title {
      /* position: absolute;
      bottom: 10px;
      left: 10px; */
      width: 100%;
      color: white;
      font-size: 18px;
    }
    .indicators {
      position: absolute;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      z-index: 1;
      background: var(--color-midnight-blue);
      margin: 0;
      bottom: 0px;
      right: 0;
      padding: 15px 30px;
    }
    .indicator {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: #d1d1d1;
      margin: 0 3px;
      cursor: pointer;
    }  
    .indicator.active {
      background-color: var(--color-pewter-blue);
      width: 41px;
      border-radius: 12px;
    }

    button.slider-btn {
        border-radius: 50%;
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    button.slider-btn::before {
        position: absolute;
        content: "";
        background-color: white;
        top: 12px;
        left: 12px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
    
    button.slider-btn.prev-btn {
        left: 0;
    }
    button.slider-btn.next-btn {
        right: 0;
    }
  
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;
      padding: 10px;
    }
    .modal-overlay {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.7);
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      cursor: pointer;
    }

    @media (max-width: 640px) {
      .slider {
        width: 100%;
      }
    }
</style>