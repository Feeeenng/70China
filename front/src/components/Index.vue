<template>
    <div  class="img-body">
        <div>
            <div ref="imageWrapper" style="height: 300px">
                <div class="img-content">
                    <canvas class="mycanvas" ref="myCanvas" alt="" width="300px" height="300px"></canvas>
                </div>
                <div class="img-box">
                    <p>国旗</p>
                </div>
            </div>
        </div>
        <div class="success">
            <mt-button type="primary" @click="toImage">生成</mt-button>
            <img :src="successUrl" alt="">
        </div>
    </div>
</template>

<script>
    import html2canvas from 'html2canvas';
    export default {
        name: "Index",
        data (){
            return {
                successUrl:'',
                item: 'https://i.loli.net/2019/09/24/cxOHhmpVaIniLqF.jpg'
            }
        },
        mounted(){
            let canvas = this.$refs.myCanvas
            let context = canvas.getContext('2d')
            let img = new Image();
            img.src = 'https://i.loli.net/2019/09/24/cxOHhmpVaIniLqF.jpg'
            img.setAttribute('crossOrigin', 'anonymous')
            img.onload = function () {
                canvas.setAttribute("width",img.width)
                canvas.setAttribute("height",img.height)
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