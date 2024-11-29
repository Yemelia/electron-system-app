import * as os from 'os';
import * as osUtils from 'os-utils';
import * as si from 'systeminformation';
import * as fs from 'fs';

export const getSystemInfo = async () => {
  const totalStorage = getStorageData().total;
  const cpuModel = os.cpus()[0].model;
  const totalMemoryGB = Math.floor(osUtils.totalmem() / 1024);

  const gpuInfo = await getGpuInfo();
  const gpuModel = gpuInfo.vendor + ' ' + gpuInfo.model;

  return {
    totalStorage,
    cpuModel,
    gpuModel,
    totalMemoryGB,
  }
};

const getGpuInfo = async () => {
  const { controllers } = await si.graphics()

  return controllers[0];
}

const getStorageData = () => {
  const stats = fs.statfsSync(process.platform === 'win32' ? 'C://' : '/');
  const total = stats.bsize * stats.blocks;
  const free = stats.bsize * stats.bfree;

  return {
    total: Math.floor(total / 1_000_000_000),
    usage: 1 - free / total,
  };
}