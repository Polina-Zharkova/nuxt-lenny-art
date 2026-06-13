<template>
  <div class="events">
    <div class="events__breadcrumbs">
    <NuxtLink to="/" class="events__link">Главная</NuxtLink>
    <span class="events__separator">/</span>
    <span class="events__current">Мероприятия</span>
  </div>

    <AppListing 
    v-slot="{ list }" 
    title="Мероприятия" 
    class="events__listing"
    :moreBtn="true"
    :url="'http://localhost:3000/json/events.json'"
    >
      <EventCard
        v-for="card in list"
        :key="card.slug"
        :data="card"
        class="app-listing__card"
      />
    </AppListing>

    <AppServices class="events__services"/>

    <AppOffers class="events__offers"/>

  </div>
</template>

<script setup></script>

<style lang="less">
  .events {
    padding: 90px 0 100px;
    @media @bw1340 {
        padding: 90px 0 100px;
    }
    @media @bw768 {
        padding: 80px 0 100px;
    }
    &__breadcrumbs {
      .container;
      font-family: @font1;
      font-size: 16px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      margin-top: -160px;
      color: @black;
      text-decoration: none;
    }
      &__link {
        font-family: @font1;
        text-decoration: none;
        color: @black;
        &:hover {
          text-decoration: underline;
        }
      }

   &__separator {
    margin: 0 5px; 
    font-family: @font1;
    color: @black;
  }
  
  &__current {
    font-family: @font1;
    color: @black;
  }
    &__listing {
        margin-bottom: 100px;
    }
    &__services {
        margin-bottom: 50px;
        @media @bw1660 {
            margin-bottom: 40px;
        }
    }
    &__offers {
        margin-bottom: 100px;
        @media @bw768 {
            margin-bottom: 90px;
        }
    }
  }
</style>