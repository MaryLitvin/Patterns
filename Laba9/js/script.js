class Conventor{
    constructor(){
        this.nameVideo = "video";
    }

    setVideo(video){
        this.nameVideo = video;
        console.log(`Завантаження відео ${this.nameVideo}`) 
    }

    convertVideo(){ 
        console.log(`Конвертування ${this.nameVideo} у формат .youtube`) }

    uploadedVideo(){ 
        console.log(`Завантаження ${this.nameVideo} на YouTube`) }

    getKeyYouTubeAPI(){ 
        console.log(`Отримання ключа з бд`) }

    processingVideo(){ 
        console.log(`Обробка відео ${this.nameVideo}`) }
}

class FacadeYouTube {
    constructor(convert){
        this.convert = convert;
    }

    videoOnYouTube(nameVideo){
        this.convert.setVideo(nameVideo);
        this.convert.convertVideo();
        this.convert.getKeyYouTubeAPI();
        this.convert.uploadedVideo();
        this.convert.processingVideo();
    }

}

let facade = new FacadeYouTube(new Conventor())

facade.videoOnYouTube("Цікавий ролік.mp4")