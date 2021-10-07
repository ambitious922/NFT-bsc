import App from "./App.svelte";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

const app = new App({
  target: document.body
});

export default app;

// Create a connector
const connector = new WalletConnect({
  bridge: "https://bridge.walletconnect.org", // Required
  qrcodeModal: QRCodeModal
});

// Check if connection is already established
if (!connector.connected) {
  // create new session
  connector.createSession();
}

// Subscribe to connection events
connector.on("connect", (error, payload) => {
  if (error) {
    throw error;
  }

  // Get provided accounts and chainId
  const { accounts, chainId } = payload.params[0];

  // Draft transaction
  const tx = {
    from: accounts, // Required
    to: "0xf5A07f885B9C2BC30e3766F5727E05bCE8b2B549", // Required (for non contract deployments)
    data: "0x", // Required
    gasPrice: "0x02540be400", // Optional
    gas: "0x9c40", // Optional
    value: "0x00", // Optional
    nonce: "0x0114" // Optional
  };

  // Send transaction
  /*connector
    .sendTransaction(tx)
    .then((result) => {
      // Returns transaction id (hash)
      console.log(result);
    })
    .catch((error) => {
      // Error returned when rejected
      console.error(error);
    });
*/
});

connector.on("session_update", (error, payload) => {
  if (error) {
    throw error;
  }

  // Get updated accounts and chainId
  const { accounts, chainId } = payload.params[0];
});

connector.on("disconnect", (error, payload) => {
  if (error) {
    throw error;
  }

  // Delete connector
});