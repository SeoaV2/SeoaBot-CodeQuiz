const path = require('path').resolve()
const dataRoot = path + '/extensions/CodeQuiz/data/'

// if database is not connected, use this object
const fallback = {}

class CodeQuiz {
  /**
   * @param {import('../../classes/SeoaClient')} seoa
   */
  constructor (seoa) {
    this.client = seoa

    /**
     * @typedef {{language: string, question: string, explanation: string, answer: boolean, point: number, image?: string}} quiz
     * @type {quiz[]}
     */
    this.quizData = require(dataRoot + 'quizs.json')
  }

  getQuiz (id = Math.floor(Math.random() * this.quizData.length)) {
    return { ...this.quizData[id], id }
  }

  async getScore (id) {
    let dbData
    try {
      dbData = await this.client.db('user').select('score', 'solve').where('id', id)
    } catch (err) { console.error(err.stack); return fallback[id] || 0 }
    if (dbData.length < 1) return 0
    else return dbData[0]
  }

  async getLeaderboard () {
    return await this.client.db('user').select('*').orderBy('score', 'desc').limit(31)
  }

  async addScore (n, id) {
    let dbData
    try {
      dbData = await this.client.db('user').select('score', 'solved').where('id', id)
    } catch (err) {
      console.error(err.stack)
      if (!fallback[id]) fallback[id] = {}
      dbData = [fallback[id]]
    }

    if (dbData.length < 1) {
      try {
        await this.client.db('user').insert({ id, score: 0, solved: 0 })
      } catch (err) { console.error(err.stack) }

      dbData[0].score = 0
      dbData[0].solved = 0
    }

    const score = dbData[0].score + n
    const solved = dbData[0].solved + 1

    try {
      await this.client.db('user').update({ score, solved }).where('id', id)
    } catch (err) { console.error(err.stack) }

    return score
  }
}

module.exports = CodeQuiz
