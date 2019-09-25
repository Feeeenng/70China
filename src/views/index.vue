<template>
    <div class="index-body">
        <div class="index-title">
            <h2 style="color: #e3e9ef;margin-left: 15px">制作属于自己的国庆头像</h2>
        </div>
        <div class="image-box-left">
          <i class="icon-eva iconfont icon-jiantou_xiangzuoliangci" style="font-size: 35px;"></i>
        </div>
        <div class="image-body">
            <div class="image-box">
            <p style="position: relative; top: 80px;">点击添加</p>
            <input @change="upload" type="file" name="file" accept="image/gif,image/jpeg,image/bmp"  id="headerImg" multiple="multiple">  

            </div>
            <img id="export" src="" alt="">
            <canvas id="cvs"></canvas>
        </div>
            <div class="image-box-right">
              <i class="icon-eva iconfont icon-jiantou_xiangyouliangci" style="font-size: 35px"></i>
            </div>
        <div class="clear"></div>
        <div class="click-box">
            <div class="click-upload">
            </div>
        </div>
        <div style="display: none">
            <img id="img" src="" alt="">
        </div>

    </div>
</template>

<script>
    export default {
        name: "index",
        methods:{
            upload(){
                var file = document.getElementById("headerImg").files[0];
                var img = document.getElementById("img");
                console.log(file);
                var reader = new FileReader;
                if (file){
                    reader.readAsDataURL(file);
                    reader.onload = function (e) {
                        img.src = reader.result;
                        img.onload = function () {
                            console.log(img)
                        }
                    }
                }

            },
            img2Cvs(img){
                console.log(1)
                var cvs = document.getElementById("cvs");
                cvs.width = img.width;
                cvs.height = img.height;
                cvs.style.display = "block";
                canvasFabric = new fabric.Canvas("cvs", {
                width: screenWidth,
                height: screenWidth,
                backgroundImage: new fabric.Image(img, {
                scaleX: screenWidth / img.width,
                scaleY: screenWidth / img.height
        })
    });
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
    box-shadow: 0 0 5px #aaa;
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
#headerImg{
    height: 12rem;
    width: 12rem;
    top: 0;
    left: 0;
    opacity: 0;
}
</style>