'use strict';

function getDogImages(breedInput) {
  fetch(`https://dog.ceo/api/breed/${breedInput}/images/random`)
  .then(response => response.json())
  .then(responseJson => displayResults(responseJson))
  .catch(error => alert('Something went wrong. Try again later!'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  // debugger;
  if (responseJson.status === "error") {
    $('.results').html('');
    $('.results').append(`<h2>Breed not found. Please choose another breed.</h2>`);
    $('.results').removeClass('hidden');
    $('#dog-breed').val('');
  } else {
    $('.results').html('');
    $('.results').append(`<h2>Dog Pic Time!</h2>`);
    $('.results').append(`<img src="${responseJson.message}" class="results">`);
    $('.results').removeClass('hidden');
    $('#dog-breed').val('');
  }
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let breedInput = $('#dog-breed').val();
    getDogImages(breedInput);
  });
}

$(function() {
  console.log('App loaded! Waiting for input and submit!');
  watchForm();
});