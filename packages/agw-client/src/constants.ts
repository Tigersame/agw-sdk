// AA smart contract deployment
const SMART_ACCOUNT_FACTORY_ADDRESS =
  '0xe887e54D74893191F323711d3419e46f7138fc2D';

// Batch caller contract deployment
const BATCH_CALLER_ADDRESS = '0x22EF9f2068d803C70514DC1e180066C57c6DB3dF';

// AA wallet validator contract deployment
const EOA_VALIDATOR_ADDRESS = '0xEFE7b4E2e0d9e56229E3E8F4297131ED7B32a4C5';

const SESSION_KEY_VALIDATOR_ADDRESS =
  '0xFf67B7775795dBa1d319702c271979c19926454b';

const CONTRACT_DEPLOYER_ADDRESS =
  '0x0000000000000000000000000000000000008006' as const;

const INSUFFICIENT_BALANCE_SELECTOR = '0xe7931438' as const;

export {
  BATCH_CALLER_ADDRESS,
  CONTRACT_DEPLOYER_ADDRESS,
  EOA_VALIDATOR_ADDRESS,
  INSUFFICIENT_BALANCE_SELECTOR,
  SESSION_KEY_VALIDATOR_ADDRESS,
  SMART_ACCOUNT_FACTORY_ADDRESS,
};
