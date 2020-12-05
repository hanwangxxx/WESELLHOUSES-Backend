const Item = require('../models/item')
module.exports = {
  findOne(_id) {
    return Item.findOne({ _id })
  },
  add(data) {
    return Item.create(data)
  },
  update(_id, data) {
    return Item.findByIdAndUpdate(_id, data)
  },
  findAll(query = {}) {
    const params = { status: 0 }
    if (query.type && query.type.length > 0) {
      params.type = { $in: query.type }
    }
    if (query.name) {
      params.name = new RegExp(query.name)
    }
    return Item.find(params).populate('createUser')
  }
}