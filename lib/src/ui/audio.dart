import 'package:howler/howler.dart';

AudioPlayer _audioPlayer = _MutedAudioPlayer();

AudioPlayer get audioPlayer => _audioPlayer;

void switchAudioOnOff() {
  if (_audioPlayer is _HowlingAudioPlayer) {
    var howler = _audioPlayer as _HowlingAudioPlayer;
    howler._music.stopAll();
    howler._bleep.stopAll();
    _audioPlayer = _MutedAudioPlayer();
    return;
  }

  _audioPlayer = _HowlingAudioPlayer();
}

abstract class AudioPlayer {
  void bleep();
}

class _HowlingAudioPlayer implements AudioPlayer {
  final _music = Howl(
      src: ['audio/Theyre-Here_Looping.mp3'],
      loop: true,
      autoplay: true,
      volume: 0.4,
      onload: (e, s, i, s2) => print('music loaded: $s, $i, $s2'));

  final _bleep = Howl(
    src: ['audio/PremiumBeat_0013_cursor_click_11.wav'],
    preload: true,
  );

  @override
  void bleep() => _bleep.play();
}

class _MutedAudioPlayer implements AudioPlayer {
  @override
  void bleep() {
    print("Sound is off. No bleeping for you. Try Alt-S.");
  }
}
