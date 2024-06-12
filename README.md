
# hardhat Ganache fork & any account unlock

This is a enviroment with an example where Ethereum blockchain has been forked with Ganache CLI, and a DAi holder account has been unlocked, Operations such as transfer, get balance operations can be executed from the unlocked account for example andcan be easily modified for other operations too.

# Build guide

Replace DAI_HOLDER in package.json & .env file with the account you would like to unlock.
Replace YOUR INFURA RPC URL in package.json with your Infura RPC or some other RPC ( make sure it facilitates forking ).

    npm install 

# Run

Fork & run the Ganache cli.
    npm run fork

Execute transfer.
    npm run transfer

Get balance of the DAI_HOLDER account.
    npm run balance
