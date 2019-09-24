<template>
    <div  class="img-body">
        <div>
            <div ref="imageWrapper" style="height: 300px">
                <div class="img-content">
                    <canvas class="mycanvas" ref="myCanvas" alt="" width="300px" height="300px"></canvas>
                </div>
                <div class="img-box">
                    <input type="text">
                </div>
            </div>
        </div>
        <div class="success">
            <mt-button type="primary" @click="toImage">生成</mt-button>
            <mt-button type="default">default</mt-button>
<mt-button type="primary">primary</mt-button>
<mt-button type="danger">danger</mt-button>
            <mt-header fixed title="固定在顶部"></mt-header>
            <img :src="successUrl" alt="">
        </div>
    </div>
</template>

<script>
    import html2canvas from 'html2canvas';
    import img1 from '../assets/weiqu.jpg'
    export default {
        name: "Index",
        data (){
            return {
                successUrl:'',
                item: img1
            }
        },
        mounted(){
            let canvas = this.$refs.myCanvas
            let context = canvas.getContext('2d')
            let img = new Image();
            img.src = this.item
            img.crossOrigin = 'anonymous'
            img.onload = function () {
                canvas.setAttribute("width", 200)
                canvas.setAttribute("height", 200)
                  // 绘制图片
                context.drawImage(img,0,0,img.width,img.height)
            }

        },
        methods: {
            toImage() {
                html2canvas(this.$refs.imageWrapper,{
                backgroundColor: null
                }).then((canvas) => {
                let url = canvas.toDataURL("image/png");
                this.successUrl = url;
                });

}

}
    }
</script>

<style scoped>
.img-body{
    width: 100%;
    height: 100%;
}

.img-content{
    float: left;
    z-index: 0;
}

.img-box{
    border: 1px solid red;
    z-index: 1;
    position: absolute;
    left: 70px;
    top: 120px;
    /*width: 30%;*/
    /*float: left;*/
}


</style>