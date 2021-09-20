/* ========= CHANGE LANGUAGE ========= */
let isInItalian = false;

// ENGLISH
function eng() {
  let txt="";

  txt =	"<p class='home__title'>Hi, <br>I'm <span class='home__title-color'>Samuel</span><br> I love making </p>";
  document.getElementById("home__title").innerHTML = txt;

  // txt =	"<div class><h1 class='space-before'>-<a href='#work' class='typewrite' id='typewrite' data-type='['videogames', '3D models', 'websites', 'tutorials', 'logos', 'fractals']' <span class='wrap'></span></a></h1></div>";
  // document.getElementById("typewrite").innerHTML = txt;

  txt =	"Get my CV <i class='bx bxs-download'></i>";
  document.getElementById("cv-button").innerHTML = txt;

  txt =	"<p class='about__subtitle'>Something about me</p>";
  document.getElementById("about__subtitle").innerHTML = txt;

  txt =	"<p class='about__text'>Welcome lucky visitor! I am a 16 years old italian boy who loves programming and learning new things (think of this website as a demonstration of it <i class='bx bx-smile' ></i>). <br> I'm attending the upper secondary school in an Information Technology institute, but everything you see here is done by learning the skills I needed as a self-taught. <br> Indeed I like to experiment with pretty much every aspect of developing in general and trying out new things to learn from them to improve myself. <br> For now I have done work in software, web and videogame develompment, but I also experiment with fractals (2D and 3D) and I seldom make logos. <br>  Currently I'm not specialized in any of these fields in particular, I'm still finding the best one for me. <br>  In any case this website serves the purpose of demonstrating my latest projects, as well as to keep track of my journey through them.</p>";
  document.getElementById("about__text").innerHTML = txt;

  txt =	"<p class='back-text' id='back-text'>Hi!</p>";
  document.getElementById("back-text").innerHTML = txt;

  txt =	"<p class='back-text2' id='back-text2'>It's me!</p>";
  document.getElementById("back-text2").innerHTML = txt;

  txt =	"<p class='skills__subtitle' id='skills__subtitle'>Professional skills</p>";
  document.getElementById("skills__subtitle").innerHTML = txt;

  txt =	"<p class='skills__text' id='skills__text'>For now I have used HTML <i class='bx bxl-html5 ' ></i>, CSS <i class='bx bxl-css3 ' ></i>, Javascript <i class='bx bxl-javascript ' ></i>, Python, C# (in Unity), C++ and Java language, but I'm still learning them.<br>The programs that I've used (or sperimented with) for now are Unity, Blender, Visual Studio, Visual Studio Code, Android Studio, Eclipse and others (<em>see the image</em>).</p>";
  document.getElementById("skills__text").innerHTML = txt;

  txt =	"<p class='work__text' id='work__text'>These are some of my main projects:</p>";
  document.getElementById("work__text").innerHTML = txt;


  txt =	"<p id='bx-title1'>Blender Neon Text</p>";
  document.getElementById("bx-title1").innerHTML = txt;
  txt =	"<p id='bx-text1'>In this project - inspired by a tutorial of Blender Guru - I've created a neon text with my name.</p>";
  document.getElementById("bx-text1").innerHTML = txt;
  txt =	"<p id='work__button'>OPEN!</p>";
  document.getElementById("work__button").innerHTML = txt;
  
  txt =	"<p id='bx-title2'>First Landscape</p>";
  document.getElementById("bx-title2").innerHTML = txt;
  txt =	"<p id='bx-text2'>This is one of my first Blender projects I've made (2019).</p>";
  document.getElementById("bx-text2").innerHTML = txt;
  txt =	"<p id='work__button'>OPEN!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt =	"<p id='bx-title3'>Candle</p>";
  document.getElementById("bx-title3").innerHTML = txt;
  txt =	"<p id='bx-text3'>Another project of a melting candle (using subsurface scattering).</p>";
  document.getElementById("bx-text3").innerHTML = txt;
  txt =	"<p id='work__button'>OPEN!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt =	"<p id='bx-title4'>Realistic Landscape</p>";
  document.getElementById("bx-title4").innerHTML = txt;
  txt =	"<p id='bx-text4'>Here I tryed to make a realistic landscape with Terragen 4 (note the differences with the Blender one).</p>";
  document.getElementById("bx-text4").innerHTML = txt;
  txt =	"<p id='work__button'>OPEN!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt =	"<p id='bx-title5'>Tesla Cybertruck</p>";
  document.getElementById("bx-title5").innerHTML = txt;
  txt =	"<p id='bx-text5'>Fascinated by the minimal design of this car, I decided to make my own version in Blender.</p>";
  document.getElementById("bx-text5").innerHTML = txt;
  txt =	"<p id='work__button'>OPEN!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt =	"<p id='bx-title6'>My First Game</p>";
  document.getElementById("bx-title6").innerHTML = txt;
  txt =	"<p id='bx-text6'>Now I'm working on a game based on squares, but it's work-in-progress yet.</p>";
  document.getElementById("bx-text6").innerHTML = txt;
  txt =	"<p id='work__button'>OPEN!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt =	"<p id='bx-title7'>My First Website</p>";
  document.getElementById("bx-title7").innerHTML = txt;
  txt =	"<p id='bx-text7'>I can't forget to mention this website, my last project and my favourite one for now <i class='bx bx-smile' ></i>. <br>Click to view the source code! <i class='bx bx-code-block'></i></p>";
  document.getElementById("bx-text7").innerHTML = txt;
  txt =	"<p id='work__button'>OPEN!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt =	"<p id='bx-title8'>Mandelbrot Set</p>";
  document.getElementById("bx-title8").innerHTML = txt;
  txt =	"<p id='bx-text8'>This is one of my favourite projects, by a tutorial of 'The Art Of Code'. Look at this beautiful colors!</p>";
  document.getElementById("bx-text8").innerHTML = txt;
  txt =	"<p id='work__button'>OPEN!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt =	"<p id='bx-title9'>Rock Paper Scissors</p>";
  document.getElementById("bx-title9").innerHTML = txt;
  txt =	"<p id='bx-text9'>Challenge your computer to win in this funny and simple game!</p>";
  document.getElementById("bx-text9").innerHTML = txt;
  txt =	"<p id='work__button'>OPEN!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt =	"<p id='bx-title10'>Blog</p>";
  document.getElementById("bx-title10").innerHTML = txt;
  txt =	"<p id='bx-text10'>Here I write about my thoughts, my life and my passions.<br>Click to visit it!</p>";
  document.getElementById("bx-text10").innerHTML = txt;
  txt =	"<p id='work__button'>OPEN!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt =	"<p class='contact__text' id='contact__text'>Currently <strong>I'm not avaiable to get a job</strong> so there is no need to contact me. <br>Maybe when I will be of age and I will have learned other things you will be able to do it <i class='bx bx-smile' ></i>.</p>";
  document.getElementById("contact__text").innerHTML = txt;
  
  txt =	"<p id='footer__text'>Copyright &#169; Samuel Mediani 2020. All right reserved. - <em>HANDMADE</em></p>";
  document.getElementById("footer__text").innerHTML = txt;
}


