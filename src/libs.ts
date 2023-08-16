import BuyOrderIssuer001 from "./assets/v0.0.1/buy_order_issuer.json";
import DirectBuyIssuer001 from "./assets/v0.0.1/direct_buy_issuer.json";
import DividendDistribution001 from "./assets/v0.0.1/dividend_distribution.json";
import Forwarder001 from "./assets/v0.0.1/forwarder.json";
import OrderFees001 from "./assets/v0.0.1/order_fees.json";
import SellOrderProcessor001 from "./assets/v0.0.1/sell_order_processor.json";
import TransferRestrictor001 from "./assets/v0.0.1/transfer_restrictor.json";
import BuyProcessor01 from "./assets/v0.1/buy_processor.json";
import SellProcessor01 from "./assets/v0.1/sell_processor.json";
import BuyUnlockedProcessor01 from "./assets/v0.1/buy_unlocked_processor.json";
import Forwarder01 from "./assets/v0.1/forwarder.json";
import TokenLockCheck01 from "./assets/v0.1/token_lock_check.json";
import { DeploymentFilter, SingletonDeployment } from "./types";
import { findDeployment } from "./utils";

const buyOrderIssuerDeployments: SingletonDeployment[] = [BuyOrderIssuer001];

export const getBuyOrderIssuerDeployment = (
  filter?: DeploymentFilter
): SingletonDeployment | undefined => {
  return findDeployment(filter, buyOrderIssuerDeployments);
};

const directBuyIssuerDeployments: SingletonDeployment[] = [DirectBuyIssuer001];

export const getDirectBuyIssuerDeployment = (
  filter?: DeploymentFilter
): SingletonDeployment | undefined => {
  return findDeployment(filter, directBuyIssuerDeployments);
};

const dividendDistributionDeployments: SingletonDeployment[] = [DividendDistribution001];

export const getDividendDistributionDeployment = (
  filter?: DeploymentFilter
): SingletonDeployment | undefined => {
  return findDeployment(filter, dividendDistributionDeployments);
};

const forwarderDeployments: SingletonDeployment[] = [Forwarder001, Forwarder01];

export const getForwarderDeployment = (
  filter?: DeploymentFilter
): SingletonDeployment | undefined => {
  return findDeployment(filter, forwarderDeployments);
};

const orderFeesDeployments: SingletonDeployment[] = [OrderFees001];

export const getOrderFeesDeployment = (
  filter?: DeploymentFilter
): SingletonDeployment | undefined => {
  return findDeployment(filter, orderFeesDeployments);
};

const sellOrderIssuerDeployments: SingletonDeployment[] = [
  SellOrderProcessor001,
];

export const getSellOrderIssuerDeployment = (
  filter?: DeploymentFilter
): SingletonDeployment | undefined => {
  return findDeployment(filter, sellOrderIssuerDeployments);
};

const transferRestrictorDeployments: SingletonDeployment[] = [
  TransferRestrictor001,
];

export const getTransferRestrictorDeployment = (
  filter?: DeploymentFilter
): SingletonDeployment | undefined => {
  return findDeployment(filter, transferRestrictorDeployments);
};

const buyProcessorDeployments: SingletonDeployment[] = [BuyProcessor01];

export const getBuyProcessorDeployment = (
  filter?: DeploymentFilter
): SingletonDeployment | undefined => {
  return findDeployment(filter, buyProcessorDeployments);
}

const sellProcessorDeployments: SingletonDeployment[] = [SellProcessor01];

export const getSellProcessorDeployment = (
  filter?: DeploymentFilter
): SingletonDeployment | undefined => {
  return findDeployment(filter, sellProcessorDeployments);
}

const buyUnlockedProcessorDeployments: SingletonDeployment[] = [BuyUnlockedProcessor01];

export const getBuyUnlockedProcessorDeployment = (
  filter?: DeploymentFilter
): SingletonDeployment | undefined => {
  return findDeployment(filter, buyUnlockedProcessorDeployments);
}

const tokenLockCheckDeployments: SingletonDeployment[] = [TokenLockCheck01];

export const getTokenLockCheckDeployment = (
  filter?: DeploymentFilter
): SingletonDeployment | undefined => {
  return findDeployment(filter, tokenLockCheckDeployments);
}

