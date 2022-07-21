console.log("Welcome to Sambapluri Songs");
let songIndex=0;
let audioElement=new Audio('./Song/1.mp3');
//audioElement.play();
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let masterSong=document.getElementById("masterSong");
let songs=[
    {SongName:'Madhaba',sourcePath:'./Song/1.mp3',coverPath:'Cover1.jpeg'},
    {SongName:'Madhaba1',sourcePath:'./Song/2.mp3',coverPath:'Cover2.jpeg'},
    {SongName:'Madhaba2',sourcePath:'./Song/3.mp3',coverPath:'Cover3.jpeg'},
    {SongName:'Madhaba3',sourcePath:'./Song/4.mp3',coverPath:'Cover4.jpeg'},
    {SongName:'Madhaba4',sourcePath:'./Song/5.mp3',coverPath:'Cover5.jpeg'},
    {SongName:'Madhaba5',sourcePath:'./Song/6.mp3',coverPath:'Cover6.jpeg'},
    {SongName:'Madhaba6',sourcePath:'./Song/7.mp3',coverPath:'Cover7.jpeg'},
    {SongName:'Madhaba7',sourcePath:'./Song/8.mp3',coverPath:'Cover8.jpeg'}
]
songItems.forEach((element,i)=>{
    console.log(element,i);
   element.getElementsByTagName('img')[0].src=songs[i].coverPath;
   element.getElementsByClassName('songName')[0].innerText=songs[i].SongName;
})


masterPlay.addEventListener('click',()=>{
    //console.log("audio",audioElement.paused)
    if(audioElement.paused){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        }
})

audioElement.addEventListener('timeupdate',()=>{
    console.log("timeupdate");
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    songIndex=parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    masterSong.innerText=songs[songIndex].SongName;
    audioElement.src=`Song/${songIndex+1}.mp3`;
   // audioElement.src=`Song/s5.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })
})

document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`Song/${songIndex+1}.mp3`;
    masterSong.innerText=songs[songIndex].SongName;
    // audioElement.src=`Song/s5.mp3`;
     audioElement.currentTime=0;
     audioElement.play();
     gif.style.opacity=1;
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
})
document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`Song/${songIndex+1}.mp3`;
    masterSong.innerText=songs[songIndex].SongName;
    // audioElement.src=`Song/s5.mp3`;
     audioElement.currentTime=0;
     audioElement.play();
     gif.style.opacity=1;
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
})