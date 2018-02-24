'use strict';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var photos = [];
var commentsList = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Генерируем массив с фотографиями
for (var i = 1; i <= 25; i++) {
  var photo = {
    url: 'photos/' + i + '.jpg',
    likes: getRandomIntInclusive(15, 200),
    comments: [].push(commentsList[getRandomIntInclusive(0, commentsList.length - 1)])
  };
  photos.push(photo);
}

var pictureTemplate = document.querySelector('#picture-template').content;

var renderPicture = function (picture) {
  var pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture').getElementsByTagName('img')[0].src = picture.url;
  pictureElement.querySelector('.picture-likes').textContent = picture.likes;
  pictureElement.querySelector('.picture-comments').textContent = picture.comments;

  return pictureElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < photos.length; j++) {
  fragment.appendChild(renderPicture(photos[j]));
}

var pictureContainer = document.querySelector('.pictures');
pictureContainer.appendChild(fragment);

var galleryOverlay = document.querySelector('.gallery-overlay');
galleryOverlay.classList.remove('hidden');

galleryOverlay.querySelector('.gallery-overlay-image').src = photos[0].url;
galleryOverlay.querySelector('.likes-count').textContent = photos[0].likes;
galleryOverlay.querySelector('.comments-count').textContent = photos[0].comments;

