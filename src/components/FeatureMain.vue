<script setup>
import FeatureSlot from './FeatureSlot.vue';



</script>

<template>
    <main class="h-[3320.18px] ">
        <!-- Description -->
        <p class="pt-[209px] font-semibold text-[64px] leading-[115.99999999999999%] text-[#272727] ml-[93px]">
            Features That Redefine<br>
            <span class="text-[85px] text-[#469AF0]">
                Queue Management
            </span>
        </p>
        <!-- Main Content -->
        <div class="h-[3419.18px] ml-[93px] mr-[120px] mt-[95px] pt-10 space-y-30  ">

            <FeatureSlot
             title="The QUEWIE Features"
             highlight="Real-Time Queue Management"
             description="Track, manage, and update queues instantly. Customers can book their spot and get notified in real-time, ensuring smoother flow and less waiting frustration."
             linkText="Learn More"
             image="/images/feature.png">
            </FeatureSlot>

            <FeatureSlot 
            title="The QUEWIE Features" 
            highlight=" Smart Analytics &  Reporting"
            description="Gain insights into service performance with detailed analytics. Identify peak hours, reduce bottlenecks, and optimize staffing for maximum efficiency."
            linkText="Learn More" 
            image="/images/learnmore.jpg">
            </FeatureSlot>

            <FeatureSlot 
            title="The QUEWIE Features" 
            highlight=" Multi-Channel Access"
            description="Accessible via kiosks, mobile apps, and QR codes, QUEWIE makes queueing simple for everyone—whether on-site or online."
            linkText="Learn More" 
            image="/images/learnmore.jpg">
            </FeatureSlot>

            <FeatureSlot 
            title="The QUEWIE Features" 
            highlight=" Customer Engagement Tools"
            description="Send updates, alerts, and notifications to keep customers informed. Build stronger relationships through transparent and stress-free interactions."
            linkText="Learn More" 
            image="/images/learnmore.jpg">
            </FeatureSlot>

            <FeatureSlot 
            title="The QUEWIE Features" 
            highlight=" Industry-Ready Solutions"
            description="From government offices and hospitals to banks, schools, and entertainment venues, QUEWIE adapts to the unique needs of multiple industries."
            linkText="Learn More" 
            image="/images/learnmore.jpg">
            </FeatureSlot>

            <FeatureSlot 
            title="The QUEWIE Features" 
            highlight=" Secure & Scalable Platform"
            description="Cloud-based, highly scalable, and secure—QUEWIE grows with your business while protecting sensitive data."
            linkText="Learn More" 
            image="/images/learnmore.jpg">
            </FeatureSlot>

        </div>




    </main>
</template>