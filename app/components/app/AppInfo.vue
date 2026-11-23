<template>
  <section class="app-info">
    <div class="app-info__wrapper">
            <ul class="app-info__list">
                <li class="app-info__item">
                    <div class="app-info__item-mark">
                        <SvgIcon class="app-info__item-icon" width="24" height="24" name="price"/>
                    </div>
                    <div class="app-info__item-content">
                        <h4 class="app-info__item-title">
                            Цены
                        </h4>

                        <div class="app-info__item-info">
                            Цены, указанные на сайте носят информационный характер. Мы придерживаемся индивидуального подхода в работе с клиентом.
                        </div>
                    </div>
                </li>
                <li class="app-info__item">
                    <div class="app-info__item-mark">
                        <SvgIcon class="app-info__item-icon" width="24" height="24" name="phone"/>
                    </div>
                    <div class="app-info__item-content">
                        <h4 class="app-info__item-title">
                            Контакты
                        </h4>
                        <div class="app-info__item-info">
                            Отдел организации мероприятий 
                        </div>
                        <a href="tel:+73822907256" class="app-info__item-info">8(3822) 90-72-56</a>
                        <a href="mailto:idat@tusur.ru" class="app-info__item-info">
                            idat@tusur.ru
                        </a>
                    </div>
                </li>
                <li class="app-info__item">
                    <div class="app-info__item-mark">
                        <SvgIcon class="app-info__item-icon" width="24" height="24" name="advantage"/>
                    </div>
                    <div class="app-info__item-content">
                        <h4 class="app-info__item-title">
                            Преимущество
                        </h4>
                        <div class="app-info__item-info">
                            Мы имеем все возможности для того, чтобы помочь как малому бизнесу и молодым талантам, так и большим корпорациям и холдингам.
                        </div>
                    </div>
                </li>
         </ul>
        </div>
    </section>
</template>

<style lang="less">
.app-info {
  .container;
  
  &__wrapper {
    display: flex;
    justify-content: center;
    
    @media @bw1020 {
      display: flex;
      justify-content: center;
    }
    @media @bw768 {
      flex-direction: column;
      align-items: center;
    }
  }
  
  &__list {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 0;
    padding: 0;
    list-style: none;
    
    @media @bw1020 {
      display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px 30px;
    width: 100%;
    max-width: 1200px;
    margin: 0;
    padding: 0;
    list-style: none;
    }
    
    @media @bw768 {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
      padding: 0;
      gap: 40px 0;
    }
  }
  
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1;
    margin: 0;
    padding: 0 30px;
    
    @media @bw1020 {
      display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 0 0 calc(33.333% - 20px);
    max-width: calc(33.333% - 20px);
    margin: 0;
    padding: 0 10px;
    &:nth-child(3) {
      flex: 0 0 100%;
      max-width: 500px;
    }
    }
    
    @media @bw768 {
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 100%;
      max-width: 100%;
      flex: 0 0 100%;
      margin: 0;
      padding: 0;
    
    }
  }
  
  &__item-mark {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 110px;
    background: @black;
    margin: 0 0 30px;
    
    @media @bw1020 {
      justify-content: center;
    }
    
    @media @bw768 {
      margin: 0 0 20px;
      width: 65px;
      height: 65px;
    }
  }
  
  &__item-icon {
    width: 24px;
    height: 24px;
    color: @red;
  }
  
  &__item-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media @bw1020 {
      align-items: center;
    }
    
    @media @bw768 {
     align-items: center;
      text-align: center;;
    }
  }
  
  &__item-title {
    font-family: @font1;
    margin: 0 0 20px;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    
    @media @bw1020 {
      font-weight: 600;
      margin: 41px 0 16px;
    }
    
    @media @bw768 {
      font-weight: 600;
      font-size: 14px;
      margin: 0 0 10px;
      text-align: center;
    }
  }
  
  &__item-info {
    font-family: @font1;
    font-size: 16px;
    line-height: 22px;
    color: inherit;
    text-decoration: none;
    
    &:last-child {
      margin: 0;
    }
    
    @media @bw1020 {
      font-size: 14px;
      line-height: 19px;
      margin: 0;
    }
    
    @media @bw768 {
      font-size: 13px;
      line-height: 19px;
      margin: 0;
      text-align: center;
    }
  }
}
</style>
