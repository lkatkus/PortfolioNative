import { Asset } from 'expo-asset';
import { Game, WebGlRenderer, AudioPlayer, IColor } from 'laikajs';

import { NativeAudioElement } from '@src/components';
import {
  getPlayerConfig,
  getNpcConfig,
  getLevelConfig,
  getEventsConfig,
} from './config';

const START_ROW = 24;
const END_ROW = 17;
const COLOR_TOP_START: IColor = [100, 150, 255];
const COLOR_TOP_END: IColor = [20, 20, 35];
const COLOR_BOTTOM_START: IColor = [240, 240, 240];
const COLOR_BOTTOM_END: IColor = [50, 76, 118];

const loadAsset = async (img_url: string) => {
  const loadedAsset = Asset.fromModule(img_url);
  return loadedAsset.downloadAsync();
};

const getDiff = (start: number, end: number, offset: number) => {
  const diff = (start - end) * offset;

  return start - diff;
};

const getColorDiff = (start: IColor, end: IColor, offset: number) => {
  return start.map((c1, i) => {
    return getDiff(c1, end[i], offset);
  });
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
      onDraw: (game) => {
        let offset = 0;

        const START_Y = START_ROW * game.level.tileSize;
        const END_Y = END_ROW * game.level.tileSize;

        if (game.player.row < START_ROW) {
          const diff = (START_Y - game.player.y) / (START_Y - END_Y);

          offset = diff > 1 ? 1 : Number(diff.toPrecision(2));
        }

        const colorTop = getColorDiff(COLOR_TOP_START, COLOR_TOP_END, offset);
        const colorBottom = getColorDiff(
          COLOR_BOTTOM_START,
          COLOR_BOTTOM_END,
          offset
        );

        const normalizedColorTop = colorTop.map((c) => c / 255) as IColor;
        const normalizedColorBottom = colorBottom.map((c) => c / 255) as IColor;

        game.renderer.skyRenderer.bgColor = {
          type: 'gradient',
          color: [normalizedColorTop, normalizedColorBottom],
        };
      },
    }
  );
};
