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
  gl: any,
  { handleGameReady, handleOpenTab, handleOpenPage, handleSetEvent }: any
) => {
  const levelTextureAsset = await loadAsset(
    require('../../../assets/textures/level-tilesheet.png')
  );
  const playerTextureAsset = await loadAsset(
    require('../../../assets/textures/player-spritesheet.png')
  );
  const playerTextureLeveledAsset = await loadAsset(
    require('../../../assets/textures/playerspritesheet-leveled.png')
  );
  const catTextureAsset = await loadAsset(
    require('../../../assets/textures/cat-spritesheet.png')
  );
  const moonTextureAsset = await loadAsset(
    require('../../../assets/textures/traveller-spritesheet.png')
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
      npc: getNpcConfig(catTextureAsset, moonTextureAsset),
      level: getLevelConfig(levelTextureAsset),
    },
    {
      onLoadGame: (game: any) => {
        game.startGame();
        handleGameReady(game);
      },
    }
  );
};
