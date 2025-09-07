import axios from "axios";

const fetchAssetData = async (ticker) => {
  try {
    const url = `https://apiprd.ordx.market/ordx/GetAssetsSummary?assets_name=${ticker}&assets_type=ticker`;
    const response = await axios.get(url);

    if (response.data.code !== 200 || !response.data.data) {
      throw new Error(`Failed to fetch data for ticker ${ticker}`);
    }

    const summary = response.data.data.summary;

    return {
      name: summary.nickname,
      description: summary.description,
      logo: summary.logo,
      lowestPrice: summary.lowest_price,
      highestPrice: summary.highest_price,
      marketCap: summary.market_cap,
      holderCount: summary.holder_count,
      transactionVolume: summary.tx_total_volume,
      transactionCount: summary.tx_order_count,
    };
  } catch (error) {
    console.error(`Error fetching data for ticker ${ticker}:`, error);
    return null;
  }
};

//https://apiprd.ordx.market/stp/mainnet/info/contract/bc1qmgactfmdfympq5tqld7rc53y4dphvdyqnmtuuv9jwgpn7hqwr2kss26dls_ordx:f:ordxsat_amm.tc

export default fetchAssetData;