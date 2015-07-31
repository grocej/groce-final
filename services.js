(function() {
  'use strict';
  angular
    .module('bowieApp')
    .factory('SongService', function() {

      var getSong = function (callback) {
          blip.sampleLoader()
            .samples({
              'kook_01': 'sounds/kook_01.mp3',
              'andy_01': 'sounds/andy_01.mp3',
              'bitch_01': 'sounds/bitch_01.mp3',
              'bitch_02': 'sounds/bitch_02.mp3',
              'pretty_01': 'sounds/pretty_01.mp3',
              'pretty_02': 'sounds/pretty_02.mp3',
              'pretty_03': 'sounds/pretty_03.mp3',
              'changes_01': 'sounds/changes_01.mp3',
              'moon_01': 'sounds/moon_01.mp3',
              'moon_02': 'sounds/moon_02.mp3',
              'moon_03': 'sounds/moon_03.mp3',
              'quick_01': 'sounds/quick_01.mp3',
              'quick_02': 'sounds/quick_02.mp3',
              'quick_03': 'sounds/quick_03.mp3',
              'mansold_01': 'sounds/mansold_01.mp3',
              'ziggy_01': 'sounds/ziggy_01.mp3',
              'rebel_01': 'sounds/rebel_01.mp3',
              'golden_01': 'sounds/golden_01.mp3',
              'fill_01': 'sounds/fill_01.mp3',
              'young_01': 'sounds/young_01.mp3',
              'oddity_01': 'sounds/oddity_01.mp3',
              'oddity_02': 'sounds/oddity_02.mp3',
              'fashion_01': 'sounds/fashion_01.mp3',
              'suffra_01': 'sounds/suffra_01.mp3',
              'suffra_02': 'sounds/suffra_02.mp3',
              'ashes_01': 'sounds/ashes_01.mp3',
              'kook_02': 'sounds/kook_02.mp3',
              'china_01': 'sounds/china_01.mp3',
              'china_02': 'sounds/china_02.mp3',
              'china_03': 'sounds/china_03.mp3',
              'heroes_01': 'sounds/heroes_01.mp3',
              'heroes_02': 'sounds/heroes_02.mp3'
              })
            .done(callback)
            .load();

        function callback() {
            console.log("loading", blip.sampleLoader().samples);
            // blip.sample('kook_02') // is an AudioBuffer
            var myBowie1 = blip.clip().sample('kook_01');
            var myBowie2 = blip.clip().sample('andy_01');
            var myBowie3 = blip.clip().sample('bitch_01');
            var myBowie4 = blip.clip().sample('bitch_02');
            var myBowie5 = blip.clip().sample('pretty_01');
            var myBowie6 = blip.clip().sample('pretty_02');
            var myBowie7 = blip.clip().sample('pretty_03');
            var myBowie8 = blip.clip().sample('changes_01');
            var myBowie9 = blip.clip().sample('moon_01');
            var myBowie10 = blip.clip().sample('moon_02');
            var myBowie11 = blip.clip().sample('moon_03');
            var myBowie12 = blip.clip().sample('quick_01');
            var myBowie13 = blip.clip().sample('quick_02');
            var myBowie14 = blip.clip().sample('quick_03');
            var myBowie15 = blip.clip().sample('mansold_01');
            var myBowie16 = blip.clip().sample('ziggy_01');
            var myBowie17 = blip.clip().sample('rebel_01');
            var myBowie18 = blip.clip().sample('golden_01');
            var myBowie19 = blip.clip().sample('fill_01');
            var myBowie20 = blip.clip().sample('young_01');
            var myBowie21 = blip.clip().sample('oddity_01');
            var myBowie22 = blip.clip().sample('oddity_02');
            var myBowie23 = blip.clip().sample('fashion_01');
            var myBowie24 = blip.clip().sample('suffra_01');
            var myBowie25 = blip.clip().sample('suffra_02');
            var myBowie26 = blip.clip().sample('ashes_01');
            var myBowie27 = blip.clip().sample('kook_02');
            var myBowie28 = blip.clip().sample('china_01');
            var myBowie29 = blip.clip().sample('china_02');
            var myBowie30 = blip.clip().sample('china_03');
            var myBowie31 = blip.clip().sample('heroes_01');
            var myBowie32 = blip.clip().sample('heroes_02');

            var bowieList1 = {
              kook_01: {
                song: myBowie1,
                lyric: "If you stay, you won't be sorry"
              },
              andy_01: {
                song: myBowie2,
                lyric: "What a jolly boring thing to do"
              },
              bitch_01: {
                song: myBowie3,
                lyric: "Oh God, I could do better than that"
              },
              bitch_02: {
                song: myBowie4,
                lyric: "Why didn't I say, No, No, No?"
              },
              pretty_01: {
                song: myBowie5,
                lyric: "Don't you know you're driving your mamas and papas insane?"
              },
              pretty_02: {
                song: myBowie6,
                lyric: "Wake up you sleepy head put on some clothes, shake up your bed"
              },
              pretty_03: {
                song: myBowie7,
                lyric: "No room for me, no fun for you"
              },
              changes_01: {
                song: myBowie8,
                lyric: "Ch-ch-ch-ch-changes"
              },
              moon_01: {
                song: myBowie9,
                lyric: "Freak out in a moonage daydream, oh yeah"
              },
              moon_02: {
                song: myBowie10,
                lyric: "Don't fake it baby, lay the real thing on me"
              },
              moon_03: {
                song: myBowie11,
                lyric: "You're squawking like a pink monkey bird!"
              },
              quick_01: {
                song: myBowie12,
                lyric: "Don't believe in yourself"
              },
              quick_02: {
                song: myBowie13,
                lyric: "I'm not a prophet or a stone age man"
              },
              quick_03: {
                song: myBowie14,
                lyric: "Just a mortal with potential of a Superman"
              },
              mansold_01: {
                song: myBowie15,
                lyric: "Who knows? Not me"
              },
              ziggy_01: {
                song: myBowie16,
                lyric: "I had to break up the band"
              },
              rebel_01: {
                song: myBowie17,
                lyric: "Hot tramp, I love you so"
              },
              golden_01: {
                song: myBowie18,
                lyric: "Nothing's gonna touch you in these Golden Years"
              },
              fill_01: {
                song: myBowie19,
                lyric: "Just remember lovers never lose"
              },
              young_01: {
                song: myBowie20,
                lyric: "Allllllllllllllllllll night"
              },
              oddity_01: {
                song: myBowie21,
                lyric: "Now it's time to leave the capsule if you dare"
              },
              oddity_02: {
                song: myBowie22,
                lyric: "Planet Earth is blue, and there's nothing I can do"
              },
              fashion_01: {
                song: myBowie23,
                lyric: "Beep Beep"
              },
              suffra_01: {
                song: myBowie24,
                lyric: "Ohhhh wham, bam, thank ya ma'am!"
              },
              suffra_02: {
                song: myBowie25,
                lyric: "Aww, leave me alone, you know..."
              },
              ashes_01: {
                song: myBowie26,
                lyric: "My mama said to get things done"
              },
              kook_02: {
                song: myBowie27,
                lyric: "Cuz we believe in you"
              },
              china_01: {
                song: myBowie28,
                lyric: "You shouldn't mess with me"
              },
              china_02: {
                song: myBowie29,
                lyric: "Oh baby, just you shut your mouth"
              },
              china_03: {
                song: myBowie30,
                lyric: "She says, ssssshhhhhhhhh"
              },
              heroes_01: {
                song: myBowie31,
                lyric: "I wish you could swim"
              },
              heroes_02: {
                song: myBowie32,
                lyric: "Just for one day"
              }

            };
            var randomBowie = Math.round(Math.random() * (31 - 0));
            console.log(randomBowie);
            var songsArr = Object.keys(bowieList1);
            console.log(bowieList1[songsArr[randomBowie]].lyric);
            return bowieList1[songsArr[randomBowie]].song.play();
        };
      }

      return {
        getSong: getSong
      };


    });


}());
