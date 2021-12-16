// @TODO add proper configuring flow
export const getConfig = (catTextureAsset: any, moonTextureAsset: any) => [
  {
    name: 'cat',
    movement: {
      speedX: 0.7,
      speedY: 0.7,
    },
    texture: {
      source: catTextureAsset,
      height: 32,
      width: 32,
      tileCols: 3,
    },
    min: {
      row: 33,
      col: 12,
    },
    max: {
      row: 33,
      col: 24,
    },
  },
  {
    name: 'moon',
    movement: {
      speedX: 4,
      speedY: 4,
    },
    texture: {
      source: moonTextureAsset,
      height: 256,
      width: 256,
      tileCols: 0,
      drawOffset: 6,
      drawWidthOffset: 18,
      drawHeightOffset: 18,
    },
    min: {
      row: 0,
      col: 35,
    },
    max: {
      row: 0,
      col: 50,
    },
  },
];
