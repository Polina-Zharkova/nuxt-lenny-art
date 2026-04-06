<template>
  <section class="app-listing">
    <h1 class="app-listing__title section-title">{{ title }}</h1>

    <div class="app-listing__list">
      <slot />
    </div>

    <button type="button" class="more-btn app-listing__more-btn">
      Показать всё

      <SvgIcon
        class="more-btn__arrow"
        name="arrow_down"
        width="62"
        height="92"
      />
    </button>
  </section>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: "",
    },
  });
</script>

<style lang="less">
.app-listing {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-left: 40px;
    padding-right: 40px;
    width: 100%;
    max-width: 1414px;
    .container();
    
    &__events-list {
    display: flex;
    flex-wrap: wrap;
    gap: 120px 58px;
    margin: 0 -29px -120px;
    @media @bw1660 {
      gap: 90px 40px;
    }
    @media @bw1020 {
      gap: 90px 30px; 
    }
    @media @bw650 {
      gap: 60px 0;
      justify-content: center;
    }

&__event-card {
   width: calc(33.3333% - 38.666px); 
   margin: 0 29px 120px;
   @media @bw1660 {
      width: calc(33.3333% - 26.666px);
      }
    @media @bw1020 {
        width: calc(50% - 15px);
      }
    @media @bw650 {
      max-width: 450px;
      width: 100%;
    }
  }
}
}
</style>