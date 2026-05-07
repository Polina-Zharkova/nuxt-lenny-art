<template>
    <article class="article-card">
    <a href="#" class="article-card__link">
        <picture class="article-card__picture">

            <source
             media="(max-width: 450px)" 
             type="image/webp" 
             :srcset="data.img_webp"
             />

            <source media="(max-width: 450px)" :srcset="data.img"/>

            <source 
            media="(max-width: 1169px)" 
            type="image/webp" 
            :srcset="data.img_tablet_webp"/>

            <source media="(max-width: 1169px)" :srcset="data.img_tablet"/>

            <source type="image/webp" :srcset="data.img_webp"/>

            <img :src="data.img" :alt="data.alt" class="article-card__img"/>
        </picture>
    </a>

    <div class="article-card__info">
        <time :datetime="data.date" class="article-card__time">
            {{ date }}
        </time>
        <a href="#" class="article-card__title-link">
            <h4 class="article-card__title">
                {{ data.title }}
            </h4>

            <div class="article-card__arrow arrow">
                <SvgIcon name="arrow" class="arrow__icon" width="92" height="62"/>
            </div>
        </a>
        <p class="article-card__description">
            {{ data.description }}
        </p>
    </div>
</article>
</template>

<script setup>
  const props = defineProps({
    data: {
      type: Object,
      default: () => ({}),
    },
  });

    const date = computed(() => {
    try {
      return new Date(props.data.date).toLocaleDateString()

    } catch {
      return null;
    }
  })
</script>

<style lang="less">
.article-card {
   box-sizing: border-box;
   position: relative;
   display: flex;
   max-width: 1218px;
  margin: 0 auto;

   @media @bw1170 {
    flex-direction: column;
    max-width: 700px;
   }
   &:active {
    .article-card__picture {
        box-shadow: 0 0 30px fade(@black, 55%);
    }
   }
   &:hover {
    @media (hover:hover) {
    .article-card__picture {
        box-shadow: 0px 0px 30px fade(@black, 55%);
    }    
    }
   }
   & + .article-card {
    margin-top: 120px;
    @media @bw1170 {
        margin-top: 100px;
    }
    @media @bw500 {
        margin-top: 80px;
    }
    &::before {
        content: "";
        display: block;
        position: absolute;
        margin: 0 auto 60px;
        bottom: 100%;
        left: 0;
        right: 0;
        max-width: 1254px;
        width: 100%;
        height: 1px;
        background-color: @black;
        pointer-events: none;
        @media @bw1170 {
            margin-bottom: 50px;
        }
        @media @bw500 {
            margin-bottom: 40px;
        }
    }
   }
   &__link {
    flex-shrink: 0;
    align-self: flex-start;
    margin-right: 60px;
    display: block;
    width: 467px;
    text-decoration: none;
    font-size: 0;
    @media @bw1660 {
         margin-right: 40px;
    }
    @media @bw1340 {
         margin-right: 30px;
    }
    @media @bw1170 {
        width: 100%;
         margin-right: 0px;
    }
    &:active {
        & ~ .article-card__info {
            .article-card__title-link {
                color: @red;
                text-decoration-color: @red;
            }
        }
    }
    &:hover {
        @media (hover: hover) {
        & ~ .article-card__info {
            .article-card__title-link {
                color: @red;
                text-decoration-color: @red;
            }
        }
        }
     }
   }
   &__picture {
    display: block;
    position: relative;
    width: 100%;
    overflow: hidden;
    transition: box-shadow 0.2s;
    &::after {
        content: '';
        display: block;
        width: 100%;
        padding-top: 62.3126%;
    }
   }
   &__img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
   }
   &__info {
    box-sizing: border-box;
    position: relative;
    display: flex; 
    flex-direction: column;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    padding: 30px 0;
    padding-right: 150px;
    @media @bw1660 {
        padding-right: 130px;
    }
    @media @bw1340 {
       padding-right: 95px; 
    }
    @media @bw1170 {
        padding-top: 0;
        padding-bottom: 0;
    }
    @media @bw500 {
        padding-right: 0;
        padding-bottom: 60px;
    } 
   }
   &__time {
    margin: 0 0 40px;
    font-size: 16px;
    font-weight: 300;
    line-height: 22px;
    @media @bw1170 {
        margin: 25px 0 0;
    }
    @media @bw500 {
        margin-top: 10px;
        font-size: 14px;
        line-height: 19px;
    }
   }
   &__title-link,
   &__description {
    max-width: 470px;
   }
   &__title-link {
    margin: auto 0 40px;
    color: @black;
    text-decoration-color: transparent;
    transition: color 0.2s, text-decoration-color 0.2s;
    @media @bw1170 {
        margin: 40px 0 20px;
        font-size: 20px;
        line-height: 27px;
    }
    @media @bw500 {
        margin: 20px 0 10px;
        font-size: 16px;
        line-height: 22px;
    }
    &:active {
        color: @red;
        text-decoration-color: @red;
    }
    &:hover {
        @media (hover:hover) {
        color: @red;
        text-decoration-color: @red;
    }    
    }
   }
   &__title {
    margin: 0;
    color: inherit;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
   }
   &__description {
    margin: 0;
    font-size: 16px;
    line-height: 22px;
    @media @bw500 {
        font-size: 14px;
        line-height: 19px;
    }
   }
   &__arrow {
    position: absolute;
    right: 0;
    bottom: 30px;
    color: inherit;
    transition: none;
    @media @bw1170 {
        bottom: 0;
    }
   }  
}
</style>