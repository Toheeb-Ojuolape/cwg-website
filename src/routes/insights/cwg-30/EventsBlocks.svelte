<script></script>

<div class="event-block relative px-[50px] pt-[10px] pb-[30px]">
    <div class="event-date text-[12px] mb-[15px]">September  10, 2022</div>
    <div class="event-title text-[24px] leading-[31px] pb-[45px]">Pitch for Transformation Challenge</div>

    <div class="event-link-wrapper flex justify-between text-[16px]">
        <a href="#!" class="text-bright-blue flex gap-[5px] items-center">
            <img src="/images/bright-blue-tv.svg" alt="icon">
            <span>Explore Community</span>
        </a>
        <a href="#!" download="" class="text-bright-blue flex gap-[5px] items-center">
            <img src="/images/bright-blue-download.svg" alt="icon">
            <span>Download Banner</span>
        </a>
    </div>
</div>

<div class="event-block relative px-[50px] pt-[10px] pb-[30px]">
    <div class="event-date text-[12px] mb-[15px]">September  12, 2022</div>
    <div class="event-title text-[24px] leading-[31px] pb-[45px]">Youth Bootcamp Enabling future shapers</div>

    <div class="event-link-wrapper flex justify-between text-[16px]">
        <a href="#!" class="text-bright-blue flex gap-[5px] items-center">
            <img src="/images/bright-blue-tv.svg" alt="icon">
            <span>Explore Community</span>
        </a>
        <a href="#!" download="" class="text-bright-blue flex gap-[5px] items-center">
            <img src="/images/bright-blue-download.svg" alt="icon">
            <span>Download Banner</span>
        </a>
    </div>
</div>

<div class="event-block relative px-[50px] pt-[10px] pb-[30px]">
    <div class="event-date text-[12px] mb-[15px]">September  12, 2022</div>
    <div class="event-title text-[24px] leading-[31px] pb-[45px]">Football Tournament</div>

    <div class="event-link-wrapper flex justify-between text-[16px]">
        <a href="#!" class="text-bright-blue flex gap-[5px] items-center">
            <img src="/images/bright-blue-tv.svg" alt="icon">
            <span>See Clips</span>
        </a>
        <a href="#!" download="" class="text-bright-blue flex gap-[5px] items-center">
            <img src="/images/bright-blue-download.svg" alt="icon">
            <span>Download Banner</span>
        </a>
    </div>
</div>

<div class="event-block relative px-[50px] pt-[10px] pb-[30px]">
    <div class="event-date text-[12px] mb-[15px]">September  16, 2022</div>
    <div class="event-title text-[24px] leading-[31px] pb-[45px]">Transform a School <br> Our CSR initiative</div>

    <div class="event-link-wrapper flex justify-between text-[16px]">
        <a href="#!" class="text-bright-blue flex gap-[5px] items-center">
            <img src="/images/bright-blue-tv.svg" alt="icon">
            <span>See Clips</span>
        </a>
        <a href="#!" download="" class="text-bright-blue flex gap-[5px] items-center">
            <img src="/images/bright-blue-download.svg" alt="icon">
            <span>Download Banner</span>
        </a>
    </div>
</div>

<div class="event-block relative px-[50px] pt-[10px] pb-[30px]">
    <div class="event-date text-[12px] mb-[15px]">September  16, 2022</div>
    <div class="event-title text-[24px] leading-[31px] pb-[45px]">The Texcellence Conference</div>

    <div class="event-link-wrapper flex justify-between text-[16px]">
        <a href="#!" class="text-bright-blue flex gap-[5px] items-center">
            <img src="/images/bright-blue-tv.svg" alt="icon">
            <span>Explore Community</span>
        </a>
        <a href="#!" download="" class="text-bright-blue flex gap-[5px] items-center">
            <img src="/images/bright-blue-download.svg" alt="icon">
            <span>Download Banner</span>
        </a>
    </div>
</div>

<style>
    .event-block {
        border-right: 1px solid #ddd;
    }
    .event-block:last-child {
        border: none;
    }
    .event-link-wrapper {
        position: absolute;
        bottom: 0;
        left: 50px;
        width: calc(100% - 100px);
    }
    .event-link-wrapper a {
        border-bottom: 1px solid currentColor;
        padding-bottom: 10px;
    }

    @media(min-width: 1024px) {
        .event-block:nth-child(3n) {
            border: none;
        }
        .event-block:nth-child(3n+1) {
            padding-left: 0;
        }
        .event-block:nth-child(3n+3) {
            padding-right: 0;
        }
        .event-block:nth-child(3n+1) .event-link-wrapper {
            left: 0;
            width: calc(100% - 50px);
        }
        .event-block:nth-child(n + 4) .event-date  {
            padding-top: 50px;
        }
    }

    @media(min-width: 640px) and (max-width: 1023px) {
        .event-block:nth-child(2n) {
            border: none;
        }
        .event-block:nth-child(2n+1) {
            padding-left: 0;
        }
        .event-block:nth-child(2n+2) {
            padding-right: 0;
        }
        .event-block:nth-child(2n+1) .event-link-wrapper {
            left: 0;
            width: calc(100% - 50px);
        }
        .event-block:nth-child(n + 3) .event-date  {
            padding-top: 50px;
        }
    }

    @media(max-width: 639px) {
        .event-block {
            border: none;
            padding-left: 0;
        }
        .event-block .event-link-wrapper {
            left: 0;
            width: 100%;
        }
        .event-block:not(:first-child) .event-date  {
            padding-top: 50px;
        }
    }
</style>