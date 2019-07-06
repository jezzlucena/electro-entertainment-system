// Thanks to Zachary Skalko
// From the Codepen Experiment at https://codepen.io/zapplebee/pen/gbNbZE
window.onload = function () {
    "use strict";
    var visualizer = document.getElementById('visualizer');
    var path;
    var report = 0;

    var soundAllowed = function (stream) {
        var audioContent = new AudioContext();
        var audioStream = audioContent.createMediaStreamSource( stream );
        var analyser = audioContent.createAnalyser();
        audioStream.connect(analyser);
        analyser.fftSize = 1024;

        $('path').css('opacity', 0).css('stroke', 'black')

        var groups = $('svg > g')
        var bassElms = []
        var midElms = []
        var hiElms = []

        groups.each((index, group) => {
          if (group.id.startsWith('Group') && $(group).find('path').length) {
            if (group.id.endsWith('-2')) {
              bassElms.push(...($(group).find('path').toArray()))
            } else if (group.id.endsWith('-3')) {
              midElms.push(...($(group).find('path').toArray()))
            } else {
              hiElms.push(...($(group).find('path').toArray()))
            }
          }
        })

        var frequencyArray = new Uint8Array(analyser.frequencyBinCount);

				//Through the frequencyArray has a length longer than 255, there seems to be no
        //significant data after this point. Not worth visualizing.
        for (var i = 0 ; i < 255; i++) {
            path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('stroke-dasharray', '4,1');
        }
        var doDraw = function () {
            requestAnimationFrame(doDraw);
            analyser.getByteFrequencyData(frequencyArray);
          	var adjustedLength;
            var fullArray = Object.values(frequencyArray)
            var bassArray, midArray, hiArray
            var bassLength, midLength, hiLength

            bassArray = fullArray.splice(0, Math.ceil(255/3))
            bassLength = bassArray.reduce((a, b) => a + b) / bassArray.length

            midArray = fullArray.splice(Math.ceil(255/3), Math.ceil(255/3))
            midLength = midArray.reduce((a, b) => a + b) / midArray.length

            hiArray = fullArray.splice(Math.ceil(255/3)*2, Math.ceil(255/3))
            hiLength = hiArray.reduce((a, b) => a + b) / hiArray.length

            bassElms.forEach((elm, index) => {
              var newOpacity = Math.random()*10+index < bassLength ? 1 : 0

              if ($(elm).css('opacity') == 0 && newOpacity) {
                var color = getRandomColor();
                //color = 'white'
                $(elm).css('fill', color)
              }
              $(elm).css('opacity', newOpacity)
            })
            midElms.forEach((elm, index) => {
              var newOpacity = Math.random()*10+index < bassLength ? 1 : 0

              if ($(elm).css('opacity') == 0 && newOpacity) {
                var color = getRandomColor();
                //color = 'white'
                $(elm).css('fill', color)
              }
              $(elm).css('opacity', newOpacity)
            })
            hiElms.forEach((elm, index) => {
              var newOpacity = Math.random()*10+index < bassLength ? 1 : 0

              if ($(elm).css('opacity') == 0 && newOpacity) {
                var color = getRandomColor();
                //color = 'white'
                $(elm).css('fill', color)
              }
              $(elm).css('opacity', newOpacity)
            })
        }
        doDraw();
    }

    var soundNotAllowed = function (error) {
        h.innerHTML = "You must allow your microphone.";
        console.log(error);
    }

    navigator.getUserMedia({audio:true}, soundAllowed, soundNotAllowed);

};
