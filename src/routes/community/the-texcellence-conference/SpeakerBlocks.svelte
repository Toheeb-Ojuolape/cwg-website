<script>
    let speakers = [
      {
        pictureUrl: '/images/yet-to-be-confirmed.jpg',
        speakerName: 'Dr. Ngozi Okonjo-Iweala',
        speakerJob: 'Director-General of the World Trade Organization',
      },
      {
        pictureUrl: '/images/yet-to-be-confirmed.jpg',
        speakerName: 'Dr. Akinwumi Adesina',
        speakerJob: 'President of the African Development Bank',
      },
      {
        pictureUrl: '/images/yet-to-be-confirmed.jpg',
        speakerName: 'Mr. Bill Gates',
        speakerJob: 'Co-chair of the Bill and Melinda Gates Foundation',
      },
      {
        pictureUrl: '/images/yet-to-be-confirmed.jpg',
        speakerName: 'Mr. Mark Zuckerberg',
        speakerJob: 'CEO of Facebook',
      },
      {
        pictureUrl: '/images/yet-to-be-confirmed.jpg',
        speakerName: 'Ms. Funke Opeke',
        speakerJob: 'CEO of MainOne Cable Company',
      },
      {
        pictureUrl: '/images/yet-to-be-confirmed.jpg',
        speakerName: 'Ms. Abimbola Alale',
        speakerJob: 'CEO of Nigerian Communications Satellite Limited',
      },
      {
        pictureUrl: '/images/yet-to-be-confirmed.jpg',
        speakerName: 'Dr. Andrew S. Nevin',
        speakerJob: 'Partner and Chief Economist at PwC Nigeria',
      },
      {
        pictureUrl: '/images/yet-to-be-confirmed.jpg',
        speakerName: 'Mr. Strive Masiyiwa',
        speakerJob: 'Founder and Executive Chairman of Econet Wireless',
      },
    ];
</script>

{#each speakers as speaker}
    <div class="texellence-speaker-block">
        <div class="speaker-img-wrapper bg-midnight-blue">
            <img src={speaker.pictureUrl} alt="speaker" class="speaker-img bg-img">
        </div>
        <div class="speaker-details bg-burlywood text-white p-[20px]">
            <div class="speaker-name">{speaker.speakerName}</div>
            <div class="speaker-job">{speaker.speakerJob}</div>
        </div>
    </div>
{/each}

<style>
    .speaker-img-wrapper{
        width: 100%;
        position: relative;
        padding-top: 91%;
    }
    .speaker-name {
        font-size: 18px;
        padding-bottom: 5px;
    }
    .speaker-job {
        font-size: 12px;
    }
</style>