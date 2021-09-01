What is a gwei?

A gwei is defined as one billionth of an ether, so it is a tiny tiny fraction of a cent ($2e-7) at current ETH prices.

What is a gas price?

A gas price (usually given in gwei, e.g. 5 gwei) is the amount you pay PER UNIT OF GAS. Just like how the quoted price at a real life gas station is per unit (usually $/gallon or $/liter), in ETH, we also pay per unit. So importantly, the gas price is not the total cost of a transaction, which will be much higher due to most transaction using many units of gas.

ETH send: ~21,000 units of gas
Claiming rewards: ~1,000,000 units of gas
Burning sUSD : ~1,000,000 units of gas
Minting sUSD: ~1,000,000 units of gas
Sending SNX on a wallet with no staked SNX: ~100,000 units of gas
Sending SNX on a wallet with staked SNX: ~800,000 units of gas
Sending synths: ~100,000 units of gas
Exchanging synths: ~500,000 units of gas
What is a gas limit?

A gas limit is a maximum amount of gas that can be expended by one transaction. It usually should be set by default to slightly above the actual number of units of gas expected to be used. Do not decrease this as it may cause your transaction to fail.

Why does gas price fluctuate/why did it get so high? The gas price is too damn high!

The gas price is a function of supply and demand for sending ETH transactions. When many people want to use the ETH network at the same time, the gas price tends to increase. Miners will naturally want to include transactions that pay higher fees first, so setting a higher gas price will tend to get your transaction confirmed sooner, while using a lower gas price will force you to wait longer.

Currently (May 2020), we are experiencing a period of high gas prices, which seems to be mostly a result of Tether and a few Ponzi schemes that are using high amounts of gas. This situation may or may not improve.

Why does ethgasstation say it should only cost $0.10 for a transaction, but mintr says it will cost 10x or more that amount?

13.5 gwei, $0.056 per transfer!

The value in $ being quoted by ETH gas station (in the screenshot above) is the cost of an ETH transfer. It is NOT the value of 13.5 gwei, and it is not the cost of sending all kinds of transactions with that gas price. It’s kinda like if you someone quoted you how much it cost to fill up their sedan's gas tank at $X/gallon.

If you then went to the same gas station and tried to fill up a truck with a huge gas tank, you should expect to pay more than they did (even at the same rate!). Likewise, when you do something complicated like a mintr transaction, the total cost will be much higher.

Help, the gas costs are so high, it is not worth it for me to claim my rewards!

You have a few options:

Eat the high gas costs and claim.
Wait for ETH network to become less congested (and lower gas prices to go through)
Put in an transaction with low gwei and wait for it to be claimed (but this will prevent you from making other transactions until it gets confirmed).
Use https://delegatr.synthetix.io/ to delegate another wallet and do option 3 using that wallet (this means you can still use your main wallet for other transactions while you wait)
Use the SNX Link autoclaim feature to have someone else claim for you (will probably not lower your costs much, but may be more convenient)
Lend your SNX on aave, poloniex, nuo instead of staking. Returns will be lower but still quite good.
Why can’t we stack up rewards and claim every two weeks, every month, etc.?

The security of the system demands that people maintain their c-ratios regularly. If minters were able to claim every month instead of every week, it would let them neglect their c-ratio for a significant amount of time, which could put the system in danger.

What are the plans for addressing the high cost of gas?

In the past, periods of high gas cost have not lasted forever, so there is some hope there. People are working on pooled SNX staking (like xSNX from @mjc716) as well as soft staking from exchanges like Poloniex. There are also layer 2 solutions being looked at. In the meantime, there have been many efforts (particularly from @Anton Bukov) that have reduced some of the gas usage of the SNX contracts.

Why does my transaction fail, saying “Warning! Error encountered during contract execution [Out of gas] “?

There are two likely possibilities:

You set your gas limit too low. (Do not manually lower this value, as this is likely to cause this issue). To fix it, try increasing the gas limit (NOT gas price)
step1 step2

Something else went wrong. While there is an effort to make more meaningful error message, you will sometimes get this when there is a different reason your transaction failed.
C-ratio too low (needs to be at least 792% at the time of confirmation to claim)

Trying to move locked SNX (you need to burn more sUSD or send less SNX)

Trying to move synths that are subject to fee reclamation (send via the mintr interface in order to resolve this)

Help my transaction is stuck and won’t go through

There are two likely reasons for this:

You used too low of a gas price for the transaction. Either speed up using metamask or cancel. Guide to cancelling transactions

You used too low of a gas price for a previous transaction (Etherscan will say something like “this transaction cannot be confirmed until one with a lower nonce goes through”). You will need to speed up or cancel that previous transaction.

