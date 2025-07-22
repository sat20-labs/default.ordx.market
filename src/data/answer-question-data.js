const answer_question_data = [
  {
    id: 1,
    question_en: "What services does the platform offer?",
    question_zh: "平台提供哪些服务？",
    answer_en: <>L1 DEX:Minting and trading services for Satoshi assets, SFT assets, BTC Name assets, DeWEB services, and Rare Satoshi listings and trades.<br/>
    L2 DEX: One-click deployment and launch of protocol assets such as OrdX, Runes, BRC20, and Ordinals; along with a secure, fast, and cost-effective order book, swap trading, and related BtcFi services.<br/></>,
    answer_zh: <>L1 市场:提供聪资产、SFT资产、BTC域名、DeWEB服务、稀有聪挂牌与交易等铸造和交易服务。<br/>
    L2 市场: 支持 OrdX、Runes、BRC20、Ordinals 等协议资产的一键部署，发发射；以及安全、快捷，经济的订单薄，SWAP交易，以及相关的BtcFi服务。</>,
    accordion_id: "headingOne",
    collapsed: "collapsed",
    data_bs_target: "#collapseOne",
    aria_controls: "collapseOne",
    actice: "",
  },
  {
    id:2,
    question_en: "What is the SatoshiNet, and difference between L1 and L2?",
    question_zh: "什么是SatoshiNet以及 L1 和 L2 有什么区别？",
    answer_en: <>SatoshiNet is a decentralized network built with BTCD core and powered by Lightning Channels, designed to support Layer 1 (L1) Bitcoin asset protocols.<br/>
    L1 refers to the base layer of the blockchain — the Bitcoin mainnet — where all transactions are recorded directly on-chain.<br/>
    L2 (Layer 2) solutions are built on top of L1 to enhance scalability and transaction speed, enabling faster and cheaper transactions without congesting the mainchain.</>,
    answer_zh: <>SatoshiNet 是一个基于闪电通道、采用 BTCD 核心代码构建的去中心化网络，支持多种比特币主链（L1）资产协议。<br/>
    L1 指的是第一层区块链，即比特币主链，所有交易直接记录在链上。<br/>
    L2 是构建在 L1 之上的扩展解决方案，旨在提升可扩展性与交易速度，允许更快速、低成本的交易，同时减轻主链负担。</>,
  },
  {id:3,
    question_en: "What is the SAT20 Wallet?",
    question_zh: "什么是SAT20钱包？",
    answer_en: <>SAT20 Wallet is a professional digital asset wallet designed for seamless management, storage, viewing, transfers, and signing of assets based on protocols such as OrdX, Runes, BRC20, and Ordinals. It supports deposit and withdrawal of SatoshiNet assets, enables opening and management of Lightning Channels, allows cross-protocol asset transfers across OrdX, Runes, Ordinals, and BRC20, and includes a one-sided exit function. It provides full support for Bitcoin-native asset interactions.</>,
    answer_zh: <>SAT20 钱包 是一个专业的数字资产钱包，支持便捷地管理、存储、查看、转账及签名交易 OrdX、Runes、BRC20、Ordinals 等多种协议资产。同时支持聪网资产的充值与提取、闪电通道的开启与管理，具备跨协议资产流通能力，并提供单边退出功能，全面支持比特币原生资产的应用与交互。</>,
    
  },
  {
    id: 4,
    question_en: "What is a Rare Satoshi?",
    question_zh: "什么是稀有聪？",
    answer_en: <>A Rare Satoshi is a unique or historically significant satoshi, often valued for its scarcity and collectible nature within the Bitcoin ecosystem.</>,
    answer_zh: <>稀有聪是指独特或具有历史意义的聪，因其稀缺性和收藏价值在比特币生态中备受青睐。</>,
    accordion_id: "headingTwo",
    collapsed: "collapsed",
    data_bs_target: "#collapseTwo",
    aria_controls: "collapseTwo",
    actice: "",
  },
  {
    id: 5,
    question_en: "What is SFT?",
    question_zh: "什么是SFT？",
    answer_en: <>SFT (Semi-Fungible Token) combines features of both fungible and non-fungible tokens, allowing assets to transition between being interchangeable and unique based on context or usage.</>,
    answer_zh: <>SFT（半同质化代币）结合了同质化和非同质化代币的特性，可根据场景或用途在可替代和唯一性之间切换。</>,
    accordion_id: "headingThree",
    collapsed: "",
    data_bs_target: "#collapseThree",
    aria_expanded: true,
    aria_controls: "collapseThree",
    show: true,
    actice: "",
  },
  {
    id: 6,
    question_en: "What is DeWEB?",
    question_zh: "什么是DeWEB？",
    answer_en: <>DeWEB is a decentralized Web 3.0 personal digital space, allowing users to manage their digital identity, assets, and data in a fully decentralized manner.</>,
    answer_zh: <>DeWEB是去中心化Web3.0个人数字空间，用户可在完全去中心化的环境下管理数字身份、资产和数据。</>,
    accordion_id: "headingFour",
    collapsed: "collapsed",
    data_bs_target: "#collapseFour",
    aria_controls: "collapseFour",
    actice: "",
  },
  {
    id: 7,
    question_en: "How do I manage my digital assets?",
    question_zh: "如何管理我的数字资产？",
    answer_en: <>
      1. Click “Connect Wallet” and follow the prompts.<br/>
      2. Go to “My Assets”: View your assets on this page.<br/>
      3. Categorize: Organize by type and use filters.<br/>
      4. Manage: Check details and perform actions like transfers.
    </>,
    answer_zh: <>
      1. 点击“连接钱包”并按提示操作。<br/>
      2. 进入“我的资产”：在此页面查看您的资产。<br/>
      3. 分类管理：按类型整理并使用筛选。<br/>
      4. 管理：查看详情并进行转账等操作。
    </>,
    accordion_id: "headingFive",
    collapsed: "collapsed",
    data_bs_target: "#collapseFive",
    aria_controls: "collapseFive",
    actice: "",
  },
];
export default answer_question_data;
