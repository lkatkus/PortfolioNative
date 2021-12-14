export const getConfig = (playerTextureAsset: any) => ({
  name: 'player',
  movement: {
    speedX: 0.18,
    speedY: 0.2,
    speedFallY: 12,
  },
  texture: {
    source: playerTextureAsset,
    // @TODO add proper configuring flow
    height: 32,
    width: 32,
    tileCols: 7,
    drawOffset: 1,
    drawHeightOffset: 2,
    drawWidthOffset: 2,
  },
});
