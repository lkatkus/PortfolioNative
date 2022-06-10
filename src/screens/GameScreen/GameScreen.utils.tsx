import { Asset } from 'expo-asset';
import { Game as LaikaGame, WebGlRenderer } from 'laikajs';

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

  new LaikaGame(
    {
      initRenderer: () => new WebGlRenderer(gl, { clearColor: [0, 0, 0, 0] }),
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
      onLoadGame: (game: LaikaGame) => {
        game.startGame();
        handleGameReady(game);
      },
      onAfterInit: (game: LaikaGame) => {
        // game.audioPlayer.preload('main', music.MainTheme, {
        //   loop: true,
        //   volume: 0.4,
        // });
      },
      onDraw: (game) => {},
    }
  );
};
