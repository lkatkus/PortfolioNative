import { Asset } from 'expo-asset';
import { Game, WebGlRenderer, AudioPlayer } from 'laikajs';

import { NativeAudioElement } from '@src/components';
import {
  getPlayerConfig,
  getNpcConfig,
  getLevelConfig,
  getEventsConfig,
} from './config';

const loadAsset = async (img_url: string) => {
  const loadedAsset = Asset.fromModule(img_url);
  return loadedAsset.downloadAsync();
};

export const initLaikaGame = async (
  gl: WebGLRenderingContext,
  { handleGameReady, handleOpenTab, handleOpenPage, handleSetEvent }: any
) => {
  const levelTextureAsset = await loadAsset(
    require('../../../assets/textures/level-tilesheet.png')
  );
  const playerTextureAsset = await loadAsset(
    require('../../../assets/textures/player-sprite.png')
  );
  const playerTextureLeveledAsset = await loadAsset(
    require('../../../assets/textures/player-leveled-sprite.png')
  );
  const catTextureAsset = await loadAsset(
    require('../../../assets/textures/cat-sprite.png')
  );
  const dogTextureAsset = await loadAsset(
    require('../../../assets/textures/dog-sprite.png')
  );
  const moonTextureAsset = await loadAsset(
    require('../../../assets/textures/traveller-sprite.png')
  );

  new Game(
    {
      initRenderer: () => new WebGlRenderer(gl, { clearColor: [0, 0, 0, 0] }),
      initAudioPlayer: () =>
        new AudioPlayer(NativeAudioElement, {
          music: { on: true },
          sfx: { on: true },
        }),
      events: getEventsConfig(
        {
          openTab: handleOpenTab,
          openPage: handleOpenPage,
          setEvent: handleSetEvent,
        },
        {
          playerLeveledTexture: playerTextureLeveledAsset,
        }
      ),
      player: getPlayerConfig(playerTextureAsset),
      npc: getNpcConfig(catTextureAsset, moonTextureAsset, dogTextureAsset),
      level: getLevelConfig(levelTextureAsset),
    },
    {
      onLoadGame: (game: Game) => {
        game.startGame();
        game.audioPlayer.play('main');

        handleGameReady(game);
      },
      onAfterInit: (game: Game) => {
        game.audioPlayer.preload(
          'main',
          require('../../../assets/audio/music/8-Bit-Techno.mp3'),
          {
            loop: true,
            // @TODO implement volume controls
            volume: 0.4,
          }
        );
      },
      onDraw: (game) => {},
    }
  );
};
