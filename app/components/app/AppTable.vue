<template>
        <table class="app-table">
            <thead class="app-table__head">
                    <tr class="app-table__head-tr">
                        <th class="app-table__th"></th>
                        <th 
                        v-for="(th, thIndex) in headers" 
                        :key="thIndex" 
                        class="app-table__th">
                    {{ th }}
                    </th>
                    </tr>
                </thead>
                <tbody class="app-table__body">
                    <tr 
                    v-for="(tr, trIndex ) in rows" 
                    :key="trIndex"
                    class="app-table__tr">
                        <th class="app-table__body-th">
                            {{ tr.header }}
                        </th>

                        <td 
                        v-for="(td, tdIndex ) in tr.values" 
                        :key="tdIndex"
                        class="app-table__td">
                        <span v-if="td && typeof td === 'boolean'" class="app-table__ok"></span>

                        <template v-else>
                            {{ td }}
                        </template>
                    </td>
                    </tr>
                </tbody>

                <tfoot class="app-table__footer">
                    <tr class="app-table__footer-tr">
                        <th 
                        v-for="(th, thIndex) in headers" 
                        :key="thIndex" 
                        class="app-table__footer-th">
                    {{ th }}
                    </th>
                    </tr>
                </tfoot>
</table>
</template>

<script setup>
const props =defineProps({
    data: {
        type: Object,
        default: () => ({})
    }
});

const headers = computed(() => 
Array.isArray(props.data.headers) ? props.data.headers: []);

const rows = computed(() => 
Array.isArray(props.data.data) ? props.data.data: []);
</script>

<style lang="less">
.app-table {
  width: 100%;
  border-collapse: collapse;
  color: @black;
  text-align: center;
  @media @bw768 {
    display: block;
    margin: 0 -20px;
    width: calc(100% + 40px);
  }
  &__head,
  &__body,
  &__footer {
    @media @bw768 {
      display: block;
      margin: 0 -20px;
    }
  }
  &__head-tr {
    @media @bw768 {
      display: flex;
      width: 100%;
    }
  }
  &__tr {
    @media @bw768 {
      display: flex;
      flex-wrap: wrap;
    }
    &:nth-child(2n-1) {
      background-color: fade(@black, 3%);
    @media @bw768 {
      background-color: transparent;
      display: flex;
      flex-wrap: wrap;
     }
    }
  }
  &__th {
    height: 85px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.38;
    border-right: 1px solid @gray_dark;
     @media @bw1020 {
      font-size: 14px;
     } 
    @media @bw768 {
      font-weight: 600;
    }
    &:last-child {
      border-right: none;
    }
  }
    
  

&__body-th,
&__td {
  box-sizing: border-box;
  height: 50px;
}

  &__footer-th {
    height: 60px;
    font-size: 0;
    border-right: 1px solid @gray_dark;
    &:last-child {
      border-right: none;
    }
    @media @bw768 {
      font-weight: 300;
      font-size: 16px;
    }
  }
  &__th,
  &__footer-th {
    box-sizing: border-box;
    padding: 10px;
    border-right: 1px solid @gray_dark;
    text-transform: uppercase;
    @media @bw768 {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      text-transform: uppercase;
      height: auto;
      width: 33.333%;
      padding: 20px 5px;     
    }
    &:first-child {
      padding-left: 0;
      @media @bw768 {
        display: none;
      }
    }

    &:nth-child(2) {
      @media @bw768 {
        padding-left: 20px;
      }
    }
    &:last-child {
      @media @bw768 {
        padding-right: 15px;
      }
    }
  &:nth-child(2n-1) {
    @media @bw768 {
      background-color: fade(@black, 3%);
    }
  }
  br {
    display: none;
    @media @bw768 {
      display: block;
    }
  }
}
    
  &__body-th {
    box-sizing: border-box;
    height: 50px;
    padding: 13px 15px 12px 0;
    border-top: 1px solid @gray_dark;
    border-bottom: 1px solid @gray_dark;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.38;
    text-align: left;
    @media @bw768 {
      display: block;
      width: 100%;
      text-align: center;
      font-weight: 600;
      padding: 13px 15px;
      font-size: 14px; 
    }
  }
  &__td {
    box-sizing: border-box;
    height: 50px;
    padding: 13px 10px 12px;
    border: 1px solid @gray_dark;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.375;
    @media @bw768 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 33.333%;
      border: none;
      border-right: 1px solid @gray_dark;

    }
    &:last-child {
      border-right: none;
      @media @bw768 {
        padding-right: 20px;
      }
    }

    &:last-child {
      border-right: none;
      padding-right: 0;
    }
    &:nth-child(2n-1) {
      @media @bw768 {
        background-color: fade(@black, 3%);
      }
    }
  }
  &__footer-tr {
    @media @bw768 {
      display: flex;
    }
  }
  &__ok {
    display: block;
    position: relative;
    width: 26px;
    height: 26px;
    margin: auto;
    border-radius: 50%;
    background-color: @black;
    &::after {
      content: "";
      box-sizing: border-box;
      display: block;
      position: absolute;
      top: 4px;
      left: 9px;
      width: 6px;
      height: 12px;
      border-right: 2px solid @white;
      border-bottom: 2px solid @white;
      transform: rotate(45deg);
    }
  }
}
</style>