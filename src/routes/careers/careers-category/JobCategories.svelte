<div class="select-locations-wrapper mb-[50px]">
    <div class="mb-[12px] text-[16px]">Select location</div>
    <div>
        <select name="select_location" id="select_location" class="dark:bg-black">
            <option value="Nigeria">Nigeria</option>
            <option value="Ghana">Ghana</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Uganda">Uganda</option>
        </select>
    </div>
</div>

<div class="grid sm:grid-cols-2 gap-[60px] sm:gap-[30px] lg:gap-[60px]">
    <div class="departments-side">
        <div class="category-title text-[10px] mb-[20px]">DEPARTMENTS</div>

        <ul class="department-categories grid gap-[20px] text-[15px]">
            <li class="active">
                <span>All Departments (16)</span>
            </li>
            <li>
                <span>Software Engineering (2)</span>
            </li>
            <li>
                <span>Analytics (4)</span>
            </li>
            <li>
                <span>Project & Program Management (1)</span>
            </li>
            <li>
                <span>Sales (0)</span>
            </li>
            <li>
                <span>Finance (0)</span>
            </li>
            <li>
                <span>Legal & Compliance (1)</span>
            </li>
            <li>
                <span>Consulting (1)</span>
            </li>
            <li>
                <span>Customer Success (0)</span>
            </li>
            <li>
                <span>Cyber & Corporate Security (0)</span>
            </li>
            <li>
                <span>Design (1)</span>
            </li>
            <li>
                <span>Human Resources (2)</span>
            </li>
            <li>
                <span>IT (4)</span>
            </li>
            <li>
                <span>Product Management (0)</span>
            </li>
            <li>
                <span>Others (0)</span>
            </li>
        </ul>
    </div>

    <div class="roles-side">
        <div class="category-title text-[10px] mb-[20px]">FEATURED ROLES</div>

        <ul class="department-roles grid gap-[20px]">
            <li>
                <a href="/careers/single-role" class="flex justify-between items-center">
                    <div class="role-details">
                        <div class="role-title text-greyish-blue">Staff Software Engineer</div>
                        <div class="role-location text-[15px]">Nigeria</div>
                    </div>
                    <img src="/images/right-caret.svg" alt="right-caret" class="right-caret">
                </a>
            </li>
            <li>
                <a href="/careers/single-role" class="flex justify-between items-center">
                    <div class="role-details">
                        <div class="role-title text-greyish-blue">QA Audit Analyst</div>
                        <div class="role-location text-[15px]">Cameroon</div>
                    </div>
                    <img src="/images/right-caret.svg" alt="right-caret" class="right-caret">
                </a>
            </li>
            <li>
                <a href="/careers/single-role" class="flex justify-between items-center">
                    <div class="role-details">
                        <div class="role-title text-greyish-blue">Partner Relationship Manager</div>
                        <div class="role-location text-[15px]">Nigeria</div>
                    </div>
                    <img src="/images/right-caret.svg" alt="right-caret" class="right-caret">
                </a>
            </li>
            <li>
                <a href="/careers/single-role" class="flex justify-between items-center">
                    <div class="role-details">
                        <div class="role-title text-greyish-blue">Program Manager</div>
                        <div class="role-location text-[15px]">Nigeria</div>
                    </div>
                    <img src="/images/right-caret.svg" alt="right-caret" class="right-caret">
                </a>
            </li>
            <li>
                <a href="/careers/single-role" class="flex justify-between items-center">
                    <div class="role-details">
                        <div class="role-title text-greyish-blue">Product designer</div>
                        <div class="role-location text-[15px]">Uganda</div>
                    </div>
                    <img src="/images/right-caret.svg" alt="right-caret" class="right-caret">
                </a>
            </li>
            <li>
                <a href="/careers/single-role" class="flex justify-between items-center">
                    <div class="role-details">
                        <div class="role-title text-greyish-blue">Senior Legal Officer</div>
                        <div class="role-location text-[15px]">Nigeria</div>
                    </div>
                    <img src="/images/right-caret.svg" alt="right-caret" class="right-caret">
                </a>
            </li>
            <li>
                <a href="/careers/single-role" class="flex justify-between items-center">
                    <div class="role-details">
                        <div class="role-title text-greyish-blue">Cloud & Software Engineer</div>
                        <div class="role-location text-[15px]">Nigeria</div>
                    </div>
                    <img src="/images/right-caret.svg" alt="right-caret" class="right-caret">
                </a>
            </li>
            <li>
                <a href="/careers/single-role" class="flex justify-between items-center">
                    <div class="role-details">
                        <div class="role-title text-greyish-blue">Compliance & Risk Manager</div>
                        <div class="role-location text-[15px]">Ghana</div>
                    </div>
                    <img src="/images/right-caret.svg" alt="right-caret" class="right-caret">
                </a>
            </li>
        </ul>
    </div>
</div>

<style>
    .departments-side {
        border-right: 1px solid #dddddd;
        padding-right: 30px;
    }
    .department-categories .active {
        color: var(--color-greyish-blue);
    }
    .department-categories li span:hover {
        cursor: pointer;
        font-weight: bold;
    }
    .role-title {
        font-size: 24px;
    }
    select#select_location {
        border: 1px solid var(--secondary-color-deep-blue, #0D2C65);
        height: 40px;
        width: 215px;
        padding: 0 5px;
        cursor: pointer;
    }

    @media(max-width: 640px) {
        .departments-side {
            border-right: none;
            padding-right: 0;
        }
    }
</style>