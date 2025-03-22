let video;

function setup() {
  noCanvas();

  video = createVideo(
    ['Cakevideo.mp4'],
    muteVideo
  );

  video.showControls();

  let img = createImg(
    'image.jpg',
  );
  img.position(10, 750);

  describe('Do Ho Suh');
}

function muteVideo() {
  video.volume(0);
}