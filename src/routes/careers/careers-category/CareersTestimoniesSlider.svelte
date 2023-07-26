<script>
    import '../careers-style.css'
	import { ArrowLeftCircle, ArrowRightCircle, Icon } from "svelte-hero-icons";

    let currentSlide = 0;
  
    const testimoniesSlides = [
      {
        imageSrc: '/images/testifier-1.jpg',
        testifierName: 'Seun Koshoedo',
        testifierRole: 'Senior Brand Strategist',
        testifierLocation: 'Lagos, Nigeria'
      },
      {
        imageSrc: '/images/testifier-1.jpg',
        testifierName: 'Vera Ebube',
        testifierRole: 'Head of Marketing',
        testifierLocation: 'Lagos, Nigeria'
      },
      {
        imageSrc: '/images/testifier-1.jpg',
        testifierName: 'Pamilerin Samuel',
        testifierRole: 'Staff',
        testifierLocation: 'Abuja, Nigeria'
      },
    ];
  
    /**
	 * @param {number} index
	 */
    function goToSlide(index) {
      currentSlide = index;
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % testimoniesSlides.length;
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + testimoniesSlides.length) % testimoniesSlides.length;
    }
  </script>
  
  
  <div class="slider">
    {#each testimoniesSlides as testimonies, index}
        <div class="flex flex-col lg:flex-row gap-[20px] text-white slide {index === currentSlide ? 'active' : ''}">
            <div class="testimony-details-side w-[340px] text-[14px]">
                <div class="testifier-img-wrapper mb-[12px]">
                    <img src={testimonies.imageSrc} alt={testimonies.testifierName} class="testifier-img">
                </div>
                <div class="testifier-name text-[24px] text-pewter-blue">{testimonies.testifierName}</div>
                <div class="testifier-role">{testimonies.testifierRole}</div>
                <div class="testifier-location">{testimonies.testifierLocation}</div>
            </div>
            <div class="testimony-txt-side flex-1 relative">
                <img src="/images/quote.svg" alt="quote" class="quote-icon">
                <div class="testimony-txt pl-[20px] lg:pl-[120px] pt-[10px] sm:text-[18px]">
                    <p class="py-3">
                        Every day, I have the privilege of working with brilliant, driven, and supportive colleagues
                        who genuinely care about each other's well-being, success, and growth.
                    </p>
                    <p class="py-3">
                        With CWG's robust programs in managerial support, mentorship, and career development, I have
                        been able to explore my interests, enhance my skills, and create a career path that truly
                        excites me.
                    </p>
                </div>
            </div>
        </div>
    {/each}
  </div>

  <div class="indicators">
    {#each testimoniesSlides as _, index}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span
        class="indicator {index === currentSlide ? 'active' : ''}" on:click={() => goToSlide(index)}></span>
    {/each}
  </div>
  
  <button on:click={prevSlide} disabled={currentSlide === 0} class="slider-btn prev-btn">
    <Icon src={ArrowLeftCircle} solid={true} class="h-10 w-[44px] fill-pewter-blue" />
  </button>
  <button on:click={nextSlide} disabled={currentSlide === testimoniesSlides.length - 1} class="slider-btn next-btn">
    <Icon src={ArrowRightCircle} solid={true} class="h-10 w-[44px] fill-pewter-blue" />
  </button>
   
  <style>
    .slider {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 85%;
      margin: 0 auto;
      overflow: hidden;
    }
  
    .slide {
      position: absolute;
      right: -200%;
      transition: right 1s linear;
    }
  
    .slide.active {
        position: relative;
        right: 0;
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
  
    .indicators {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      margin-top: 20px;
    }
  
    .indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #fff;
      margin: 0 3px;
      cursor: pointer;
    }
  
    .indicator.active {
      background-color: var(--color-pewter-blue);
      width: 20px;
      border-radius: 6px;
    }

    @media(max-width: 1024px) {
        .testimony-details-side {
            margin: auto;
        }
        .slide {
            opacity: 0;
        }
    
        .slide.active {
            opacity: 1;
        }
    }

    @media(max-width: 768px) {
        .testimony-details-side {
            text-align: center;
        }
    }
  </style>