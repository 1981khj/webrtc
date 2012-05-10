function hasClassName(inElement, inClassName)
{
    var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)');
    return regExp.test(inElement.className);
}

function addClassName(inElement, inClassName)
{
    if (!hasClassName(inElement, inClassName))
        inElement.className = [inElement.className, inClassName].join(' ');
}

function removeClassName(inElement, inClassName)
{
    if (hasClassName(inElement, inClassName)) {
        var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)', 'g');
        var curClasses = inElement.className;
        inElement.className = curClasses.replace(regExp, ' ');
    }
}

function toggleClassName(inElement, inClassName)
{
    if (hasClassName(inElement, inClassName))
        removeClassName(inElement, inClassName);
    else
        addClassName(inElement, inClassName);
}

function toggleShape()
{
  var shape = document.getElementById('shape');
  if (hasClassName(shape, 'ring')) {
    removeClassName(shape, 'ring');
    addClassName(shape, 'cube');
  } else {
    removeClassName(shape, 'cube');
    addClassName(shape, 'ring');
  }
  
  // Move the ring back in Z so it's not so in-your-face.
  var stage = document.getElementById('stage');
  if (hasClassName(shape, 'ring'))
    stage.style.webkitTransform = 'translateZ(-200px)';
  else
    stage.style.webkitTransform = '';
}

function toggleBackfaces()
{
  var backfacesVisible = document.getElementById('backfaces').checked;
  var shape = document.getElementById('shape');
  if (backfacesVisible)
    addClassName(shape, 'backfaces');
  else
    removeClassName(shape, 'backfaces');
}

$(document).ready(function() {    
    var n = navigator,
        is_webkit = false;

    if (n.getUserMedia) {
        // opera users (hopefully everyone else at some point)
        n.getUserMedia({
            video: true,
            audio: true
        }, onSuccess, onError);
    }
    else if (n.webkitGetUserMedia) {
        // webkit users
        is_webkit = true;
        n.webkitGetUserMedia('video, audio', onSuccess, onError);
    }
    else {
        // etc user
    }
    
    function onSuccess(stream) {
        var output = document.getElementsByTagName('video'),
            source;

        //output.autoplay = true;

        if (!is_webkit) {
            source = stream;
        }
        else {
            source = window.webkitURL.createObjectURL(stream);
        }

        for(var i in output){
            output[i].src = source;
        }
    }

    function onError() {        
        console.log("Do nothing");
    }
});