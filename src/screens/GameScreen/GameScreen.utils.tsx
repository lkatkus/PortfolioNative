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
    require('./assets/level-tilesheet.png')
  );
  const playerTextureAsset = await loadAsset(
    require('./assets/player-spritesheet.png')
  );
  const catTextureAsset = await loadAsset(
    require('./assets/cat-spritesheet.png')
  );

  new LaikaGame(
    {
      initRenderer: () => new WebGlRenderer(gl),
      events: getEventsConfig({
        openTab: handleOpenTab,
        openPage: handleOpenPage,
        setEvent: handleSetEvent,
      }),
      player: getPlayerConfig(playerTextureAsset),
      npc: getNpcConfig(catTextureAsset),
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
