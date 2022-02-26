const stringSimilarity = require("string-similarity");

const compareText = (req, res) => {
  if (process.env.padrao === req.body.padrao) {
  const {textIngles, speechTextUser  } = req.body
  let matches;

  try {

    if (speechTextUser.length === 0) {
      return res.status(201).json({error: false, message: "Processado com sucesso", result: "Erro Similaridade", porcentagem: '0' });
    }

    if (speechTextUser.length === 1) {
      matches = stringSimilarity.findBestMatch(textIngles.toLowerCase(), speechTextUser);

      if (matches.ratings[0].rating >= 0.6) {
        return res.status(201).json({error: false, message: "Processado com sucesso", result: "Sucesso", porcentagem: matches.ratings[0].rating });
      } else {
        return res.status(201).json({error: false, message: "Processado com sucesso", result: "Erro Similaridade", porcentagem: matches.ratings[0].rating });
      }

    } else {
      matches = stringSimilarity.findBestMatch(textIngles.toLowerCase(), speechTextUser);
      console.log('EXECUTOU O ELSE -> ', matches)
      //const result = matches.ratings.sort(function(a, b){return b.rating - a.rating;})[0];
      
      if (matches?.bestMatch?.rating >= 0.6) {
        return res.status(201).json({error: false, message: "Processado com sucesso", result: "Sucesso", porcentagem: matches?.bestMatch?.rating });
      } else {
        return res.status(201).json({error: false, message: "Processado com sucesso", result: "Erro Similaridade", porcentagem: matches?.bestMatch?.rating });
      }

    }

  } catch (error) {

    return res.status(404).json({ error: true,  message: "Ocorreu um erro interno, tente mais tarde!"});
  }

} else {
  res.send('Sem autorização')
  res.status(401)
}

}

module.exports = {
  compareText
}