import BridgedTokenFactory001 from "./assets/v0.0.1/bridged_token_factory.json";
import DirectBuyIssuer001 from "./assets/v0.0.1/direct_buy_issuer.json";
import FlatOrderFees001 from "./assets/v0.0.1/flat_order_fees.json";
import Messager001 from "./assets/v0.0.1/messager.json";
import SwapOrderIssuer001 from "./assets/v0.0.1/swap_order_issuer.json";
import TransferRestrictor001 from "./assets/v0.0.1/transfer_restrictor.json";
import { DeploymentFilter, SingletonDeployment } from "./types";
import { findDeployment } from "./utils";

const bridgedTokenFactoryDeployments: SingletonDeployment[] = [
  BridgedTokenFactory001,
];

export const getBridgedTokenFactoryDeployment = (
  filter?: DeploymentFilter
): SingletonDeployment | undefined => {
  return findDeployment(filter, bridgedTokenFactoryDeployments);
};

const directBuyIssuerDeployments: SingletonDeployment[] = [DirectBuyIssuer001];

export const getDirectBuyIssuerDeployment = (
  filter?: DeploymentFilter
): SingletonDeployment | undefined => {
  return findDeployment(filter, directBuyIssuerDeployments);
};

const flatOrderFeesDeployments: SingletonDeployment[] = [FlatOrderFees001];

export const getFlatOrderFeesDeployment = (
  filter?: DeploymentFilter
): SingletonDeployment | undefined => {
  return findDeployment(filter, flatOrderFeesDeployments);
};

const messagerDeployments: SingletonDeployment[] = [Messager001];

export const getMessagerDeployment = (
  filter?: DeploymentFilter
): SingletonDeployment | undefined => {
  return findDeployment(filter, messagerDeployments);
};

const swapOrderIssuerDeployments: SingletonDeployment[] = [SwapOrderIssuer001];

export const getSwapOrderIssuerDeployment = (
  filter?: DeploymentFilter
): SingletonDeployment | undefined => {
  return findDeployment(filter, swapOrderIssuerDeployments);
};

const transferRestrictorDeployments: SingletonDeployment[] = [
  TransferRestrictor001,
];

export const getTransferRestrictorDeployment = (
  filter?: DeploymentFilter
): SingletonDeployment | undefined => {
  return findDeployment(filter, transferRestrictorDeployments);
};
