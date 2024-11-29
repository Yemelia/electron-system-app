export type EventPayloadMapping = {
  statistics: Statistics;
  getStaticData: Promise<StaticData>;
  getAppDataInfo: Promise<FoldersDetails>;
  changeView: View;
  sendFrameAction: FrameWidowAction;
  openFolderByPath: OpenFolderActionPayload;
};