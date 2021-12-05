// @TODO add proper configuring flow
export const getConfig = (catTextureAsset: any) => [
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
];
