  function samplePlayer() {

    blip.sampleLoader()
      .samples({
        'kook_01': 'sounds/kook_01.mp3',

        'andy_01': 'sounds/andy_01.mp3',

        'bitch_01': 'sounds/bitch_01.mp3',
        //'print_bitch_01': 'Why didn\'t I say, no, no, no',
        'bitch_02': 'sounds/bitch_02.mp3',

        'pretty_01': 'sounds/pretty_01.mp3',
        //'print_pretty_01': 'Wake up ya sleepyhead, pull on your clothes shake off your bed',

        'pretty_02': 'sounds/pretty_02.mp3',
        //'print_pretty_02': 'No room for me, no fun for you',

        'pretty_03': 'sounds/pretty_03.mp3',
        //'print_pretty_03': '',

        'changes_01': 'sounds/changes_01.mp3',
        //'print_changes_01': '',

        'moon_01': 'sounds/moon_01.mp3',
        //'print_quick_01': 'Don\'t fake it baby, lay the real thing on me',

        'moon_02': 'sounds/moon_02.mp3',
        //'print_moon_02': 'Freak out in a moonage daydream, oh yeah',

        'moon_03': 'sounds/moon_03.mp3',
        //'print_moon_03': 'Don\'t believe in yourself',

        'quick_01': 'sounds/quick_01.mp3',
        //'print_quick_01': 'I\'m not a prophet or a stone age man',

        'quick_02': 'sounds/quick_02.mp3',
        //'print_quick_02': 'Just a mortal with potential of a superman',

        'quick_03': 'sounds/quick_03.mp3',

        'mansold_01': 'sounds/mansold_01.mp3',

        'ziggy_01': 'sounds/ziggy_01.mp3',

        'rebel_01': 'sounds/rebel_01.mp3',

        'golden_01': 'sounds/golden_01.mp3',

        'fill_01': 'sounds/fill_01.mp3',

        'young_01': 'sounds/young_01.mp3',

        'oddity_01': 'sounds/oddity_01.mp3',
        //'print_oddity_01': 'Now it\'s time to leave the capsule if you dare',

        'oddity_02': 'sounds/oddity_02.mp3',
        //'print_oddity_02': 'Planet Earth is blue and there\'s nothing I can do',

        'fashion_01': 'sounds/fashion_01.mp3',

        'suffra_01': 'sounds/suffra_01.mp3',

        'suffra_02': 'sounds/suffra_02.mp3',

        'ashes_01': 'sounds/ashes_01.mp3',
        'print_ashes_01': 'My mama said to get things done',

        'kook_02': 'sounds/kook_02.mp3',

        'china_01': 'sounds/china_01.mp3',
        //'print_china_01': 'You shouldn\'t mess with me',

        'china_02': 'sounds/china_02.mp3',
        //'print_china_02': 'Oh baby, just you shut your mouth',

        'china_03': 'sounds/china_03.mp3',
        //'print_china_03': 'She says, ssssshhhhhh...',

        'heroes_01': 'sounds/heroes_01.mp3',
        //'print_heroes_01': 'I wish you could swim',

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

      var bowieList = [myBowie1,myBowie2,myBowie3,myBowie4,myBowie5,myBowie6,myBowie7,myBowie8,myBowie9,myBowie10,myBowie11,myBowie12,myBowie13,myBowie14,myBowie15,myBowie16,myBowie17,myBowie18,myBowie19,myBowie20,myBowie21,myBowie21,myBowie22,myBowie23,myBowie24,myBowie25,myBowie26,myBowie27,myBowie28,myBowie29,myBowie30,myBowie31,myBowie32]

      document.getElementById('play').addEventListener('click', function () {
        var randomBowie = Math.round(Math.random() * (32 - 1) + 1);
        console.log(randomBowie)
        bowieList[randomBowie].play();
      });

  }
};
