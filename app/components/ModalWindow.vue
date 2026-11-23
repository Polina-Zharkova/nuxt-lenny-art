<template>
  <ClientOnly>
    <teleport to="body">
      <Transition>
              <div v-if="isActive || alive" 
              v-show="isActive" 
              v-keyup="onEsc" 
              class="modal-window">
        <div class="modal-window__wrapper">
          <div class="modal-window__sticky-close">
            <button
              type="button"
              title="Закрыть"
              class="modal-window__x-btn x-btn"
              @click="close"
            >
              <SvgIcon class="x-btn__icon" name="x" width="24" height="24" />
            </button>
          </div>

          <div class="modal-window__container">
            <h2 class="modal-window__title" v-html="title"></h2>

            <div class="modal-window__scrollable">
              <div class="modal-window__content">
               <slot></slot> 
              </div>
            </div>
            
          </div>
        </div>
      </div>
      </Transition>
    </teleport>
  </ClientOnly>
</template>

<script setup>
import { computed, watch, onBeforeUnmount } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
    title: {
    type: String,
    default: ""
  },
  alive: {
    type: Boolean,
    default: false
  }
})

const store = useStore();
const isActive = computed(() => {
  return props.name ? store.modal[props.name] : null;
})

const close = () => {
  if (props.name) store.closeModal(props.name);
};

const onEsc = (event) => {
  if (event.key === "Escape" ||event.keyCode === 27) close();
}

const blockScroll = () => {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = `${scrollbarWidth}px`;
}

const unblockScroll = () => {
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}

watch(() => isActive.value, (newValue) => {
  if (newValue) {
    blockScroll();
  } else {
    unblockScroll();
  }
});

if (isActive.value) {
  blockScroll();
}

onBeforeUnmount(() => {
  unblockScroll();

});
</script>

<style lang="less">
  .modal-window {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    z-index: 110;
    @supports (backdrop-filter: blur(20px)) {
            background-color: fade(@black, 40%);
            backdrop-filter: blur(20px);
        }
    @media @bw1340 {
        padding: 90px 40px 50px;
    }
    @media @bw1020 {
        padding: 90px 40px 50px;
    }
    @media @bw768 {
        padding: 85px 20px 50px;
    }
    @media @bw600 {
        padding: 80px 20px 50px;
    }
    &__wrapper {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1210px;
        margin: auto;
        background-color: @gray;
        background-image: url(@/assets/images/noise.png);
        background-position: 0 0;
        background-size: auto;
        background-repeat: repeat;
        box-shadow: 6px 0px 30px rgba(31, 31, 30, 0.55);
        @supports (backdrop-filter: blur(20px)) {
            box-shadow: none;
        }
    }
    &__container {
        box-sizing: border-box;
        width: 100%;
        max-width: 950px;
        margin: 0 auto;
        padding: 0 0 40px 40px;
        display: flex;
        flex-direction: column;
        max-height: calc(100vh - 100px);
        @media @bw768 {
            padding: 0 0 30px 40px;
            max-height: calc(100vh - 80px);
        }
        @media @bw400 {
            padding: 0 0 20px 40px;
        }
    }
    &__title {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        margin: -40px 0 70px -85px;
        padding: 10px 85px;
        width: 595px;
        min-height: 80px;
        background-color: @black;
        text-transform: uppercase;
        font-weight: 400;
        font-family: @font2;
        font-size: 22px;
        line-height: 1.36;
        color: @white;
        letter-spacing: 0.02em;
        z-index: 1;
        flex-shrink: 0; 
    @media @bw1340 {
        width: 515px;
        margin: 40px 0 70px -45px;
        padding: 10px 45px;
    }
    @media @bw1170 {
        width: 465px;
        margin: 40px 0 70px -20px;
        padding: 10px 20px;
    }
    @media @bw768 {
        width: 300px;
        max-width: calc(100% - 15px);
        min-height: 60px;
        margin: -30px 0 40px;
        padding: 10px 20px;
        font-size: 14px;
    }
}
    &__sticky-close {
        position: absolute;
        top: 0;
        right: 0;
        width: auto;
        height: auto;
    }
    &__x-btn {
        position: relative;
        top: -30px;
        right: -30px;
        @media @bw768 {
            top: -18px;
            right: -18px;
        }
    }
     &__scrollable {
    flex: 1;
    overflow-y: auto; 
    overflow-x: hidden;
    margin-right: -30px; 
    padding-right: 20px;
     &::-webkit-scrollbar {
      width: 4px;
    }
    
    &::-webkit-scrollbar-track {
      background: fade(@black, 20%);
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: @white;
      border-radius: 4px;
      transition: background 0.2s;
    }
  }
  &__content {
    padding-right: 45px;
    @media @bw768 {
      padding-right: 10px;
    }
  }
  }
  
  </style>