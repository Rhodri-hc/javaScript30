/**
* @desc 用于解决业务四则年月联动
* @author 张和潮
* @date 2020年12月03日 23:02
*/
function selectYearMonth(){
    const {startType = -1, startMonth = 1 , endType = -1, endMonth = 1 } = this.reparams;
    // TODO: 解决end类型禁用下拉框选项
    // TODO: 解决end类型选项小于start类型时清空
    // 设置end类型年下拉框选项
    this.endYearList.forEach(element => {
        this.$set(element,"disabled", element.id < startType)
    });
    // 设置end类型月下拉框选项
    if(startType < endType){
        this.endMonthList.forEach(element => {
            this.$set(element,"disabled", true)
        });
    }else if(startType === endType){
        this.endMonthList.forEach(element => {
            this.$set(element,"disabled", element.id < startMonth)
        });
        // 清空end类型月
        if (startMonth > endMonth) {
            this.$set(this.reparams, "endMonth" , "")
        }
    }else{
        this.endMonthList.forEach(element => {
            this.$set(element,"disabled", false)
        });
        // 清空end类型年月
        this.$set(this.reparams, "endType" , "")
        this.$set(this.reparams, "endMonth" , "")
    }
}