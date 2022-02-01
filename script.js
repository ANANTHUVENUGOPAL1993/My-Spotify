console.log("hello");


/////initialise the variable

let songIndex=1;
let audioElement=new Audio(`songs/1.mp3`);
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif')
let songItems=Array.from(document.getElementsByClassName('songItem'))
//console.log(songItems);











// let songs=[{
//     songName:"Novunarvu",filePath:"songs/1.mp3"
// },
// {
//     songName:"Nee Ennilee",filePath:"songs/2.mp3"
// },
// {
//     songName:"Hridayathin",filePath:"songs/3.mp3"
// },
// {
//     songName:"Nammal",filePath:"songs/4.mp3"
// }]


//Handle play /pause  click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){

        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=1;


       

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity=0;
      

    }
})


/////listen event

audioElement.addEventListener('timeupdate',()=>{
   // console.log('timeupdate');

progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        console.log(element);
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })



    

}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(audioElement.paused||audioElement.currentTime<=0){
            makeAllPlays();
            songIndex=parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle')
            e.target.classList.add('fa-pause-circle')
            audioElement.src=`songs/${songIndex}.mp3`
            audioElement.currentTime=0;
            audioElement.play()
            masterPlay.classList.remove('fa-play-circle')
            masterPlay.classList.add('fa-pause-circle')
            gif.style.opacity=1;

        }
        else{
            e.target.classList.remove('fa-pause-circle')
            e.target.classList.add('fa-play-circle')

            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle')
            masterPlay.classList.add('fa-play-circle')
            gif.style.opacity=0;

        }
       


    })
})



document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=4){
        songIndex = 1
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;


})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=1){
        songIndex = 1
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;

})


///////////////////////////trial.//////
