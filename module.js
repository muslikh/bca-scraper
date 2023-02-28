const parser = require('./lib/parser');

module.exports = {
  getBalance: async (username, password) => {
    try {
      const IP = await parser.getIP();
      await parser.login(username, password, IP);
    //  const menu = await parser.openSettlementMenu();
      const balance = await parser.balance();
      await parser.logout();
      // return menu;
      return balance;
    } catch (err) {
      await parser.logout();
      throw err;
    }
  },

  getSettlement: async (username, password,tglawal,blnawal,thnawal,tglakhir,blnakhir,thnakhir) => {
    try {
      const IP = await parser.getIP();
      await parser.login(username, password, IP);
      // await parser.balance();
      const settlement = await parser.settlement(tglawal,blnawal,thnawal,tglakhir,blnakhir,thnakhir);
      await parser.logout();
      return settlement;
    } catch (err) {
      await parser.logout();
      throw err;
    }
  },
  
  getSettlementLast: async (username, password) => {
    try {
      const IP = await parser.getIP();
      await parser.login(username, password, IP);
      // await parser.balance();
      const settlement = await parser.settlementLast();
      await parser.logout();
      return settlement;
    } catch (err) {
      await parser.logout();
      throw err;
    }
  }
};
