// pick task and phrase randomly
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

  let trashTalk = {
    words: '',
    engineer: '',
    designer: '',
    entrepreneur: ''
  }

  // assign trash talk according to user's choice
  switch (option.target) {
    case 'engineer':
      trashTalk.words = randomTaskNPhrase(job.engineer, task.engineer, phrase)
      trashTalk.engineer = 'on'
      break
    case 'designer':
      trashTalk.words = randomTaskNPhrase(job.designer, task.designer, phrase)
      trashTalk.designer = 'on'
      break
    case 'entrepreneur':
      trashTalk.words = randomTaskNPhrase(job.entrepreneur, task.entrepreneur, phrase)
      trashTalk.entrepreneur = 'on'
      break
    default:
      trashTalk.words = '你沒有選擇任何一個職業喔！'
      break
  }

  return trashTalk
}
module.exports = generateTalk
