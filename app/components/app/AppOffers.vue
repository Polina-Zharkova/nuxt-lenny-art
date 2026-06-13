<template>
    <section class="app-offers">
        <h4 class="app-offers__title">Я хочу:</h4>

        <div class="app-offers__btns">
            <button type="button" class="app-offers__btn btn btn--red" @click="openPopup">
                Провести мероприятие
            </button>

            <button type="button" class="app-offers__btn btn">
                Стать арендатором
            </button>
        </div>

        <ModalWindow alive :name="'getOffer'" :title="'Заполните форму<br />и мы подберем площадку'">
            <EventsForm @close="closePopup" />
        </ModalWindow>
    </section>
</template>

<script setup>
const store = useStore();
const openPopup = () => {
store.openModal("getOffer");
};

const closePopup = () => {
store.closeModal("getOffer");
};
</script>

<style lang="less">
.app-offers {
    .container;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    &__title {
        .width_624;
        margin: 0 auto 45px;
        font-weight: 400;
        font-family: @font2;
        font-size: 22px;
        line-height: 1.36;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        @media @bw1340 {
            font-size: 16px;
        }
        @media @bw600 {
            margin: 0 auto;
        }
        @media @bw500 {
            font-size: 13px;
        }
    }
&__btns {
    .width_624;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media @bw600 {
        flex-direction: column;
        align-items:stretch;
    }
}
&__btn {
    @media @bw600 {
        width: 100%;
        margin-top: 25px;
    }
}
}
</style>