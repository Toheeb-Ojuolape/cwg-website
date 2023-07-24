<script>
    import './awards-styles.css'
    
    let isButtonVisible = true;

    function addShowClass() {
        const sharedElements = document.querySelectorAll('.award-block');
        sharedElements.forEach((element) => {
            element.classList.add('show-awards');
        });
        
        isButtonVisible = false;
    }
</script>

<div class="pb-10 grid sm:grid-cols-3 lg:grid-cols-4">
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-1.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">FEBP (Geneva)</div>
        <div class="award-desc">
            Gold Medal for Excellence in Business Practices
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-2.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Dell Computers</div>
        <div class="award-desc">
            Award for the Fastest Growing Company in EMEA, CWL
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-3.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Nigeria Computer Society</div>
        <div class="award-desc">
            Nigeria Computer Society Award to CWG in recognition of the company’s attainment of 
            NIS ISO 9001:2000 certification, CWG
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-4.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Wincor Nixdorf</div>
        <div class="award-desc">
            Best Absolute Achievement Award in P & MEA
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-5.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Infosys Technologies</div>
        <div class="award-desc">
            Excellence Award for Infrastructure & Resources, 2003, ExpertEdge
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-6.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">IT & Telecoms Digest Magazine</div>
        <div class="award-desc">
            Indigenous Software of the year 2003 to ExpertEdge for her XpertOnline Application
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-6.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Sun Microsystems (Oracle)</div>
        <div class="award-desc">
            CWG Wins Best Marketing Partner for 2003
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-3.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Sun Microsystems (Oracle)</div>
        <div class="award-desc">
            CWL wins Technology Support Company of the Year 2019
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-7.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Bottomline Magazine</div>
        <div class="award-desc">
            IT Company of the Year 2003, CWG
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-4.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Communications week</div>
        <div class="award-desc">
            Top Achiever and Most Successful Partner of the 2004 Fiscal Year, CWL
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-4.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Oracle Corporation</div>
        <div class="award-desc">
            Award for Marketing Excellence 2004, ExpertEdge
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-7.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Nigeria Telecoms Awards</div>
        <div class="award-desc">
            Best VSAT Operator in 2004, DCC
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-1.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Intelsat</div>
        <div class="award-desc">
            Company with the Highest Sustained Growth 2005, DCC
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-1.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Infosys Technologies</div>
        <div class="award-desc">
            Most Valued Partner Of The Year, 2005, ExpertEdge
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-6.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Wincor Nixdorf</div>
        <div class="award-desc">
            Best Newcomer 2006/2007, CWL
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-3.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Oracle</div>
        <div class="award-desc">
            Oracle Partner Network Award for Business Excellence 2006, ExpertEdge
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-7.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Infosys Technologies</div>
        <div class="award-desc">
            Infosys Sales Partner of the year 2006, ExpertEdge
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-3.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Infosys Technologies</div>
        <div class="award-desc">
            Infosys Value Partner of the year 2006, ExpertEdge
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-2.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Gilat Satellite & Networks</div>
        <div class="award-desc">
            Gold Partner Award 2006, DCC
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-8.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Gilat Satellite & Networks</div>
        <div class="award-desc">
            Sales & Marketing Award, 2006
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-8.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Gilat Satellite & Networks</div>
        <div class="award-desc">
            Technical Excellence Award 2006
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-3.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">IT & Telecoms Digest Magazine</div>
        <div class="award-desc">
            Infosys Value Partner of the year 2006, ExpertEdge
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-7.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Titans of Tech</div>
        <div class="award-desc">
            Titans of Tech Best VSAT Company of the year 2007, DCC
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-5.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Titans of Tech</div>
        <div class="award-desc">
            Titans of Tech Total solutions company of the year 2007, CWG
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-4.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Wincor Nixdorf</div>
        <div class="award-desc">
            Best Steal Deal of the year 2008, CWL
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-8.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">WAIDA</div>
        <div class="award-desc">
            Software Company of the year, 2009, Expert Edge
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-4.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Communications week</div>
        <div class="award-desc">
            ICT Solution provider of the year, 2009
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-8.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">AISMA</div>
        <div class="award-desc">
            CWG Wins Best IT Company of the Decade, 2009
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-3.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Sun Microsystems (Oracle)</div>
        <div class="award-desc">
            CWL Wins Best Systems Partner of the year 2009
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-7.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Sun Microsystems (Oracle)</div>
        <div class="award-desc">
            CWL Wins Best Overall Partner of the year in the region (Sub Saharan Africa) 2009
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-3.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Sun Microsystems (Oracle)</div>
        <div class="award-desc">
            CWL Wins Best Storage Partner of the Year 2009
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-8.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Sun Microsystems (Oracle)</div>
        <div class="award-desc">
            Software Company of the year, 2009, Expert Edge
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-7.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Financial Technology</div>
        <div class="award-desc">
            Africa’s Most Admired Company in Financial Service Technology, 2010, DCC
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-3.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Technology Africa</div>
        <div class="award-desc">
            Best Banking Software Company of the year, 2010, ExpertEdge
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-6.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Technology Africa</div>
        <div class="award-desc">
            Communications Company Of the Year, 2010, DCC
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-3.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Department of Computer Science and Engineering, Obafemi Awolowo University Ile -Ife</div>
        <div class="award-desc">
            Award of Excellence, 2010, CWG
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-6.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">EION Wireless</div>
        <div class="award-desc">
            African Best System Integration Partner of the year, 2010, DCC
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-3.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">ICT Watch Africa Digital</div>
        <div class="award-desc">
            Most Outstanding ICT Conglomerate of the Decade, 2010
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-1.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">ICT Watch Africa Digital</div>
        <div class="award-desc">
            Most Outstanding Corporate VPN of the Decade, 2010, DCC
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-1.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">ICT Watch Africa Digital</div>
        <div class="award-desc">
            Most Outstanding IT Support Services of the Decade, 2010, ExpertEdge
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-5.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Oracle Partner Network</div>
        <div class="award-desc">
            Industry Partner Of The Year, 2011
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-6.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">ICT Publishers Alliance</div>
        <div class="award-desc">
            African ICT Conglomerate of the Decade, 2011
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-1.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">CSR Nigeria</div>
        <div class="award-desc">
            Best ICT Company In CSR, 2011
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-3.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">CISCO</div>
        <div class="award-desc">
            Nigerian Partner of the year, 2011 , DCC
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-4.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">CISCO</div>
        <div class="award-desc">
            DCC wins Transformational Commercial Partner Of The Year, 2012
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-6.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">The Nigerian Financial Technology Awards, 2012</div>
        <div class="award-desc">
            CWG Wins Outstanding Core Banking Application (Finacle)
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-5.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">ICT Watch Africa Digital Network</div>
        <div class="award-desc">
            Austin Okere wins ICT Man of the Decade, 2012
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-6.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">ICT Watch Africa Digital Network</div>
        <div class="award-desc">
            CWG wins ICT Conglomerate of the Year, 2012
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-8.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Africa Information Society Merit Award (AISMA)</div>
        <div class="award-desc">
            Best Pan Africa IT utility Company, 2012, CWG
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-8.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">CSR Nigeria</div>
        <div class="award-desc">
            Outstanding Achievements in CSR – ICT Company, 2012, CWG
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-8.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Nigeria Communications Week</div>
        <div class="award-desc">
            ICT Solutions Provider of the year, 2012, CWG
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-8.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Technology Africa</div>
        <div class="award-desc">
            ICT Company of the year, 2012
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-4.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Technology Africa</div>
        <div class="award-desc">
            ICT Personality of the year, 2012, Austin Okere
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-7.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">IT Edge</div>
        <div class="award-desc">
            Top 50 Technology Business Companies in West Africa, 2012
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-8.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">VMware</div>
        <div class="award-desc">
            Renewals Partner of the year (WECA), 2013/14
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-8.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">VMware</div>
        <div class="award-desc">
            Solution Provider of the year (WECA), 2013/14
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-8.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Ernst and Young</div>
        <div class="award-desc">
            Finalist in the Master Entrepreneur Category of the EY (Ernst & Young) Entrepreneur of
            the year. Certificate Of Achievement, 2013. Austin Okere
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-4.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Nigeria Computer Society</div>
        <div class="award-desc">
            National Information Technology Merit Award, 2013. Austin Okere
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-5.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">ICT Watch Africa Digital Network</div>
        <div class="award-desc">
            Hall Of Fame Award, 2013. Austin Okere
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-7.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Data GroupIT</div>
        <div class="award-desc">
            Best Contributing Partner Of The Year, 2013
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-4.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">CSR Nigeria</div>
        <div class="award-desc">
            Best Corporate Stewardship Award, 2013
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-1.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">U.S. Commercial Service</div>
        <div class="award-desc">
            CWG wins U.S. Commercial Service Partner Award, 2013
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-3.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Communications Week</div>
        <div class="award-desc">
            CWG wins ICT Solutions Provider Of The Year, 2013
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-7.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Technology Africa</div>
        <div class="award-desc">
            Financial Sector Technology Solutions Provider Of The Year, 2013, ExpertEdge
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-3.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">CISCO</div>
        <div class="award-desc">
            DCC wins Cisco Gold Certified Partner in West Africa, 2013
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-7.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Fidelity Bank</div>
        <div class="award-desc">
            Distinguished SME Partner Award, 2014, Austin Okere
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-8.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">IIM</div>
        <div class="award-desc">
            IIM Special Award for Public/Private Sector 2014
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-8.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">IIM</div>
        <div class="award-desc">
            Information Management Personality of the year 2014
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-5.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Centre for Values in Leadership (CVL)</div>
        <div class="award-desc">
            Certificate of Honour as a Technology Entrepreneur in Nigeria’s ICT Sector, 2014
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-6.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">World Economic Forum</div>
        <div class="award-desc">
            Global Growth Company, 2014
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-1.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Nigeria Communications Week</div>
        <div class="award-desc">
            ICT Man of the Year 2014, Austin Okere
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-1.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Nigeria Communications Week</div>
        <div class="award-desc">
            ICT Infrastructure Provider of the year, 2014
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-3.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">Nigeria Communications Week</div>
        <div class="award-desc">
            E-Commerce Platform of the year, 2015
        </div>
    </div>
    <div class="award-block">
        <div class="award-img-wrapper">
            <img src="/images/awards-images/award-6.jpg" alt="award" class="bg-img">
        </div>
        <div class="award-title">NiTA</div>
        <div class="award-desc">
            CWG wins Technology Support Company of the Year 2019
        </div>
    </div>
</div>

{#if isButtonVisible}
    <button on:click={addShowClass}  class="show-awards-trigger-wrapper flex gap-2 justify-center items-center text-bright-blue cursor-pointer mx-auto my-10">
        <span>View 52 more </span>
        <img src="/images/bright-blue-caret.svg" alt="bright-blue-caret">
    </button>
{/if}