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
  .container;
    display: flex;
    flex-direction: column;

    &__article-list {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -30px -120px;
      @media @bw1660 {
        margin: 0 -20px -100px;
      }
      @media @bw1340 {
        margin: 0 -15px -100px;
      }
      @media @bw1020 {
        justify-content: center;
        margin: 0 -15px -80px;
      }
      @media @bw768 {
        margin: 0 -10px -80px;
      }
      @media @bw650 {
        margin: 0 0 -60px;
      }
    }
    &__card {
      width: calc(33.3333% - 60px); 
      margin: 0 30px 120px;
      @media @bw1660 {
        width: calc(33.3333% - 48px);
        margin: 0 20px 100px;
      }
      @media @bw1340 {
        width: calc(33.3333% - 30px); 
        margin: 0 15px 100px;
      }
      @media @bw1020 {
        width: calc(50% - 30px); 
        max-width: 405px;
        margin: 0 15px 80px;
      }
    }
    &__more-btn {
      align-self: center;
      margin-top: 120px;
    }
}
</style>