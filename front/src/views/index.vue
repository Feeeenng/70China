<template>
    <div class="index-body">
        <div class="index-title">
            <mt-cell class="index-title-cell" title="标题文字">
            </mt-cell>
        </div>
        <div class="image-box-left">
            <input imgcount= "0"  type="file" name="file" accept="image/gif,image/jpeg,image/bmp"  id="headerImg" multiple="multiple" style="display: none">  
          <eva-icon class="icon-eva" name="arrowhead-left" animation="flip" fill="#e3e9ef"></eva-icon>
        </div>
        <div class="image-body">
            <div class="image-box" @click="upload">
                <p>添加图片</p>
            </div>
        </div>
            <div class="image-box-right">
              <eva-icon class="icon-eva" name="arrowhead-right" animation="flip" fill="#e3e9ef"></eva-icon>
            </div>
        <div class="clear"></div>
        <div class="click-box">
            <div class="click-upload">
            </div>
        </div>

    </div>
</template>

<script>
     import { EvaIcon } from 'vue-eva-icons'
    export default {
        name: "index",
        components: {
        [EvaIcon.name]: EvaIcon
        },
        methods:{
            upload(){
                document.getElementById('headerImg').click()

            }
        }
    }
</script>

<style scoped>
.index-body{

}
.index-title {
    padding: 50px;
    margin-top: 100px;
}
.index-title-cell{
    height: 40px;

    /*padding: 8px 12px;*/
    border-radius: 22px;
    background-color: #e3e9ef;
}
.image-box-left{
    float: left;
    margin-left: 35px;
    margin-top: 100px;
}
.image-body{
    width: 200px;
    height: 200px;
    border: 10px solid #ffe9e4;
    background-color: #CCCCCC;
    border-radius: 15px;
    margin-left: 30px;
    float: left;
}
.image-box-right{
    width: 50px;
    height: 50px;
    float: left;
    margin-left: 35px;
    margin-top: 100px;
    /*background-color: #e3e9ef ;*/
    border-radius: 30px;
    /*font-size: 30px;*/
}

.icon-eva{
    font-size: 20px;
}
.image-box{
}
.clear{
    clear: both;
}
</style>