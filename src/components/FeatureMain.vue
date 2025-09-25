<script setup>
import FeatureSlot from './FeatureSlot.vue'
</script>

<template>
  <main class="w-full mt-13 bg-white py-16 sm:py-20 lg:py-28">
    <!-- Section Title -->
    <p
      class="px-4 sm:px-8 lg:px-20 font-semibold text-3xl sm:text-5xl lg:text-[64px] leading-tight text-[#272727]"
    >
      Features That Redefine<br />
      <span
        class="block text-4xl sm:text-6xl lg:text-[85px] text-[#469AF0] mt-2"
      >
        Queue Management
      </span>
    </p>

    <!-- Main Content -->
    <div
      class="mt-12 sm:mt-16 lg:mt-24 px-4 sm:px-8 lg:px-20 space-y-12 sm:space-y-16 lg:space-y-24"
    >
      <FeatureSlot
        title="The QUEWIE Features"
        highlight="Real-Time Queue Management"
        description="Track, manage, and update queues instantly. Customers can book their spot and get notified in real-time, ensuring smoother flow and less waiting frustration."
        linkText="Learn More"
        image="/images/feature.png"
      />

      <FeatureSlot
        title="The QUEWIE Features"
        highlight="Smart Analytics & Reporting"
        description="Gain insights into service performance with detailed analytics. Identify peak hours, reduce bottlenecks, and optimize staffing for maximum efficiency."
        linkText="Learn More"
        image="/images/learnmore.jpg"
      />

      <FeatureSlot
        title="The QUEWIE Features"
        highlight="Multi-Channel Access"
        description="Accessible via kiosks, mobile apps, and QR codes, QUEWIE makes queueing simple for everyone—whether on-site or online."
        linkText="Learn More"
        image="/images/learnmore.jpg"
      />

      <FeatureSlot
        title="The QUEWIE Features"
        highlight="Customer Engagement Tools"
        description="Send updates, alerts, and notifications to keep customers informed. Build stronger relationships through transparent and stress-free interactions."
        linkText="Learn More"
        image="/images/learnmore.jpg"
      />

      <FeatureSlot
        title="The QUEWIE Features"
        highlight="Industry-Ready Solutions"
        description="From government offices and hospitals to banks, schools, and entertainment venues, QUEWIE adapts to the unique needs of multiple industries."
        linkText="Learn More"
        image="/images/learnmore.jpg"
      />

      <FeatureSlot
        title="The QUEWIE Features"
        highlight="Secure & Scalable Platform"
        description="Cloud-based, highly scalable, and secure—QUEWIE grows with your business while protecting sensitive data."
        linkText="Learn More"
        image="/images/learnmore.jpg"
      />
    </div>
  </main>
</template>
