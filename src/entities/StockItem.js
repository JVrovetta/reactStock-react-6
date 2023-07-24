import DateTime from "./DateTime"

const CATEGORIES = [
  "Jogos",
  "Filmes",
  "Livros",
  "Brinquedos"
]

class StockItem {
  constructor({ id, name, amount, price, category, description, createdAt, updatedAt }) {
    this.id = id
    this.name = name
    this.amount = +amount
    this.price = +price
    this.category = category
    this.description = description
    this.createdAt = createdAt ? new DateTime(createdAt) : new DateTime()
    this.updatedAt = updatedAt ? new DateTime(updatedAt) : null
    this.#validate()
  }

  #validate() {
    const validName = typeof this.name === "string"
    const validDescription = typeof this.description === "string"
    const validQuantity = typeof this.amount === "number" && Number.isInteger(this.amount)
    const validPrice = typeof this.price === "number"
    const validCategory = CATEGORIES.includes(this.category)
    if (!(validName && validDescription && validQuantity && validPrice && validCategory)) {
      throw new Error("Invalid item!")
    }
  }

  getFCreatedAt() {
    return this.createdAt.getFDateTime()
  }

  getFUpdatedAt() {
    if (this.updatedAt) {
      return this.updatedAt.getFDateTime()
    }
    return null
  }
}

export default StockItem
export { CATEGORIES }