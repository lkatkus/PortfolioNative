import { Asset } from 'expo-asset';

export const loadAsset = async (img_url: string) => {
  const loadedAsset = Asset.fromModule(img_url);
  return loadedAsset.downloadAsync();
};
