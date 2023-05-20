export interface SingletonDeployment {
  defaultAddress: string;
  version: string;
  abi: any[];
  networkAddresses: Record<string, string>;
  contractName: string;
}

export interface DeploymentFilter {
  version?: string;
  network?: string;
}
