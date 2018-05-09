import wepy from 'wepy';
import Tips from '../lib/Tips';
export default class base extends wepy.mixin {
    loaded() {
        this.init = true;
        this.$apply(); //正常流程下，改变数据后，组件会在流程结束时自动触发脏检查。 在异步或者回调流程中改变数据时，需要手动调用$apply方法。
        Tips.loaded();
    }
    // 卸载清理
    onUnload() {
        Object.assign(this, this.def);
    }
    methods = {
        nopen() {
            Tips.alert('尚未开放');
        }
    }
}