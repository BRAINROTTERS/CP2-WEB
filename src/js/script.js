let imagens =[

    'src/assets/1.jpg',

    'src/assets/2.jpg',

    'src/assets/3.jpg',

    'src/assets/4.jpg',
   
]
 
//declarando as variaveis
 
let i=0

let tempo= 4000;
 
//criando a função do slideshow
 
function slideshow(){

    document.getElementById('image').src = imagens[i];

    i++;

    if( i== imagens.length){

        i=0;

    }

    setTimeout("slideshow()",tempo)
 
}

slideshow();
 