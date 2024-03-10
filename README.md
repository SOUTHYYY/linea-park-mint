# linea-park-mint

Helps to easy mint NTF from Linea Park Quest

Clone the project

```bash
  git clone https://github.com/SOUTHYYY/linea-park-mint.git
```

Go to the project directory

```bash
  cd linea-park-mint
```

Install dependencies

```bash
  npm install
```
OR 
```bash
  yarn
```


Conigure file `contants.ts`

```javascript
// Infura RPC Api Key
export const InfuraApiKey = 'HERE_IS_MY_API_KEY';

// Приватный ключ, начинающийся с 0x
export const PrivateKey = '0x....PRIVATE_KEY_';

// После кажждой транзакции скрипт будет ожидать случайное кол-во секунд в диапазоне от [MIN, MAX]
export const WAIT_TIMEOUT_RANGE = [40, 120];

// Сколько раз повторять отправку транзы, если она зафейлится
export const ATTEMPS_COUNT = 3;

export const Networks = {
  ETHEREUM_MAINNET: 'mainnet',
  LINEA_MAINNET: 'linea-mainnet',
};
```

Run the script

```bash
  npm run start
```

