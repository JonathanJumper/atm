import data from '../data';

/**
 * GET /api/info
 */
export function info(req, res) {
  return res.status(200).send({
    success: true,
    message: 'info retrieved successfully',
    bills: data.bills
  });
}

/**
 * POST /api/withdraw
 */
export function withdraw(req, res) {
  let amount = req.body;
  amount /= 1000;
  if(amount % 10 === 0){
    if(amount < 20 || amount > 600){

      const recur = (amount, nominals) => {
        let nominal = nominals[0];
        let count = Math.min(data[nominal], Math.floor(amount / nominal));
        for (let i = count; i >= 0; i--) {
          let result = recur(amount - i*nominal, nominals.slice(1));
          if (result) return i ? { [nominal]: i, ...result } : result;
        }
      }
      return recur(amount, Object.keys(data).map(Number).sort((a,b) => b - a));

    }
    else{
      return res.status(400).send({
        success: false,
        message: 'amount should be greater than 20k and lesser than 600k ',
      })
    }
  }
  else {
    return res.status(400).send({
      success: false,
      message: 'amount should be a multiple of 10k',
    })
  }
}

/**
 * GET /api/log
 */
export function log(req, res) {
  return res.status(200).send({
    success: true,
    message: 'log retrieved successfully',
    log: data.log
  });
}

