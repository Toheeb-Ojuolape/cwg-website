<script>
	import ArrowRightLong from "$lib/components/Svgs/ArrowRightLong.svelte";

    let firstName = '';
    let lastName = '';
    let email = '';
    let phoneNumber = '';
    let subject = '';
    let message = '';
    let acknowledge = false;
</script>

<form action="#" id="contact-form">
    <div class="grid sm:grid-cols-2 gap-[20px] mb-5">
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
                Email <span class="text-red">*</span>
            </label>
        </div>
        <div class="form-group">
            <input type="tel" bind:value={phoneNumber} class="input-field text-midnight-blue dark:bg-black dark:text-white" required>
            <label for="phoneNumber" class="text-greyish-blue dark:text-white">
                Phone number <span class="text-red">*</span>
            </label>
        </div>
        <div class="form-group">
            <input type="text" bind:value={subject} class="input-field text-midnight-blue dark:bg-black dark:text-white" required>
            <label for="subject" class="text-greyish-blue dark:text-white">
                Subject <span class="text-red">*</span>
            </label>
        </div>
    </div>

    <div class="form-group textarea-wrapper">
        <div class="message-label mb-[10px]">Message</div>
        <textarea bind:value={message} rows="4" class="text-midnight-blue dark:bg-black dark:text-white" required></textarea>
    </div>

    <div class="form-group checkbox-group flex items-center gap-3 mt-[30px]">
        <input type="checkbox" bind:checked={acknowledge} required>
        <label for="acknowledge" class="text-midnight-blue dark:text-white relative">
            I acknowledge that I am applying for employment by CWG (the “Company”), and I hereby consent
            to the Company collecting, processing and using my personal information
        </label>
    </div>

    <button type="submit" class="flex gap-5 mt-15 text-bright-blue text-lg">
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
</style>