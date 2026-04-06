<template>
  <div class="events">
    <AppListing title="Мероприятия" class="events__listing">
      <EventCard
        v-for="card in list"
        :key="card.slug"
        :data="card"
        class="app-listing__card"
      />
    </AppListing>
  </div>
</template>

<script setup>
const list = ref([]);

  const URL = "http://localhost:3000/json/events.json";

  const { data } = await useAsyncData(`events`, () => {
    return $fetch(URL);
  });
  if (data?.value) list.value = data.value;
</script>

<style lang="less">
  .events {
    padding: 140px 0 100px;
    @media @bw1340 {
        padding: 90px 0 100px;
    }
    @media @bw768 {
        padding: 80px 0 100px;
    }
    &__listing {
        margin-bottom: 100px;
    }
    &__services {
        .container;
        margin-bottom: 50px;
        @media @bw1660 {
            margin-bottom: 40px;
        }
    }
    &__section-description {
        max-width: 870px;
        margin: 0 0 60px;
        font-size: 16px;
        line-height: 22px;
    }
    &__offers {
        margin-bottom: 100px;
        @media @bw768 {
            margin-bottom: 90px;
        }
    }
  }
</style>