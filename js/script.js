let imageScene, imagePerson, scene, person, soundGame;

function preload() {
  imageScene = loadImage("../assets/images/scene/forest.png");
  imagePerson = loadImage("../assets/images/person/running.png");
  soundGame = loadSound(('../assets/sound/trilha_jogo.mp3'));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scene = new Scene(imageScene, 1);
  person = new Person(imagePerson);
  frameRate(40);
  // soundGame.loop();
}

function draw() {
  scene.display();
  scene.move();
  person.display();
}
