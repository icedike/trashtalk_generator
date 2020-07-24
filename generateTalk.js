function randomTaskNPhrase(job, task, phrase) {
  let trashTalk = '身為一個' + job + ','
  trashTalk += task[Math.floor((Math.random() * task.length))]
  trashTalk = trashTalk + ',' + phrase[Math.floor(Math.random() * phrase.length)] + '吧！'
  return trashTalk
}

function generateTalk(option) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  const job = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }

  if (option.engineer === 'on') {
    return randomTaskNPhrase(job.engineer, task.engineer, phrase)
  }

  if (option.designer === 'on') {
    return randomTaskNPhrase(job.designer, task.designer, phrase)
  }

  if (option.entrepreneur === 'on') {
    return randomTaskNPhrase(job.entrepreneur, task.entrepreneur, phrase)
  }

  return '你沒有選擇任何一個職業喔！'
}
module.exports = generateTalk
