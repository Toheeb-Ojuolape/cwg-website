<script lang="ts">
    // @ts-nocheck
    import ArrowRightLong from "$lib/components/Svgs/ArrowRightLong.svelte";

    let firstName = '';
    let lastName = '';
    let email = '';
    let phoneNumber = '';
    let location = '';
    let cvFile;
    let cvFileName;
    let coverLetterFile;
    let coverLetterFileName;
    let linkedinURL = '';
    let applicationReason = '';
    let gender = '';
    let visaSponsorship = '';
    let acknowledge = false;

    function handleCVFileChange(event) {
        const fileInput = event.target as HTMLInputElement;
        cvFile = fileInput.files[0];
        cvFileName = cvFile ? cvFile.name : '';
    }

    function handleCoverLetterFileChange(event) {
        const fileInput = event.target as HTMLInputElement;
        coverLetterFile = fileInput.files[0];
        coverLetterFileName = coverLetterFile ? coverLetterFile.name : '';
    }
</script>

<form action="#" class="max-w-[460px] grid gap-[25px] my-7">
    <div class="form-group">
        <input type="text" bind:value={firstName} class="input-field text-midnight-blue dark:bg-black dark:text-white" required>
        <label for="firstName" class="text-greyish-blue dark:text-white">
            First name <span class="text-red">*</span>
        </label>
    </div>
    <div class="form-group">
        <input type="text" bind:value={lastName} class="input-field text-midnight-blue dark:bg-black dark:text-white" required>
        <label for="lastName" class="text-greyish-blue dark:text-white">
            Last name <span class="text-red">*</span>
        </label>
    </div>
    <div class="form-group">
        <input type="email" bind:value={email} class="input-field text-midnight-blue dark:bg-black dark:text-white" required>
        <label for="email" class="text-greyish-blue dark:text-white">
            Email address <span class="text-red">*</span>
        </label>
    </div>
    <div class="form-group">
        <input type="tel" bind:value={phoneNumber} class="input-field text-midnight-blue dark:bg-black dark:text-white" required>
        <label for="phoneNumber" class="text-greyish-blue dark:text-white">
            Phone number <span class="text-red">*</span>
        </label>
    </div>
    <div class="form-group">
        <input type="text" bind:value={location} class="input-field text-midnight-blue dark:bg-black dark:text-white" required>
        <label for="location" class="text-greyish-blue dark:text-white">
            Location (City) <span class="text-red">*</span>
        </label>
    </div>
    <div class="form-group relative file-upload-field">
        <input type="file" on:change={handleCVFileChange}>
        <input type="text" bind:value={cvFileName} class="input-field text-midnight-blue dark:bg-black dark:text-white" required>
        <label for="cvFile" class="text-greyish-blue dark:text-white">
            Resume/CV <span class="text-red">*</span> ( pdf, doc, docx, txt, rtf - 5mb max) 
        </label>
    </div>
    <div class="form-group relative file-upload-field">
        <input type="file" on:change={handleCoverLetterFileChange}>
        <input type="text" bind:value={coverLetterFileName} class="input-field text-midnight-blue dark:bg-black dark:text-white" required>
        <label for="coverLetterFile" class="text-greyish-blue dark:text-white">
            Cover letter (pdf, doc, docx, txt, rtf - 5mb max) <span class="text-red">*</span>
        </label>
    </div>

    <hr class="gray-line mt-4 mb-8" />

    <div class="form-group">
        <input type="url" bind:value={linkedinURL} class="input-field text-midnight-blue dark:bg-black dark:text-white" required>
        <label for="linkedinURL" class="text-greyish-blue dark:text-white">
            LinkedIn Profile <span class="text-red">*</span>
        </label>
    </div>

    <div class="form-group textarea-wrapper">
        <div class="message-label mb-[10px]">Why have you chosen to apply to CWG? <span class="text-red">*</span></div>
        <textarea bind:value={applicationReason} rows="4" class="text-midnight-blue dark:bg-black dark:text-white" required></textarea>
    </div>

    <div class="form-group select-wrapper">
        <div class="message-label mb-[10px]">
            Would you require visa sponsorship to work in the country in which this position is based?
            <span class="text-red">*</span>
        </div>
        <select bind:value={visaSponsorship} required>
            <option value="">Please select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>
    </div>

    <div class="form-group select-wrapper">
        <div class="message-label mb-[10px]">
            Gender <span class="text-red">*</span>
            <div class="text-[12px]">
                I consent to the collection, use and disclosure of personal data relating to my gender by
                CWG in order for CWG to measure its efforts to create a diverse workplace. I understand that
                it is entirely voluntary for me to provide this information, and declining to provide CWG with
                consent to collect this information will not subject me to adverse treatment. I further
                understand that all individuals seeking employment or secondment at CWG are considered based
                on individual merit, without regard to such information; that this data will not be shared with
                any personnel who can influence the hiring process; and that I am being given the opportunity
                to provide such information in order to help CWG measure CWG's own diversity and inclusion efforts
            </div>
        </div>
        <select bind:value={gender} required>
            <option value="">Please select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
    </div>

    <div class="form-group checkbox-group flex items-start gap-3 mt-[30px]">
        <input type="checkbox" bind:checked={acknowledge} required>
        <label for="acknowledge" class="text-midnight-blue dark:text-white relative">
            I acknowledge that I am applying for employment by CWG (the “Company”), and I hereby consent to
            the Company collecting, processing and using my personal information
        </label>
    </div>

    <button type="submit" class="flex gap-5 mt-10 mb-5 text-bright-blue text-lg">
        <span>Submit now</span> 
        <div class="arrow-right">
            <ArrowRightLong strokeClassName="stroke-bright-blue" />
        </div>
    </button>
</form>

<style>
    .form-group {
        position: relative;
        margin-bottom: 10px;
    }
    .text-red {
        color: red;
    }
    label:not(.relative) {
        position: absolute;
        top: 15px;
        left: 15px;
        transition: all 0.2s ease;
        pointer-events: none;
    }
    input.input-field {
        width: 100%;
        height: 57px;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 10px;
        outline: none;
    }
    input.input-field:focus ~ label,
    input.input-field:valid ~ label {
        top: -18px;
        left: 12px;
        font-size: 12px;
    }
    textarea {
        width: 100%;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
        outline: none;
        resize: vertical;
    }
    input[type="checkbox"] {
        cursor: pointer;
        width: 24px;
        height: 24px;
    }

    input[type=file] {
        position: absolute;
        background: red;
        height: 100%;
        width: 100%;
        cursor: pointer;
        opacity: 0;
    }
    select {
        border-radius: 10px;
        border: 1px solid #ddd;
        height: 57px;
        width: 230px;
        margin-top: 20px;
        padding: 0 15px;
        outline: none;
        cursor: pointer;
        appearance: none;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 1rem center;
        background-size: 1em;
        color: var(--color-midnight-blue);
    }
</style>