// ITALIANO
function ita() {
  let txt="";

  txt =	"<p class='home__title'>Ciao, <br>sono <span class='home__title-color'>Samuel</span><br> mi piace creare </p>";
  document.getElementById("home__title").innerHTML = txt;

  // txt =	"<div class><h1 class='space-before'>-<a href='#work' class='typewrite' id='typewrite' data-type='['videogiochi', 'modelli 3D', 'siti web', 'tutorials', 'loghi', 'frattali']' <span class='wrap'></span></a></h1></div>";
  // document.getElementById("typewrite").innerHTML = txt;

  txt =	"Ottieni il mio CV <i class='bx bxs-download'></i>";
  document.getElementById("cv-button").innerHTML = txt;

  txt =	"<p class='about__subtitle'>Qualcosa su di me</p>";
  document.getElementById("about__subtitle").innerHTML = txt;

  txt =	"<p class='about__text'>Benvenuto fortunato visitatore! Sono un ragazzo italiano di 16 anni che ama programmare e imparare cose nuove (pensa a questo sito come una dimostrazione di ciò <i class='bx bx-smile' ></i>). <br> Frequento le superiori all'Istituto Tecnico Informatico, ma ogni cosa che vedi qui è stata fatta imparando le abilità che mi servivano da autodidatta. <br> Infatti mi piace sperimentare con la maggior parte degli aspetti dello sviluppo informatico in generale e prolete nuove cose da imparare da quest'ultimi per migliorare me stesso. <br> Per ora ho lavorato per realizzare progetti software, web e sviluppo di videogiochi, ho sperimentato anche con i frattali (2D e 3D) e raramente disegno loghi. <br> Attualmente non sono specializzato in nessuno di questi campi in particolare, sto ancora cercando il migliore per me. <br> In ogni caso questo sito ha lo scopo di mostrare i miei ultimi progetti e tenere traccia della avventura in cui mi immergo grazie a essi.</p>";
  document.getElementById("about__text").innerHTML = txt;

  txt =	"<p class='back-text' id='back-text'>Ciao!</p>";
  document.getElementById("back-text").innerHTML = txt;

  txt =	"<p class='back-text2' id='back-text2'>Sono io!</p>";
  document.getElementById("back-text2").innerHTML = txt;

  txt =	"<p class='skills__subtitle' id='skills__subtitle'>Abilità professionali</p>";
  document.getElementById("skills__subtitle").innerHTML = txt;
  
  txt =	"<p class='skills__text' id='skills__text'>Per adesso ho usato il linguaggio HTML <i class='bx bxl-html5 ' ></i>, CSS <i class='bx bxl-css3 ' ></i>, Javascript <i class='bx bxl-javascript ' ></i>, Python, C# (in Unity), C++ e Java, ma li sto ancora imparando.<br>I programmi che ho usato (o con cui ho sperimentato) per ora sono Unity, Blender, Visual Studio, Visual Studio Code, Android Studio, Eclipse e altri (<em>vedi l'immagine</em>).</p>";
  document.getElementById("skills__text").innerHTML = txt;

  txt =	"<p class='work__text' id='work__text'>Questi sono alcuni dei miei principali progetti:</p>";
  document.getElementById("work__text").innerHTML = txt;

  txt =	"<p id='bx-title1'>Blender Scritta Neon</p>";
  document.getElementById("bx-title1").innerHTML = txt;
  txt =	"<p id='bx-text1'>In questo progetto - ispirato da un tutorial di Blender Guru - ho creato una scritta neon con il mio nome.</p>";
  document.getElementById("bx-text1").innerHTML = txt;
  txt =	"<p id='work__button'>APRI!</p>";
  document.getElementById("work__button").innerHTML = txt;
  
  txt =	"<p id='bx-title2'>Primo Paesaggio</p>";
  document.getElementById("bx-title2").innerHTML = txt;
  txt =	"<p id='bx-text2'>Questo è uno dei miei primi progetti fatti con Blender (2019).</p>";
  document.getElementById("bx-text2").innerHTML = txt;
  txt =	"<p id='work__button'>APRI!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt =	"<p id='bx-title3'>Candela</p>";
  document.getElementById("bx-title3").innerHTML = txt;
  txt =	"<p id='bx-text3'>Un altro progetto di una candela che si scioglie (usando il subsurface scattering).</p>";
  document.getElementById("bx-text3").innerHTML = txt;
  txt =	"<p id='work__button'>APRI!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt =	"<p id='bx-title4'>Paesaggio Realistico</p>";
  document.getElementById("bx-title4").innerHTML = txt;
  txt =	"<p id='bx-text4'>Qui ho provato a creare un paesaggio realistico con Terragen 4 (notare le differenze con la versione Blender).</p>";
  document.getElementById("bx-text4").innerHTML = txt;
  txt =	"<p id='work__button'>APRI!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt =	"<p id='bx-title5'>Tesla Cybertruck</p>";
  document.getElementById("bx-title5").innerHTML = txt;
  txt =	"<p id='bx-text5'>Affascinato dal design minimale di questa macchina, ho deciso di creare la mia versione con Blender.</p>";
  document.getElementById("bx-text5").innerHTML = txt;
  txt =	"<p id='work__button'>APRI!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt =	"<p id='bx-title6'>Primo Gioco</p>";
  document.getElementById("bx-title6").innerHTML = txt;
  txt =	"<p id='bx-text6'>Ora sto lavorando su un gioco basato sui quadrati, ma è ancora work-in-progress.</p>";
  document.getElementById("bx-text6").innerHTML = txt;
  txt =	"<p id='work__button'>APRI!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt =	"<p id='bx-title7'>Primo Sito</p>";
  document.getElementById("bx-title7").innerHTML = txt;
  txt =	"<p id='bx-text7'>Non posso dimenticare di menzionare questo sito, il mio ultimo progetto e il mio preferito per ora <i class='bx bx-smile' ></i>. Clicca per il codice! <i class='bx bx-code-block'></i></p>";
  document.getElementById("bx-text7").innerHTML = txt;
  txt =	"<p id='work__button'>APRI!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt =	"<p id='bx-title8'>Mandelbrot Set</p>";
  document.getElementById("bx-title8").innerHTML = txt;
  txt =	"<p id='bx-text8'>Questo è uno dei miei progetti preferiti, da un tutorial di 'The Art Of Code'. Guarda che bei colori!</p>";
  document.getElementById("bx-text8").innerHTML = txt;
  txt =	"<p id='work__button'>APRI!</p>";
  document.getElementById("work__button").innerHTML = txt;
  
  txt =	"<p id='bx-title9'>Sasso Carta Forbici</p>";
  document.getElementById("bx-title9").innerHTML = txt;
  txt =	"<p id='bx-text9'>Sfida il tuo computer a vincere in questo gioco semplice e divertente!</p>";
  document.getElementById("bx-text9").innerHTML = txt;
  txt =	"<p id='work__button'>APRI!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt =	"<p id='bx-title10'>Blog</p>";
  document.getElementById("bx-title9").innerHTML = txt;
  txt =	"<p id='bx-text10'>Qui scrivo sui miei pensieri, sulla mia vita e sulle mie passioni.<br>Clicca per visitarlo!</p>";
  document.getElementById("bx-text10").innerHTML = txt;
  txt =	"<p id='work__button'>APRI!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt =	"<p class='contact__text' id='contact__text'>Attualmente <strong>non sono disponibile per ottenere un lavoro</strong> quindi non c'è nessun bisogno di contattarmi. <br>Forse quando sarò di maggiore età e avrò imparato altre cose potrai/potrete farlo <i class='bx bx-smile' ></i>.</p>";
  document.getElementById("contact__text").innerHTML = txt;

  txt =	"<p id='footer__text'>Copyright &#169; Samuel Mediani 2020. Tutti i diritti riservati. - <em>Fatto a mano</em></p>";
  document.getElementById("footer__text").innerHTML = txt;
}